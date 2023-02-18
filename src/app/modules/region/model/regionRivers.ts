import { Page } from "src/app/shared/model/page";
import { AdminRiver } from "../../admin/admin-river/model/adminRiver";
import { Region } from "./Region";

export interface RegionRivers{
    region: Region,
    rivers: Page<AdminRiver>
}