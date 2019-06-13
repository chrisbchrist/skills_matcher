import React from "react";

const Button = (props) => {
    const handleClick = (e) => {
        e.preventDefault();
        props.function();
    }
    return (
        <button onClick={(e) => handleClick(e)} className={"controls__btn controls__btn--" + props.color}>{props.icon} {props.text}</button>
    )
}

export default Button;