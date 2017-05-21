/**
 * Created by kevinkreuzer on 21.05.17.
 */
const Observable = require('rxjs').Observable

Observable.interval(1000).take(5)
    .mapTo('My constant value')
    .subscribe(
        e => console.log(e),
        err => console.error(err),
        _ => console.info('Done')
    )
