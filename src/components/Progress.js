import React from "react";

const Progress = (props) => {
    
      return (
        <div className="progress__wrapper">
          <div className="progress__bar" style={{ width: (((props.page - 1) / props.total) * 100) + "%"}}></div>
        </div>
      )
    }

export default Progress;