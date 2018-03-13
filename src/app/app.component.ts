import { Component } from '@angular/core';
import * as EXIF from 'exif-js'
@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
})
export class AppComponent {
    title: string = 'My first AGM project';
    lat: number = 51.678418;
    lng: number = 7.809007;
    getExif() {
        let img = document.getElementById("img");
        EXIF.getData(img, function() {
            let allMetaData = EXIF.getAllTags(this);
            let latitude = (JSON.stringify(allMetaData.GPSLatitude[2], null, "\t"));
            let longitude = (JSON.stringify(allMetaData.GPSLongitude[2], null, "\t"));
            console.log("latitude :" + latitude);
            console.log("longitude :" + longitude)
        });

    }

}