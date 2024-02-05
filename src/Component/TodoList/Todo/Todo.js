import React, {useState} from 'react';

import './Todo.css';

const Todo = (props) => {
    const [ showDel, setShowDel ] = useState(false)

    const renderTasks = props.tasks.map((items, index) => 
        <div key={index}>
            <h4>{items.time}</h4>
            {items.tasks.map((enval, envalId) => <p key={envalId}>{enval}</p>)}
        </div>);

    const deleteConfirm = () => {
        props.setDialogState('DEL')
        props.setId(props.index)
    };

    return (
        <div className='todo' onClick={() => props.setId(props.index)}>
            <div className='Flex todoFtDiv' onMouseOut={() => setShowDel(false)} onMouseOver={() => setShowDel(true)}>
                <label>{props.title}</label>
                <button className={showDel ? 'Inherite' : 'None'} onClick={deleteConfirm}>*</button>
            </div>
            <div className='tasks'>
                {renderTasks}
            </div>
        </div>
    )
};

export default Todo;