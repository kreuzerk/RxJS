/**
 * Created by kevinkreuzer on 13.05.17.
 */
const MyObservable = require('./myObservable')

let test$ = new MyObservable(function (observer) {
    observer.next('Batman')
    observer.next('Aquaman')
    observer.next('Spiderman')
    observer.complete()
});

let observer = {
    next: e => console.log(e),
    error: e => console.error(err),
    complete: () => console.info('I am done')
}

test$.subscribe(observer);
test$.subscribe(
    e => console.log(e),
    err => console.error(err),
    () => console.info('I am done')
)

