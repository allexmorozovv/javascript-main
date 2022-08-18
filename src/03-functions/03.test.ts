import {StudentType} from "../02-objects/02";
import {addTech, doesStudentLiveIn, makeStudentNotActive} from "./03";

let student: StudentType
beforeEach(() => {
    student = {
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
})

test(' new tech skill should be added to student', () => {
    expect(student.technologies.length).toBe(3)
    addTech(student, 'JS')

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe('JS')
    expect(student.technologies[3].id).toBeDefined()
})
test(' student should be made not active', () => {
    expect(student.isActive).toBe(true)
    makeStudentNotActive(student)

    expect(student.isActive).toBe(false)
})
test(' does student live in city?', () => {
    let res1 = doesStudentLiveIn(student, 'Moscow')
    let res2 = doesStudentLiveIn(student, 'Minsk')
    expect(res1).toBe(true)
    expect(res2).toBe(false)
})