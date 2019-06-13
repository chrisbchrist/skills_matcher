import React from "react";

const PrintButton = () => {
    const handleClick = (e) => {
        e.preventDefault();
        window.print();
    }

    return (
        <button onClick={(e) => handleClick(e)} className="btn--utility"><i className="fas fa-print"></i> Print</button>
    )
}

export default PrintButton;