export interface AdminRiver {
    id: number,
    stationId: number | null,
    stationName: string | null,
    riverName: string | null,
    regionId: number | null,
    waterLevel: number | null,
    waterDate: string | null,
    waterTemp: number | null,
    tempDate: string | null,
    iceLevel: number | null,
    iceDate: string | null,
    growLevel: number | null,
    growDate: string | null,
    image: string | null
}