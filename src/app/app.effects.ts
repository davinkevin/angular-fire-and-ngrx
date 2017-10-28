import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import {ADD, AddAction, RefreshAction} from './app.actions';
import {AngularFireDatabase, SnapshotAction} from 'angularfire2/database';
import {Collections, FirebaseObject} from './app.reducer';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

@Injectable()
export class AppEffects {

    @Effect({ dispatch: false })
    add$: Observable<Action> = this.actions$.ofType(ADD)
        .map((action: AddAction) => action.payload)
        .switchMap((obj: FirebaseObject) => this.publishToFirebase(obj));

    @Effect()
    readItems = this.afd.list<FirebaseObject>('/collections')
        .valueChanges()
        .map((v: FirebaseObject[]) => v.reduce((prev, next) => ({...prev, [next.id]: next}), {}))
        .map((c: Collections) => new RefreshAction(c))
        ;

    constructor(private actions$: Actions, private afd: AngularFireDatabase) {}

    publishToFirebase(obj: FirebaseObject): Observable<SnapshotAction> {
        const col = this.afd.object(`/collections/${obj.id}`);
        col.set(obj);
        return col.snapshotChanges();
    }

} /* istanbul ignore next */

