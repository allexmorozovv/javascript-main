import React, {MouseEvent} from "react";


export const User = () => {
    const clickBtn = (event: MouseEvent<HTMLButtonElement>) => {
        alert(event.currentTarget.name)
    }
    const clickInput = (e:MouseEvent<HTMLInputElement>) => {
        alert('age changed' + e.currentTarget.value)
    }
    const deleteUser = () => {
        alert('delete')
    }
    const saveUser = () => {
        alert('save')
    }

    return <div>Alex
        <input onClick={clickInput} type="number"/>
        <button name={'del'} onClick={clickBtn}>delete</button>
        <button name={'sav'} onClick={clickBtn}>save</button>
    </div>
}