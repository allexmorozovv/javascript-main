type StreetType={
    title:string
}

type AddressType={
    number?:number
    street:StreetType
}
 export type HousesType={
    buildedAt:number
    repaired:boolean
    address:AddressType
}

 export type GovernmentBuildingsType={
    type:"HOSPITAL"|"FIRE-STATION"
    budget:number
    staffCount:number
    address:AddressType
}
export type CityType={
    title:string
    houses:Array<HousesType>
    governmentBuildings:Array<GovernmentBuildingsType>
    citizensNumber:number
}

export const bigStaffBuidings = (building:Array<GovernmentBuildingsType>,number:number) => {
return building.filter(b=>b.staffCount>number)
}