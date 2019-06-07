import React from "react";

const Loader = (props) => {

    if (!props.loading) {
        return null;
    } else {
        return (
        <div className="loader">
            <div className="loader__text">Loading...</div>
        </div>
        )
    }
    
}

export default Loader;