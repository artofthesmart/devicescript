import { AsyncVoid } from "@devicescript/core"

/**
 * Schedules a handler to be called at a later time. Executes timeout before interval if combined.
 *
 * @param handler function to execute
 * @param options options to configure the scheduling
 * @returns clear timer function
 */
export function schedule(
    handler: (props?: {
        /**
         * Update the interval of the schedule.
         * @param ms internal in milliseconds
         */
        updateInterval: (ms: number) => void
    }) => AsyncVoid,
    options: {
        /**
         * Time in milliseconds to wait before the first execution of the handler.
         */
        timeout?: number
        /**
         * Time in milliseconds to wait before executing the handler in an internval.
         */
        interval?: number
    }
) {
    let timerId: number
    let intervalId: number
    const unsub = () => {
        if (timerId) clearTimeout(timerId)
        if (intervalId) clearInterval(intervalId)
        timerId = intervalId = undefined
    }

    if (!handler) return unsub

    let { interval, timeout } = options
    if (interval === undefined && timeout === undefined) timeout = 20

    const props = {
        updateInterval: (ms: number) => {
            interval = ms
            if (intervalId !== undefined) updateInterval(intervalId, ms)
        },
    }
    const cb = async () => {
        await handler(props)
    }

    if (timeout >= 0 && interval >= 0) {
        timerId = setTimeout(async () => {
            await cb()
            // check if cancelled or schedule
            if (timerId !== undefined) intervalId = setInterval(cb, interval)
        }, 20)
    } else if (timeout) {
        timerId = setTimeout(cb, timeout)
    } else if (interval) {
        intervalId = setInterval(cb, interval)
    }
    return unsub
}
