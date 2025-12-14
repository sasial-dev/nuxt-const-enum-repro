export const enum SelectionType {
	Platform,
	Station,
	Trip,
	Route,
}

export type PlatformInstance = { id: string }
export type StationInstance = { id: string }
export type VehicleInstance = { id: string, trip: string }

