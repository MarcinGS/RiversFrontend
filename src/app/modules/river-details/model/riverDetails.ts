import { Note } from "./note";

export interface RiverDetails{
    id: number,
    stationId: string,
    stationName: string,
    riverName: string,
    region: string,
    waterLevel: string,
    waterDate: string,
    waterTemp: string | null,
    tempDate: string | null,
    iceLevel: string,
    iceDate: string,
    growLevel: string,
    growDate: string,
    note: Array<Note>,
    image: string
}