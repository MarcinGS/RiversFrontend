import { Measurements } from '../../common/model/measurements';
import { Region } from '../../region/model/region';
import { Note } from '../../user-list/model/note';

export interface RiverDetails {
  id: number;
  stationId: string;
  stationName: string;
  riverName: string;
  region: Region;
  measurements: Array<Measurements>;
  image: string;
}
