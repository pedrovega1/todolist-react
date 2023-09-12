import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function AddTodo({ todo, setTodo }) {
    const [value, setValue] = useState('');

    function saveTodo() {
        setTodo([...todo, {
            id: uuidv4(),
            title: value,
            status: true
        }]);
        // После сохранения очищаем значение инпута
        setValue('');
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-1/3 p-4 border border-gray-300 rounded">
                <input
                    placeholder="Type a task"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="w-full border border-gray-300 rounded p-2 mb-2"
                />
                <button
                    onClick={saveTodo}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Save
                </button>
            </div>
        </div>
    );
}

export default AddTodo;
