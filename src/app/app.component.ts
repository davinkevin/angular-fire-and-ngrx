import {Component, OnInit} from '@angular/core';
import {Collections, ModuleState, selectCollections, State} from './app.reducer';
import {Store} from '@ngrx/store';
import {AddAction} from './app.actions';

@Component({
    selector: 'app-root',
    template: `
        <h3>Example Firebase</h3>
        <pre><code>
            {{ collections | json }}
        </code></pre>

        <button (click)="add()">Add !</button>
    `,
    styles: []
})
export class AppComponent implements OnInit {

    collections: Collections = {};
    counter: number = 0;

    constructor(private store: Store<ModuleState>) {}

    ngOnInit(): void {
        this.store
            .select(selectCollections)
            .subscribe((c: Collections) => this.collections = c);
    }

    add(): void {
        const obj = {id: '' + this.counter++, value: 'a super string !'};
        this.store.dispatch(new AddAction(obj));
    }

}
