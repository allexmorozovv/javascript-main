type StreetType = {
    title: string
}

type AddressType = {
    number?: number
    street: StreetType
}
export type HousesType = {
    id:number,
    buildedAt: number
    repaired: boolean
    address: AddressType
}

export type GovernmentBuildingsType = {
    type: "HOSPITAL" | "FIRE-STATION"
    budget: number
    staffCount: number
    address: AddressType
}
export type CityType = {

    title: string
    houses: Array<HousesType>
    governmentBuildings: Array<GovernmentBuildingsType>
    citizensNumber: number
}

export const bigStaffBuildings = (building: Array<GovernmentBuildingsType>, number: number) => {
    return building.filter(b => b.staffCount > number)
}

export const nameOfCityStreet = (city: CityType, str: string) => {
    city.houses = city.houses.filter(c => c.address.street.title === str)
}