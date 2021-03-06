# Operators
## Combination

- **Combine all** Use it to flatten inner Observables with a combineLatest strategy
- **Combine latest** Emits the last value of each observable (Additionaly you can provide a projection function that takes the value from each observable as parameter as third argument)
- **Concat** Concats multiple observables - emits one observable only after the other completes
- **Concat all** Concats multiple inner observables - emits one observable only after the other completes
- **Fork join** Emits the last value of each observable after all completed
- **Merge** Merges multiple observables together and emits a value as soon as it arrives
- **Merge all** Flattens InnerObservables with the merge strategie
- **Race** Uses the observable that emits the first
- **Start with** Emits the given value first
- **With latest from** Emits the latest value from another observable when the source emits
- **Zip** Emits first value after all observables emmited a first value. The second value is emmited as soon as all observables emmit a second value

## Conditional

- **defaultIfEmpty** Emits a default value if the observable completes and did not emmmit a value
- **every** Emmits true of false if an observable completes or a item does not pass the condition

## Creation

- **Create** Creates on observable that executes the subscribe function you pass in
- **empty** Creates an observable that does not emit a value and completes
- **from** Creates an observable from an iterable
- **fromEvent** Creates an observable from en Event
- **fromPromise** Creates an observable from a promise
- **interval** Creates an observable that emits a value in an interval. For example emits a value every second.
- **of** Creates an observable from given values
- **range** Creates an observable that emits all values in a given range
- **throw** Creates an observable that throws an error
- **timer** After a given duration it emits numbers in a interval sequence

## Error Handling
- **catch** Handles errors in an Observable sequence. Returns a new observable
- **retry** Retry an observable sequence a specific number of times if an error occures
- **retryWhen** Retry an observable sequence on error based custom criteria

## Multicast
- **publish** Shares a observable with its subscribers as soon as we call connect
- **multicast** Shares an observable by providing the Subject. You can also provide a BehaviourSubject or a AsyncSubject.
- **share** Shares an observable with multiple subscribers

## Filter
- **debounce** Discard emitted values that take less than the specified time between output - callback needs to return an Observable
- **debounceTime** Discard emitted values that take less than the specified time
- **distinctUntilChanged** Emits only if the currenvt value is different from the previous value
- **filter** Emits all values that pass a tha criteria defined in the callback
- **first** Emits the first value from an observable. Can have a projection function. For example to only emmit the first odd value. Furthermore there is alos a possibility to provide a default value
- **ignoreElements** Ignores all elements and only emits errors and completions
- **last** Emits the last values. This operator has the same possibilities like first, projection function, default value etc...
- **sample** emit the most recent items emitted by an Observable within periodic time intervals
- **single** emits a single value that passes a condition, emits an error if multiple vlaues passes that condition
- **skip** skips the number of values provided by parameter
- **skipUntil** skips value from the source observable until the second observable emitts
- **skipWhile** skips emited elements that do not fulfill a condition
- **take** The observable emits only the provided number of elements
- **takeUntil** The observable emits value until the other observable emits values
- **takeWhile** Emits values while the given condition is true
- **throttle** Emit value only when duration, determined by provided function, has passed.
- **throttleTime** Emit value only when duration has passed.
- **concatMap** Map values to inner observable, subscribe and emit in order.


## Transformation Operators
- **buffer** Collect output values until provided observable emits, emit as array.
- **bufferCount** Collect emitted values until provided number is fulfilled, emit as array.
- **bufferTime** Collect emitted values until provided time has passed, emit as array.
- **bufferToggle** Toggle on to catch emitted values from source, toggle off to emit buffered values as array.
- **bufferWhen** Collect all values until closing selector emits, emit buffered values.
- **expand** Recursively call provided function.
- **groupBy** Group into observables based on provided value.
- **map** Apply projection with each value from source.
- **mergeMap** Flattens inner observables with the map strategy
- **partition** Split one observable into two based on provided predicate.
- **pluck** Select a field of an object to emit
- **scan** takes a accumulated value and the current value and applies the provided function. It starts with the provided count
- **switchMap** Map to observable, complete previous inner observable, emit values.
- **window** Observable of values for window of time.
- **windowCount** Observable of values from source, emitted each time provided count is fulfilled.
- **windowTime** Observable of values collected from source for each provided time span.
- **windowToggle** Collect and emit observable of values from source between opening and closing emission.
- **windowWhen** Close window at provided time frame emitting observable of collected values from source.

## Utility Operators
- **do**Transparently perform actions or side-effects, such as logging.
- **delay** Delay emitted values by given time.
- **delayWhen** Delay emitted values determined by provided function.
- **dematerialize** Turn notification objects into notification values.
- **let** Let me have the whole observable.

## Notification
- **materialize** Emits a Notification Wrapper for the actual event
- **dematerialize** Reconverts the Wrapped Notification from materialize and emits the correct event

