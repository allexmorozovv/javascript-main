import {
    updateCompany,
    changeSkill, CompanyType,
    makeHairStyle,
    moveUser,
    removeSkill,
    SkillsType,
    UserType,
    UserWithLaptopType,
    UserWithSkillsType
} from "./10";



test('test', () => {
    const user: UserType = {
        name: 'Alex',
        hair: 32,
        address: {
            title: 'Moscow'
        }
    }

    const awesomeUser = makeHairStyle(user, 2)

    expect(awesomeUser.hair).toBe(16)
    expect(user.hair).toBe(32)
})



test('change address', () => {
    const user: UserWithLaptopType = {
        name: 'Alex',
        hair: 32,
        address: {
            title: 'Moscow'
        },
        laptop:{
            title:'Lenovo'
        }
    }

    const movedUser = moveUser(user, 'Minsk')

    expect(movedUser.address.title).toBe('Minsk')
    expect(user.address.title).toBe('Moscow')
})

test('change skill', () => {
    const user: UserWithSkillsType = {
        name: 'Alex',
        hair: 32,
        address: {
            title: 'Moscow'
        },

        skills:['html', 'css', 'js']
    }

    const uCopy = changeSkill(user,'js','ts')

 expect(uCopy.skills[2]).toBe( 'ts')
 expect(uCopy.skills.length).toBe( 3)
 expect(uCopy.skills).toStrictEqual( ['html', 'css', 'ts'])
})
test('remove skill', () => {
    const user: UserWithSkillsType = {
        name: 'Alex',
        hair: 32,
        address: {
            title: 'Moscow'
        },

        skills:['html', 'css', 'js']
    }

    const uCopy = removeSkill(user,'js')

    expect(uCopy.skills.length).toBe( 2)
    expect(uCopy.skills).toStrictEqual( ['html', 'css'])
})
test('add company test', () => {
    const user: UserWithSkillsType & CompanyType= {
        name: 'Alex',
        hair: 32,
        address: {
            title: 'Moscow'
        },

        skills:['html', 'css', 'js'],
        companies:[{id:1,title:'Epam'},{id:2, title: 'Ozon'}]
    }

    const uCopy = updateCompany(user,1,'Google')

    expect(uCopy.companies.length).toBe( 2)
    expect(uCopy.companies[0].title).toBe('Google')
    // expect(uCopy.companies[2]).toBe( 3)

})