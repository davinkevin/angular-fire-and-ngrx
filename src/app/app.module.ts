import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {reducer} from './app.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        StoreModule.forRoot({root: reducer}),
        EffectsModule.forRoot([]),
        StoreDevtoolsModule.instrument({
            maxAge: 25 //  Retains last 25 states
        })

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
