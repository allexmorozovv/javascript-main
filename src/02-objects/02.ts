type TechType =
    {
        id: number
        title: string
    }

type LocalCityType = {
    cityTitle: string
    countryTitle: string
}

type AddressType = {
    streetTitle: string
    city: LocalCityType
}

type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>
}


const student: StudentType = {
    id: 1,
    name: 'Alex',
    age: 44,
    isActive: true,
    address: {
        streetTitle: 'Mira',
        city: {
            cityTitle: 'Moscow',
            countryTitle: 'Russia'
        }
    },
    technologies: [
        {
            id: 1,
            title: 'HTML',
        },
        {
            id: 2,
            title: 'CSS',
        },
        {
            id: 3,
            title: 'React'
        }
    ]
}
console.log(student.name)
console.log(student.address.city.cityTitle)
console.log(student.technologies[2].title)
