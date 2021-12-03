import './Card.css';
import React from 'react';

function getColor(props){
    if(props.red) return "red";
    if(props.green) return "green";
    if(props.blue) return "blue";
    if(props.purple) return "purple";
    return "";
}

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <div className={`Card ${getColor(props)}`}>
            <div className="Header">
                <span className="Title">{props.title}</span>
            </div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    );
}