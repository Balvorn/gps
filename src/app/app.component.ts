import {Component} from '@angular/core';
import * as EXIF from 'exif-js';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
})
export class AppComponent {
    title = 'My first AGM project';
    lat: number;
    lng: number;
    show: boolean = false;

    constructor() {

    }


    getExif() {
        let img = document.getElementById('img');
        let result = document.getElementById('result');

        EXIF.getData(img, () => {

            this.DMSLat = EXIF.getTag(img, 'GPSLatitude');
            this.lat = this.DMSLat[0] + (((this.DMSLat[1] * 60) + (this.DMSLat[2])) / 3600);

            //console.log(this.lat);
        });

        EXIF.getData(img, () => {

            this.DSMLon = EXIF.getTag(img, 'GPSLongitude');
            this.lng = this.DSMLon[0] + (((this.DSMLon[1] * 60) + (this.DSMLon[2])) / 3600);

            //console.log(this.lng);
        });
    }

}
