import './App.css';
import Header from "./components/Header"
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: '1st todo',
      status: true
    },
    {
      id: 2,
      title: '2nd todo',
      status: true
    },
    {
      id: 3,
      title: '3rd todo',
      status: false
    },
  ]);

  return (
    <div className="bg-gray-200 min-h-screen">
      <Header />
      <div className="mx-auto p-4">
        <h1 className="text-3xl font-semibold mb-4 text-blue-700 text-center">Todo List</h1>
        <AddTodo todo={todo} setTodo={setTodo} />
        <TodoList todo={todo} setTodo={setTodo} />
      </div>
    </div>
  );
}

export default App;
