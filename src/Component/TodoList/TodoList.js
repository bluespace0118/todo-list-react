import React, {useState} from "react";
import { useSelector } from "react-redux";

import Todo from "./Todo/Todo";
import './TodoList.css';

const Todolist = () => {
    const todo = useSelector(state => state.todo);

    const [id, setId] = useState(-1);

    const renderTodo = 
        todo.map((enval, index) => <Todo key={index} title={enval.title} tasks={enval.contents} id={id} setId={setId} index={index}/>)
    
    return (
        <div className='Todolist'>
           {renderTodo}        
        </div>
    )
};

export default Todolist;