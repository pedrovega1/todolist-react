
import './App.css';
import Header from "./components/Header"
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { useState } from 'react';
function App() {

// first movement useState - хранит инфу, которая будет доступна в переменной.
//  переменная - todo.
// SetTodo - функция, которая будет менять переменную.
// Оператор [] (квадратные скобки) используется для доступа к свойствам объекта (массива или функции), а также для доступа к элементам массива.
const[todo,setTodo] = useState([
  {
    id:1,
    title:'1st todo',
    status: true
  },
  {
    id:2,
    title:'2nd todo',
    status: true
  },
  {
    id:3,
    title:'3rd todo',
    status: false
  },
])
// 2) для вывода State, надо в компонент засунуть эти пропсы
  return (
    <div className="App">
     <Header/>
     <AddTodo  todo={todo} setTodo ={setTodo}/>
     <TodoList todo={todo} setTodo ={setTodo}/>
    </div>
  );
}

export default App;
