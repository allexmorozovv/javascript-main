import {StudentType} from "../02-objects/02";
import {GovernmentBuildingsType, HousesType} from "../02-objects/02.02";

export const addTech = (st: StudentType, tech: string) => {
    st.technologies.push({
        id: new Date().getTime(),
        title: tech
    })
}

export const makeStudentNotActive = (st: StudentType) => {
    st.isActive = false
}

export const doesStudentLiveIn = (s: StudentType, c: string) => {
    return s.address.city.cityTitle === c
}

export const addMoneyToBudget = (build: GovernmentBuildingsType, budget: number) => {
    build.budget += budget
}

export const repairHouse = (cityHouse: HousesType) => {
    cityHouse.repaired = true
}

export const toFireStaff = (cBuild: GovernmentBuildingsType, stCount: number) => {
    cBuild.staffCount -= stCount
}
export const toHireStaff = (cBuild: GovernmentBuildingsType, stCount: number) => {
    cBuild.staffCount += stCount
}