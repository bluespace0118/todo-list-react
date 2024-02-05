import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";

import Todo from "./Todo/Todo";
import Dialog from './Dialog/Dialog';
import * as actionTypes from '../../store/action';
import './TodoList.css';

const Todolist = () => {
    const dispatch = useDispatch();

    const todo = useSelector(state => state.todo);
    const [id, setId] = useState(-1);
    
    const [ deleteState, setDeleteState ] = useState(false);
    const [ dialogState, setDialogState ] = useState('');

    const deleteHandler = () => {
        dispatch({type:actionTypes.DELETE_TODO, id});
        setDialogState('')
    };    
    
    return (
        <div className='Todolist'>
           {todo.map((enval, index) => 
                <Todo 
                key={index} 
                title={enval.title} 
                tasks={enval.contents} 
                id={id} 
                setId={setId} 
                index={index}
                setDialogState={setDialogState}
                deleteState={deleteState}
                setDeleteState={setDeleteState}/>)
            }
           <div className={dialogState === 'DEL' ? 'Inherite' : 'None'}>
                <Dialog content='Really delete?' deleteHandler={deleteHandler} setDialogState={setDialogState}/>
            </div>        
        </div>
    )
};

export default Todolist;