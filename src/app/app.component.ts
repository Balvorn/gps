import {Component} from '@angular/core';
import * as EXIF from 'exif-js';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
})
export class AppComponent {

    title = 'Quirky Places';
    lat: number;
    lon: number;
    markers: any[];
    images: any[];

    constructor() {
        this.markers = [];
        this.images = [{src: "../assets/img.jpg"}, {src: "../assets/img3.jpg"}];
    }

    action(i) {
        console.log('marker' + i + 'cliqué')
    }

    getExif(i) {
        const img = document.getElementById(i);

        EXIF.getData(img, () => {

            this.lat = EXIF.getTag(img, 'GPSLatitude');
            if (this.lat) {
                this.lat = this.lat[0] + (((this.lat[1] * 60) + (this.lat[2])) / 3600);

            } else {
                alert("pas d'infos exif")
            }
            this.lon = EXIF.getTag(img, 'GPSLongitude');

            if (this.lon) {
                this.lon = this.lon[0] + (((this.lon[1] * 60) + (this.lon[2])) / 3600);
                console.log(this.markers);
            } else {
                alert("pas d'infos exif")
            }
        });
        this.markers.push({
            lat: this.lat,
            lon: this.lon
        });
    }
}