import { Page } from 'src/app/modules/common/model/page';
import { AdminRiver } from '../../admin/admin-river/model/adminRiver';
import { Region } from './Region';

export interface RegionRivers {
  region: Region;
  rivers: Page<AdminRiver>;
}
