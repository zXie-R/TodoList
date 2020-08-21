import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/About';
import axios from 'axios';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('https://todoapi00.azurewebsites.net/api/Todoitems')
      .then(res => setTodos(res.data))
  }, []);

  const markComplete = (item) => {
    return () => {
      axios.put(
        `https://todoapi00.azurewebsites.net/api/TodoItems/${item.id}`, 
        { ...item, completed: !item.completed }).then(res => {
          setTodos(todos.map(todo => {
            if (todo.id === item.id) {
              todo.completed = !todo.completed;
            }
            return todo;
          }));
        });
    }
  };

  const delTodo = (id) => {
    return () => {
      axios.delete(`https://todoapi00.azurewebsites.net/api/TodoItems/${id}`).then(res => {
        setTodos(todos.filter((todo) => todo.id !== id));
      });
    }
  }

  const addTodo = (title) => {
    axios.post('https://todoapi00.azurewebsites.net/api/TodoItems', {
      title,
      completed: false
    }).then(res => {
      console.log(res.data);
      setTodos([...todos, res.data])
    });
  }

  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo addTodo={addTodo} />
              <Todos
                todos={todos}
                markComplete={markComplete}
                delTodo={delTodo}
              />
            </React.Fragment>
          )} />
          <Route path="/about" component={About} />
        </div>
      </div>
    </Router>
  );
}

export default App;
