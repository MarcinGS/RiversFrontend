import { Region } from "src/app/modules/region/model/region";

export interface AdminRiverUpdate{
    id: number,
    stationId: number,
    stationName: string,
    riverName: string,
    region: Region,
    waterLevel: string,
    waterDate: string,
    waterTemp: string | null,
    tempDate: string | null,
    iceLevel: string,
    iceDate: string,
    growLevel: string,
    growDate: string,
    image: string
}