import React from 'react'
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import useInputState from "./hooks/useInputState";


const TodoForm = ({ addTodo }) => {
  // Bring in the return from useInputState
  const [value, handleChange, reset] = useInputState(""); // passing in an EMPTY initialVal;

  return (
    <Paper style={ { margin: "1rem 0", padding: "0 1rem" } }>
      <form onSubmit={ (e) => {
        e.preventDefault();
        addTodo(value);
        reset();
      } }>
        <TextField value={ value } onChange={ handleChange } margin="normal" label="add new todo" fullWidth />
      </form>
    </Paper>
  )
}

export default TodoForm;



/*
By passing in the empty string, we are reserving a piece of state as the 'initialValue being passed in.

To add the todo, "addTodo", create a function inside TodoApp.js and pass it to TodoForm
*/