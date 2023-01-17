import React, { useState } from "react";

function TodoList({todo, setTodo }) {
    // с помощью функции мы получили массив
    console.log(todo)

    const[edit,setEdit] = useState(null)

    const [value,setValue] = useState('')

    function deleteTodo(id){
        // создаем переменную которой передаем копию todo и применяем filter, где ставим условия 
        let newTodo = [...todo].filter(item=> item.id!=id)
        setTodo(newTodo)
        // console.log('delete')
    }

    function editTodo(id,title){
        setEdit(id)
        setValue(title)
    }

    function statusTodo(id){
        let newTodo = [...todo].filter( item =>{
            if(item.id == id) {
                // меняем статус на противоположный
                item.status = !item.status
            }
            // чтобы не убирался весь массив
            return item
        })
        setTodo(newTodo)
    }

    function saveTodo(id){
        let newTodo = [...todo].map(item => {
            if (item.id == id){
                item.title = value
            }
            return item
    })
    setTodo(newTodo)
    setEdit(null)
    }
    return(
        <div>
            {
            todo.map( item => (
                <div key={item.id}>
                    {
                        edit == item.id ? 
                        <div>
                         < input value= {value} onChange={(e)=> setValue(e.target.value)} />
                        </div> :
                        <div> {item.title} </div>
                    }

                    {
                        edit == item.id ?
                        <div>
                            <button  onClick={()=>saveTodo(item.id)} >Save</button>
                        </div> :
                    <div>
                        <button onClick={() => deleteTodo(item.id)} >Delete</button>
                        <button onClick={() => editTodo(item.id, item.title) } >Edit</button>
                        <button onClick={() => statusTodo(item.id)} >Close/Open</button>
                    </div>
                    }

                </div>
            ))
            }
        </div>
    )
}
export default TodoList;