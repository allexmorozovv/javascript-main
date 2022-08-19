test('should take old men older then 90',()=>{
    const ages = [22, 14, 1, 100, 90, 45, 31]

 /*   const predicate = (age: number) => {
        return age > 90
    }*/

    const oldAges=ages.filter(age=>age>90)

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})
test('should take courses cheaper then 160',()=>{
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

   /* const chipPredicate = (course: CoursesType) => {
        return course.price < 160
    }*/

    const chipCourses=courses.filter(course=>course.price<160)

    expect(chipCourses.length).toBe(2)
    expect(chipCourses[0].title).toBe('CSS')
    expect(chipCourses[1].title).toBe('REACT')
})

test('get only comleted tasks',()=>{
    const tasks =[
        {id:1,title:'bread', isDone:true},
        {id:2,title:'milk', isDone:false},
        {id:3,title:'apples', isDone:false},
        {id:4,title:'eggs', isDone:true},
        {id:5,title:'beer', isDone:true},
    ]

    const completedTaks=tasks.filter(task=>task.isDone)

    expect(completedTaks.length).toBe(3)
    expect(completedTaks[0].title).toBe('bread')
})