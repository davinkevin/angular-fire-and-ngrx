import {All, REFRESH} from './app.actions';

export interface FirebaseObject {
    id: string;
    [v: string]: any;
}

export interface Collections {
    [id: string]: FirebaseObject;
}

export interface ModuleState {
    root: State;
}

export interface State {
    collections: Collections;
}

const initialState: State = {
    collections: {}
};

export function reducer(state = initialState, action: All): State {
    switch (action.type) {

        case REFRESH: {
            return {
                collections: {...action.payload}
            }
        }

        default: { return state; }
    }
}

export function selectCollections(state: ModuleState){
    return state.root.collections;
}