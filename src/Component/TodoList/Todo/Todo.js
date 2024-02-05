import React, {useState} from 'react';
import { useDispatch } from 'react-redux';

import * as actionTypes from '../../../store/action';
import './Todo.css';

const Todo = (props) => {
    const dispatch = useDispatch();
    const [ deleteState, setDeleteState ] = useState(false);
    const renderTasks = props.tasks.map((items, index) => 
        <div key={index}>
            <h4>{items.time}</h4>
            {items.tasks.map((enval, envalId) => <p key={envalId}>{enval}</p>)}
        </div>);
    const deleteHandler = (id) => {
        dispatch({type:actionTypes.DELETE_TODO, id})
    }
    
    return (
        <div className='todo' onClick={() => props.setId(props.index)}>
            <div className='Flex todoFtDiv' onMouseOut={() => setDeleteState(false)} onMouseOver={() => setDeleteState(true)}>
                <label>{props.title}</label>
                <button className={deleteState ? 'Inherite' : 'None'} onClick={deleteHandler}>*</button>
            </div>
            <div className='tasks'>
                {renderTasks}
            </div>
        </div>
    )
};

export default Todo;