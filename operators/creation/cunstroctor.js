/**
 * Created by kevinkreuzer on 01.05.17.
 */
const Rx = require('rxjs/Rx');

let numbers$ = new Rx.Observable(observer => {
    observer.next('Banana');
    observer.next('Kiwi');
    observer.next('Ananas');
    observer.complete();
});

numbers$.subscribe(
    x => console.log('New Value', x),
    err => console.error('An error occured', err),
    () => console.info('I am done')
)

