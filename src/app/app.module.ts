import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import * as exif from 'exif-js'
import { AgmCoreModule } from '@agm/core';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBcHhfeJ0iNJAyfV8-m6eknRx_RcG6EpMM'
        })
    ],
    providers: [],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}