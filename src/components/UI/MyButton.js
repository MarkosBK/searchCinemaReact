import React from 'react';
import c from './UI.module.css'

const MyButton = (props) => {
    return (
        <button className={c.myButton} {...props}>
            {props.children}
        </button>
    );
};

export default MyButton;
