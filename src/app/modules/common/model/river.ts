import { Region } from '../../region/model/region';
import { Note } from '../../user-list/model/note';

export interface River {
  id: number;
  stationId: string;
  stationName: string;
  riverName: string;
  region: Region;
  waterLevel: string;
  waterDate: string;
  waterTemp: string | null;
  tempDate: string | null;
  iceLevel: string;
  iceDate: string;
  growLevel: string;
  growDate: string;
  notes: Array<Note>;
  image: string;
}
