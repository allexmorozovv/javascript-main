export type LaptopType = {
    title: string
}
export type SkillsType = { skills: Array<string> }

export type UserType = {
    name: string
    hair: number
    address: { title: string }
}

export type CompanyType = { companies: Array<{ id: number, title: string }> }
type CompanyType2 ={id:number,title:string}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}
export type UserWithSkillsType = UserType & SkillsType

export const makeHairStyle = (u: UserType, pow: number) => {
    const copy = {
        ...u,
        hair: u.hair / pow
    }
    // copy.hair = u.hair / 2
    return copy
}

export const moveUser = (u: UserWithLaptopType, city: string) => ({...u, address: {...u.address, title: city}})

// userCopy.address = {...u.address,title:city}
//
// return userCopy


export const changeSkill = (u: UserWithSkillsType, oS: string, nS: string) => ({
    ...u, skills: u.skills.map(s => s === oS ? nS : s)
})

export const removeSkill = (u: UserWithSkillsType, rS: string) => ({
    ...u, skills: u.skills.filter(s => s !== rS)
})

export const updateCompany = (u: CompanyType, companyID: number, newTitle: string) => ({
    ...u, companies: u.companies.map(c => c.id === companyID ? {...c, title: newTitle} : c)
})

export  const changeCompanyTitle =(companies:{[key:string]:Array<CompanyType2>},
                                   userName:string,
                                   companyID:number,
                                   newTitle:string)=>{
let companyCopy={...companies}
    companyCopy[userName]=companyCopy[userName].map(c=>c.id===companyID ? {...c,title: newTitle}:c)


    return companyCopy;
}


