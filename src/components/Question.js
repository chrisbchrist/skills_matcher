import React from "react";

let MemoQuestion = props => {
    // React.useEffect(() => console.log(props.index + "question"));
    return (
      <div className="question">
        <p className="question__area">
          <span className="question__number">{props.index + 1} </span>
          {props.skill.ElementName}
        </p>
        <p className="question__text">{props.skill.Question}</p>
      </div>
    );
  };
  
const Question = React.memo(MemoQuestion);

export default Question;