import React from "react";
import Todo from "./Todo";

const TodoList = props => {
    return (
        <div>
        {props.todoData.map(item => (
           <Todo key={item.id} item={item} toggleTask={props.toggleTask} />
        ))}
 
        <button onClick={props.clearCompleted}>Clear</button>
        </div>
    )
}

export default TodoList;