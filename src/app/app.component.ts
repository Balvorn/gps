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
    lon: number;

    getExif() {
        const img = document.getElementById('img');
        const result = document.getElementById('result');

        EXIF.getData(img, () => {

            this.lat = EXIF.getTag(img, 'GPSLatitude');
            this.lat = this.lat[0] + (((this.lat[1] * 60) + (this.lat[2])) / 3600);

            console.log(this.lat);
        });

        EXIF.getData(img, () => {

            this.lon = EXIF.getTag(img, 'GPSLongitude');
            this.lon = this.lon[0] + (((this.lon[1] * 60) + (this.lon[2])) / 3600);

            console.log(this.lon);
        });
    }

}
