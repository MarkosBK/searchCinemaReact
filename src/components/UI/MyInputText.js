import React from 'react';
import c from './UI.module.css'

const MyInputText = (props) => {
    return (
        <input className={c.myInputText} {...props}/>
    );
};

export default MyInputText;
