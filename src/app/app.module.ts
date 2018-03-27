import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
// import * as EXIF from 'exif-js';
import {AgmCoreModule} from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBcHhfeJ0iNJAyfV8-m6eknRx_RcG6EpMM'
        }),
        AgmJsMarkerClustererModule
    ],
    providers: [],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule {

}