import { Action } from '@ngrx/store'
import {Collections, FirebaseObject} from './app.reducer';

export const ADD = '[Collection] Add';
export const REFRESH = '[Collection] Refresh';

export class AddAction implements Action {
    readonly type = ADD;
    constructor(public payload: FirebaseObject) {}
}

export class RefreshAction implements Action {
    readonly type = REFRESH;
    constructor(public payload: Collections) {}
}


export type All
    = AddAction
    | RefreshAction
    ;
