/**
 * Created by kevinkreuzer on 08.05.17.
 */
const dropClicks$ = Rx.Observable.fromEvent(dropButton, 'click')
const mouseMoves$ = Rx.Observable.fromEvent(svg, 'mousemove')

const BALL_ACTIONS = {
    MOVING: 'MOVING',
    STARTED: 'STARTED',
    ENDED: 'ENDED'
}

/*
 Contact Map --> Drops new ball when the previous ball has finished
 Switch Map --> Removes the current ball when a new ball arrives
 Merge Map --> Allows you to have multiple balls at the same time
 */
Rx.Observable.merge(dropClicks$, mouseMoves$, speech$)
    .concatMap(_ => dropBall(svg)
        .map(e => ({action: BALL_ACTIONS.MOVING}))
        .startWith({action: BALL_ACTIONS.STARTED})
        .concat([{action: BALL_ACTIONS.ENDED}])
    )
    .scan((state, ballaction) => {
        if (ballaction.action === BALL_ACTIONS.STARTED) {
            state.dropped++;
        }
        if (ballaction.action === BALL_ACTIONS.ENDED) {
            state.finished++;
        }
        return state
    }, {dropped: 0, finished: 0})
    .subscribe(
        state => {
            updateCounter(state)
        }
    )

