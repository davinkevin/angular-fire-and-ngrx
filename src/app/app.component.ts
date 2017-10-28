import {Component, OnInit} from '@angular/core';
import {Collections, ModuleState, selectCollections, State} from './app.reducer';
import {Store} from '@ngrx/store';
import {AddAction} from './app.actions';
import {AngularFireDatabase} from 'angularfire2/database';
import {v4} from 'uuid';

@Component({
    selector: 'app-root',
    template: `
        <h1>Example Firebase and NgRX</h1>
        
        <h3>State Store</h3>
        <pre><code>
            {{ collections | json }}
        </code></pre>

        <button (click)="add()">Add !</button>
    `,
    styles: []
})
export class AppComponent implements OnInit {

    collections: Collections = {};

    constructor(private store: Store<ModuleState>) {}

    ngOnInit(): void {
        this.store
            .select(selectCollections)
            .subscribe((c: Collections) => this.collections = c);
    }

    /*
    add(): void {
        const obj = {id: v4(), value: 'a super string !'};
        this.store.dispatch(new AddAction(obj));

        const col = this.afd.object(`/collections/${obj.id}`);
        col.set(obj);
        col.snapshotChanges().subscribe();
    }
     */

    add(): void {
        const obj = {id: v4(), value: 'a super string !'};
        this.store.dispatch(new AddAction(obj));
    }

}
