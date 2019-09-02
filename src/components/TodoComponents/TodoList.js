
import React from "react";
import Todo from "./Todo";

const TodoList = props => {
    return (
        <>
        <div>
        {props.todoData.map(item => {
            return <Todo key={item.id} item={item} />;
            })}
        </div>
        <button>Clear</button>
        </>
    );
};
export default TodoList;