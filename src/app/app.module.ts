import {NgModule} from '@angular/core';
import {AppComponent} from '@app/app.component';
import {CoreModule} from '@core/core.module';
import {BrowserModule} from '@angular/platform-browser';

import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';

import {appReducers} from './store/reducers/app.reducers';
import {ProductEffects} from './store/effects/product.effects';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        CoreModule,
        BrowserModule,
        StoreModule.forRoot(appReducers),
        EffectsModule.forRoot([ProductEffects]),
        StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
        StoreDevtoolsModule.instrument({
            maxAge: 10
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
