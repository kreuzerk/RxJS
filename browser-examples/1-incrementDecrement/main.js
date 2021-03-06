/**
 * Created by kevinkreuzer on 05.05.17.
 */
const BUTTON_EVENTS = Object.freeze({
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT'
})

const increment$ = Rx.Observable.fromEvent(incrementButton, 'click')
    .map(e => BUTTON_EVENTS.INCREMENT)

const decrement$ = Rx.Observable.fromEvent(decrementButton, 'click')
    .map(e => BUTTON_EVENTS.DECREMENT)

Rx.Observable.merge(increment$, decrement$)
    .scan((acc, value) => {
        return value === BUTTON_EVENTS.INCREMENT ? ++acc : --acc
    }, 0)
    .subscribe(value => updateOutputValue(value))
