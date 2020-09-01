import React from 'react'
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";

const TodoItem = ({ task, completed }) => {


  return (
    // <li>I AM A TODO ITEM</li>
    // Copied over from TodoList:
    <ListItem>
      <ListItemText>
        { task }
      </ListItemText>
    </ListItem>
  )

}

export default TodoItem
