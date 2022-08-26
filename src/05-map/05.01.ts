export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: 'Andrew Ivanov', age: 33},
    {name: 'Alexander Petrov ', age: 24},
    {name: 'Dmitry Sidorov ', age: 18}
]

const alexTransformator = (man: ManType) =>
    ({
        stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1]
    })


const devs1 = [
    {
        stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: 'Andrew', lastName: 'Ivanov'
    },
    {
        stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: 'Alexander', lastName: 'Petrov'
    },
    {
        stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: 'Dmitry', lastName: 'Sidorov'
    }
]

const devs2 = [
    alexTransformator(people[0]),
    alexTransformator(people[1]),
    alexTransformator(people[2]),
]

const devs3 = people.map(alexTransformator)
const devs4 = people.map(man =>
    ({
        stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1]
    }))

const messages = people.map(man => `Hello ${man.name.split(' ')[0]}. Welcome to IT`)
export const createGreetingMessage = (people: Array<ManType>) => {
    return people.map(man => `Hello ${man.name.split(' ')[0]}. Welcome to IT`)
}