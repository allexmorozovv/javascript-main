const changeAge = (u: UserType) => {
    u.age++
}

type UserType = {
    name: string
    age: number
}

test('reference type test', () => {
    let user: UserType = {
        name: 'Alex',
        age: 22
    }
    changeAge(user)

    expect(user.age).toBe(23)

    const superman = user
    superman.age = 1000
    expect(user.age).toBe(1000)
})