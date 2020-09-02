import React from 'react'
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteButton from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit"
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";


const TodoItem = ({ task, completed }) => {


  return (
    // <li>I AM A TODO ITEM</li>
    // Copied over from TodoList:
    <ListItem>
      <Checkbox tabIndex={ -1 } checked={ completed } />
      <ListItemText style={ { textDecoration: completed ? "line-through" : "none" } }>{ task }</ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete Icon">
          <DeleteButton />
        </IconButton>
        <IconButton aria-label="Edit Icon">
          <EditIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>

  )

}

export default TodoItem



