import { Injectable } from '@angular/core';
import { River } from './model/river';

@Injectable({
  providedIn: 'root'
})
export class RiverService {

  constructor() { }

  getRivers(): River[]{
    return [
      { stationId: "151140030",
        stationName: "Przewoźniki",
        riverName: "Skroda",
        region: "lubuskie",
        waterLevel: "231",
        waterDate: "2023-01-23 19:00:00",
        waterTemp: null,
        tempDate: null,
        iceLevel: "0",
        iceDate: "2022-12-08 09:10:00",
        growLevel: "0",
        growDate: "2022-09-26 12:00:00"
      },
      {
        stationId: "153190040",
        stationName: "Bągart",
        riverName: "Dzierzgoń",
        region: "pomorskie",
        waterLevel: "700",
        waterDate: "2023-01-23 19:00:00",
        waterTemp: null,
        tempDate: null,
        iceLevel: "0",
        iceDate: "2021-03-03 11:10:00",
        growLevel: "302",
        growDate: "2022-09-30 10:10:00"
      },
      {
        stationId: "149210120",
        stationName: "Godowa",
        riverName: "Stobnica",
        region: "podkarpackie",
        waterLevel: "653",
        waterDate: "2023-01-23 19:00:00",
        waterTemp: null,
        tempDate: null,
        iceLevel: "0",
        iceDate: "2022-12-05 12:57:00",
        growLevel: "0",
        growDate: "2022-08-26 11:00:00"
      }
    ]
  }
}
