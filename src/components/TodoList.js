import React, { useState } from "react";

function TodoList({ todo, setTodo }) {
    const [edit, setEdit] = useState(null);
    const [value, setValue] = useState('');

    function deleteTodo(id) {
        const newTodo = [...todo].filter(item => item.id !== id);
        setTodo(newTodo);
    }

    function editTodo(id, title) {
        setEdit(id);
        setValue(title);
    }

    function statusTodo(id) {
        const newTodo = [...todo].map(item => {
            if (item.id === id) {
                item.status = !item.status;
            }
            return item;
        });
        setTodo(newTodo);
    }

    function saveTodo(id) {
        const newTodo = [...todo].map(item => {
            if (item.id === id) {
                item.title = value;
            }
            return item;
        });
        setTodo(newTodo);
        setEdit(null);
    }

    return (
        <div className="flex justify-center items-center py-5">
            <div className="w-1/3">
                {todo.map(item => (
                    <div
                        key={item.id}
                        className={`mb-4 p-2 border border-gray-300 rounded ${
                            item.status ? "bg-white" : "bg-gray-200"
                        }`}
                    >
                        {edit === item.id ? (
                            <div>
                                <input
                                    value={value}
                                    onChange={e => setValue(e.target.value)}
                                    className="w-full border border-gray-300 rounded"
                                />
                            </div>
                        ) : (
                            <div>{item.title}</div>
                        )}
                        {edit === item.id ? (
                            <div>
                                <button
                                    onClick={() => saveTodo(item.id)}
                                    className="bg-blue-500 text-white px-2 py-1 rounded"
                                >
                                    Save
                                </button>
                            </div>
                        ) : (
                            <div>
                                <button
                                    onClick={() => deleteTodo(item.id)}
                                    className="bg-red-500 text-white px-2 py-1 rounded mr-2"
                                >
                                    Delete
                                </button>
                                <button
                                    onClick={() => editTodo(item.id, item.title)}
                                    className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => statusTodo(item.id)}
                                    className={`${
                                        item.status
                                            ? "bg-green-500"
                                            : "bg-red-500"
                                    } text-white px-2 py-1 rounded`}
                                >
                                    {item.status ? "Close" : "Open"}
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TodoList;
