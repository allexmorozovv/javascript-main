const ages = [22, 14, 1, 100, 90, 45, 31]

const predicate = (age: number) => {
    return age > 90
}

const oldAges =[100]

type CoursesType = {
    title: string
    price: number
}

const courses = [
    {
        title: 'CSS', price: 110
    },
    {
        title: 'JS', price: 200
    },
    {
        title: 'REACT', price: 150
    }
]
const cheapPredicate = (cource: CoursesType) => {
    return cource.price < 160
}
const cheapCourses = [
    {title: 'CSS', price: 110},
    {title: 'REACT', price: 150}
]


