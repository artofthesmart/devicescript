import * as ds from "@devicescript/core"
import { AsyncVoid } from "@devicescript/core"

// https://steveholgado.com/understanding-observables/#assumptions
// + some rxjs

export type Subscription = {
    unsubscribe: () => void
}
export type AsyncSubscription = Subscription | Promise<Subscription>
export type Observer<T> = UnaryFunction<T, AsyncVoid>
export type UnaryFunction<T, R> = (source: T) => R
export type OperatorFunction<T, R> = UnaryFunction<Observable<T>, Observable<R>>
export class Observable<T> {
    constructor(
        private readonly next: (
            observer: Observer<T>
        ) => AsyncVoid | AsyncSubscription
    ) {}
    async subscribe(observer: Observer<T>): Promise<Subscription> {
        const res = await this.next(observer)
        return res || undefined
    }

    pipe<A>(op1: OperatorFunction<T, A>): Observable<A>
    pipe<A, B>(
        op1: OperatorFunction<T, A>,
        op2: OperatorFunction<A, B>
    ): Observable<B>
    pipe<A, B, C>(
        op1: OperatorFunction<T, A>,
        op2: OperatorFunction<A, B>,
        op3: OperatorFunction<B, C>
    ): Observable<C>
    pipe<A, B, C, D>(
        op1: OperatorFunction<T, A>,
        op2: OperatorFunction<A, B>,
        op3: OperatorFunction<B, C>,
        op4: OperatorFunction<C, D>
    ): Observable<D>
    pipe<A, B, C, D, E>(
        op1: OperatorFunction<T, A>,
        op2: OperatorFunction<A, B>,
        op3: OperatorFunction<B, C>,
        op4: OperatorFunction<C, D>,
        op5: OperatorFunction<D, E>
    ): Observable<E>
    pipe<A, B, C, D, E, F>(
        op1: OperatorFunction<T, A>,
        op2: OperatorFunction<A, B>,
        op3: OperatorFunction<B, C>,
        op4: OperatorFunction<C, D>,
        op5: OperatorFunction<D, E>,
        op6: OperatorFunction<E, F>
    ): Observable<F>
    pipe<A, B, C, D, E, F, G>(
        op1: OperatorFunction<T, A>,
        op2: OperatorFunction<A, B>,
        op3: OperatorFunction<B, C>,
        op4: OperatorFunction<C, D>,
        op5: OperatorFunction<D, E>,
        op6: OperatorFunction<E, F>,
        op7: OperatorFunction<F, G>
    ): Observable<G>
    pipe<A, B, C, D, E, F, G, H>(
        op1: OperatorFunction<T, A>,
        op2: OperatorFunction<A, B>,
        op3: OperatorFunction<B, C>,
        op4: OperatorFunction<C, D>,
        op5: OperatorFunction<D, E>,
        op6: OperatorFunction<E, F>,
        op7: OperatorFunction<F, G>,
        op8: OperatorFunction<G, H>
    ): Observable<H>
    pipe<A, B, C, D, E, F, G, H, I>(
        op1: OperatorFunction<T, A>,
        op2: OperatorFunction<A, B>,
        op3: OperatorFunction<B, C>,
        op4: OperatorFunction<C, D>,
        op5: OperatorFunction<D, E>,
        op6: OperatorFunction<E, F>,
        op7: OperatorFunction<F, G>,
        op8: OperatorFunction<G, H>,
        op9: OperatorFunction<H, I>
    ): Observable<I>
    pipe<A, B, C, D, E, F, G, H, I>(
        op1: OperatorFunction<T, A>,
        op2: OperatorFunction<A, B>,
        op3: OperatorFunction<B, C>,
        op4: OperatorFunction<C, D>,
        op5: OperatorFunction<D, E>,
        op6: OperatorFunction<E, F>,
        op7: OperatorFunction<F, G>,
        op8: OperatorFunction<G, H>,
        op9: OperatorFunction<H, I>,
        ...operations: OperatorFunction<any, any>[]
    ): Observable<unknown>

    pipe(...operations: OperatorFunction<any, any>[]): Observable<any> {
        return operations?.length ? pipeFromArray(operations)(this) : this
    }
}

declare module "@devicescript/core" {
    interface Register<T> {
        pipe<A>(op1: OperatorFunction<T, A>): Observable<A>
        pipe<A, B>(
            op1: OperatorFunction<T, A>,
            op2: OperatorFunction<A, B>
        ): Observable<B>
        pipe<A, B, C>(
            op1: OperatorFunction<T, A>,
            op2: OperatorFunction<A, B>,
            op3: OperatorFunction<B, C>
        ): Observable<C>
        pipe<A, B, C, D>(
            op1: OperatorFunction<T, A>,
            op2: OperatorFunction<A, B>,
            op3: OperatorFunction<B, C>,
            op4: OperatorFunction<C, D>
        ): Observable<D>
        pipe<A, B, C, D, E>(
            op1: OperatorFunction<T, A>,
            op2: OperatorFunction<A, B>,
            op3: OperatorFunction<B, C>,
            op4: OperatorFunction<C, D>,
            op5: OperatorFunction<D, E>
        ): Observable<E>
        pipe<A, B, C, D, E, F>(
            op1: OperatorFunction<T, A>,
            op2: OperatorFunction<A, B>,
            op3: OperatorFunction<B, C>,
            op4: OperatorFunction<C, D>,
            op5: OperatorFunction<D, E>,
            op6: OperatorFunction<E, F>
        ): Observable<F>
        pipe<A, B, C, D, E, F, G>(
            op1: OperatorFunction<T, A>,
            op2: OperatorFunction<A, B>,
            op3: OperatorFunction<B, C>,
            op4: OperatorFunction<C, D>,
            op5: OperatorFunction<D, E>,
            op6: OperatorFunction<E, F>,
            op7: OperatorFunction<F, G>
        ): Observable<G>
        pipe<A, B, C, D, E, F, G, H>(
            op1: OperatorFunction<T, A>,
            op2: OperatorFunction<A, B>,
            op3: OperatorFunction<B, C>,
            op4: OperatorFunction<C, D>,
            op5: OperatorFunction<D, E>,
            op6: OperatorFunction<E, F>,
            op7: OperatorFunction<F, G>,
            op8: OperatorFunction<G, H>
        ): Observable<H>
        pipe<A, B, C, D, E, F, G, H, I>(
            op1: OperatorFunction<T, A>,
            op2: OperatorFunction<A, B>,
            op3: OperatorFunction<B, C>,
            op4: OperatorFunction<C, D>,
            op5: OperatorFunction<D, E>,
            op6: OperatorFunction<E, F>,
            op7: OperatorFunction<F, G>,
            op8: OperatorFunction<G, H>,
            op9: OperatorFunction<H, I>
        ): Observable<I>
        pipe<A, B, C, D, E, F, G, H, I>(
            op1: OperatorFunction<T, A>,
            op2: OperatorFunction<A, B>,
            op3: OperatorFunction<B, C>,
            op4: OperatorFunction<C, D>,
            op5: OperatorFunction<D, E>,
            op6: OperatorFunction<E, F>,
            op7: OperatorFunction<F, G>,
            op8: OperatorFunction<G, H>,
            op9: OperatorFunction<H, I>,
            ...operations: OperatorFunction<any, any>[]
        ): Observable<unknown>
        pipe(...operations: OperatorFunction<any, any>[]): Observable<any>
    }
}

ds.Register.prototype.pipe = function pipe<T>(
    ...operations: OperatorFunction<any, any>[]
): Observable<any> {
    const obs = fromRegister(this)
    return operations?.length ? pipeFromArray(operations)(obs) : obs
}

export function of<T>(values: T[]) {
    return new Observable<T>(async observer => {
        if (values) for (const value of values) await observer(value)
    })
}

export function fromEvent<TEvent extends ds.Event>(event: TEvent) {
    return new Observable<TEvent>(observer => {
        event.subscribe(pkt => observer(event))
        return {
            unsubscribe() {
                console.log(`todo: event.unsubscribe`)
            },
        }
    })
}

export function fromRegister<T>(register: ds.Register<T>) {
    return new Observable<T>(observer => {
        const unsubscribe = register.subscribe(v => observer(v))
        return { unsubscribe }
    })
}

export function identity<T>(x: T): T {
    return x
}
function pipeFromArray<T, R>(
    fns: Array<UnaryFunction<T, R>>
): UnaryFunction<T, R> {
    if (!fns?.length) {
        return identity as UnaryFunction<any, any>
    }
    if (fns.length === 1) {
        return fns[0]
    }
    return function piped(input: T): R {
        return fns.reduce(
            (prev: any, fn: UnaryFunction<T, R>) => fn(prev),
            input as any
        )
    }
}

/**
 * An observable operator that contains streamed values.
 * @param converter function to converts the observed value into a new value
 * @returns observable operator to be used in pipe
 */
export function map<T, R>(
    converter: (value: T) => R | Promise<R>
): OperatorFunction<T, R> {
    return function operator(source: Observable<T>) {
        return new Observable<R>(observer => {
            const subscription = source.subscribe(async v => {
                const r = await converter(v)
                observer(r)
            })
            return subscription
        })
    }
}
export function filter<T>(
    condition: (value: T) => boolean
): OperatorFunction<T, T> {
    return function operator(source: Observable<T>) {
        return new Observable<T>(observer => {
            const subscription = source.subscribe(async v => {
                const test = condition(v)
                if (test) {
                    await observer(v)
                }
            })
            return subscription
        })
    }
}

// TODO: michal
function setTimeout(fn: () => void, timeout: number): void {}

export function delay<T>(duration: number): OperatorFunction<T, T> {
    return function operator(source: Observable<T>) {
        return new Observable<T>(observer => {
            const subscription = source.subscribe(v => {
                setTimeout(async () => {
                    await observer(v)
                }, duration)
            })
            return subscription
        })
    }
}

export function span<V, A>(
    accumulator: (acc: A, value: V, index: number) => A | Promise<A>,
    seed: A
): OperatorFunction<V, A> {
    return function operator(source: Observable<V>) {
        return new Observable<A>(observer => {
            let last: A = undefined
            let index = 0
            const subscription = source.subscribe(async v => {
                if (last === undefined) {
                    last = seed
                    index++
                    observer(last)
                } else {
                    last = await accumulator(last, v, index++)
                    observer(last)
                }
            })
            return subscription
        })
    }
}

export function threshold(value: number): OperatorFunction<number, number> {
    return function operator(source: Observable<number>) {
        return new Observable<number>(observer => {
            let lastv: number = undefined
            const subscription = source.subscribe(v => {
                if (lastv === undefined) {
                    v = lastv
                    observer(v)
                } else if (Math.abs(v - lastv) >= value) {
                    v = lastv
                    observer(v)
                }
            })
            return subscription
        })
    }
}