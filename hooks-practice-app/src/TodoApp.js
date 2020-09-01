import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";



const TodoApp = () => {

  const initialTodos = [
    { id: 1, task: "Feed Daisy", completed: false },
    { id: 2, task: "Take Out Trash", completed: true },
    { id: 3, task: "Make Breakfast", completed: false }
  ];

  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (newTodoText) => {
    // passing it to TodoForm
    setTodos([...todos, { id: 4, task: newTodoText, completed: false }])
  }


  // Next, need to create a TodoList which will render TodoItems

  return (
    <Paper
      style={ {
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa"
        // backgroundColor: "red"
      } }
      elevation={ 0 }
    >
      <AppBar color='primary' position='static' style={ { height: "64px" } }>
        <Toolbar>
          <Typography color='inherit'>Todos with HOOKS!</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={ { marginTop: "20px" } }>
        <Grid item xs={ 11 } md={ 8 } lg={ 4 }>
          <TodoForm addTodo={ addTodo } />
          <TodoList todos={ todos } />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default TodoApp


/*
Inside TodoApp.js, in the todoForm, I am passing the functionality for adding a todo
Inside TodoApp.js, in the TodoList, I will pass the todos (the state) ---> INside the todoList, I will map through and pass a todoItem

Will control the state of all the todos; It will render a 1) TODO Form & 2) TODO List(each item in the todo list will be a TODOItem)
*/