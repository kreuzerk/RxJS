/**
 * Created by kevinkreuzer on 12.05.17.
 */

function MyObservable(subscribe) {
    this.subscribe = subscribe
}

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
