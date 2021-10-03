import React from 'react';
import c from './CinemaItem.module.css'
const MyComponent = (props) => {
    return (
        <div className={c.item}>
            <h2>Title: {props.item.title}</h2>
            <h2>Vote: {props.item.vote_average}*</h2>
            <br/>
            <h2>Overview:</h2>
            <div className={c.overview}>{props.item.overview}</div>
        </div>
    );
};

export default MyComponent;
