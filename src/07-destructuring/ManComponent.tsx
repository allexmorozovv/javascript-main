import React from "react";


type LessonsType = { title: string }

export type ManType = {
    name: string,
    age: number,
    lessons: Array<LessonsType>,
    address: {
        street: {
            title: string
        }
    }
}

type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: { model: string }
}
export const ManComponent: React.FC<PropsType> = ({title, man, ...props}) => {
    // const {title,man}=props

    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {props.car.model}
        </div>
        <div>
            {man.name}
        </div>
    </div>
}