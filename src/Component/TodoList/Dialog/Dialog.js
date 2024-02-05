import React from 'react';

import Backdrop from '../../Backdrop/Backdrop';
import './Dialog.css';

const Dialog = (props) => {
    return (
        <div className='Dialog'>
            <div onMouseUp={() => props.setDialogState('')}>
                <Backdrop/>
            </div>
            <div className='main_dialog'>
                <p>{props.content}</p>
                <div>
                    <button onClick={props.deleteHandler}>OK</button>
                    <button onClick={() => props.setDialogState('')}>CANCEL</button>
                </div>
            </div>
        </div>
    )
};

export default Dialog;