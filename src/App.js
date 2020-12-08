import './App.css';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function App() {
  var [todoItem, setTodoItem] = useState('');
  var [todoList, setTodoList] = useState([]);

  function addItem(event) {
    event.preventDefault();
    let tempList = [...todoList];
    tempList.push(todoItem);
    setTodoList(tempList);
    setTodoItem('');
  }

  function done(index) {
    // debugger;
    let tempList = [...todoList];
    tempList.splice(index, 1);
    setTodoList(tempList);
  }

  return (
    <div className="app">
      <h1>Todo list</h1>
      <input type="text" value={todoItem} onChange={(event) => setTodoItem(event.target.value)} />
      <Button onClick={(event) => addItem(event)}>Add</Button>
      <p>{ todoList.length + ' undone out of ' + todoList.length}</p>
      {/* {todoItem} */}
      {todoList.map((item,index) => 
        <li key={index} onClick={() => done(index)}>{item}</li>
      )}
    </div>
  );
}

export default App;
