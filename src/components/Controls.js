import React from "react";

const Controls = props => {
    function handleKeyPress(e) {
      
    }
  
    return (
      <div className="controls">
        <div
          role="button"
          tabIndex="0"
          className={
            props.page > 1
              ? "controls__btn controls__btn--blue"
              : "controls__btn controls__btn--disabled"
          }
          onClick={props.page > 1 ? props.prevPage : undefined}
          onKeyPress={(e) => {if (e.which === 13) props.prevPage()}}
        >
          <i className="fas fa-chevron-left" /> Previous
        </div>
        <div
            role="button"
            tabIndex="0"
            className="controls__btn controls__btn--green"
            onClick={props.reset}
            onKeyPress={(e) => {if (e.which === 13) props.reset()}}
          >
            <i className="fas fa-redo-alt" /> Reset
          </div>
        {props.page < Math.ceil(props.totalQuestions / props.pageSize) && (
          <div
            role="button"
            tabIndex="0"
            className="controls__btn controls__btn--blue"
            onClick={props.nextPage}
            onKeyPress={(e) => {if (e.which === 13) props.nextPage()}}
          >
            Next <i className="fas fa-chevron-right" />
          </div>
        )}
        {props.page == Math.ceil(props.totalQuestions / props.pageSize) && (
          <div
            role="button"
            tabIndex="0"
            className="controls__btn controls__btn--results"
            onClick={props.showResults}
            onKeyPress={(e) => {if (e.which === 13) props.showResults()}}
          >
            <i className="fas fa-briefcase" /> See Jobs
          </div>
        )}
      </div>
    );
  };

  export default Controls;