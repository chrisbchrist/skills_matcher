import React, { useState, useEffect } from "react";

const PageCounter = (props) => {
    return (
        <div className="counter__wrapper">
            <span className="counter">
                Page 
                <span className="counter__current"> {props.pageNum} </span>
                 of 
                <span className="counter__total"> {Math.ceil(props.total / props.pageSize)} </span>
            </span>
        </div>
    )
}

export default PageCounter;