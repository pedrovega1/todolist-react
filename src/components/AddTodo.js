import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
//  npm install uuid - генератор уникальных id
function AddTodo ({todo,setTodo}) {
    const [value,setValue]=useState('')
    // console.log(value)

    function saveTodo() {
        setTodo(
            [...todo, {
                id: uuidv4(),
                title: value,
                status:true
            }]
        )
        // При сохранении, будет выполняться функция setValue, чтобы очистить инпут
        setValue('')
    }

    return(
        <div>
             
            <input placeholder='Type a task'value={value} onChange={(e)=> setValue(e.target.value)}/>
            <button onClick={saveTodo}> Save</button>
        </div>
    )
}

export default AddTodo;