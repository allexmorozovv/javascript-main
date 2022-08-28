import {ManType} from "./ManComponent";

let props: ManType

beforeEach(() => {
    props = {
        name: 'Alex',
        age: 44,
        lessons: [{title: '1'}, {title: '2'}, {title: '3'}],
        address: {
            street: {
                title: 'Mira Prospect'
            }
        }
    }
})

test('', () => {


    /* const age = props.age
     const lessons = props.lessons*/

    const {age, lessons} = props
    const {title} = props.address.street

    expect(age).toBe(44)
    expect(lessons.length).toBe(3)
    expect(title).toBe('Mira Prospect')
})

test(' ', () => {

    /* const l1 = props.lessons[0]
     const l2 = props.lessons[1]*/

    const [ls1, ...restLessons] = props.lessons

    expect(ls1.title).toBe('1')
    expect(restLessons.length).toBe(2)
    expect(restLessons[0].title).toBe('2')
})