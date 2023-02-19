export interface AdminRiverUpdate{
    id: number,
    stationId: number,
    stationName: string,
    riverName: string,
    regionId: number,
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