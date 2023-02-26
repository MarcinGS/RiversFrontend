import { Measurements } from "../../common/model/measurements";
import { Region } from "../../region/model/region";
import { Note } from "./note";

export interface RiverDetails{
    id: number,
    stationId: string,
    stationName: string,
    riverName: string,
    region: Region,
    measurements: Array<Measurements>,
    note: Array<Note>,
    image: string
}