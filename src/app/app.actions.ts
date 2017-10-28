import { Action } from '@ngrx/store'
import {FirebaseObject} from './app.reducer';

export const ADD = '[Collection] Add';

export class AddAction implements Action {
    readonly type = ADD;
    constructor(public payload: FirebaseObject) {}
}


export type All
    = AddAction
    ;
