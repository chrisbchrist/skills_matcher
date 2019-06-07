import React from "react";
import HeaderRow from "./HeaderRow";
import Question from "./Question";
import AnswerGroup from "./AnswerGroup";
import PageCounter from "./PageCounter";

const QuestionPage = props => {
  return (
    <div className="matcher__main">
        <PageCounter total={props.skills.length}
                     pageNum={props.pageNum}
                     pageSize={props.pageSize}
                     />
      <div className="matcher__border">
        <HeaderRow />
        <div className="matcher__questions">
          {props.pageNum < props.skills.length / props.pageSize + 1 &&
            props.skills
              .slice(
                (props.pageNum - 1) * props.pageSize,
                props.pageSize * props.pageNum
              )
              .map(function(skill, index) {
                //Index in relation to the total number of questions
                const trueIndex = skill.TrueIndex;
                return (
                  <div className="matcher__row" key={"question" + trueIndex}>
                    <Question skill={skill} index={trueIndex} />
                    <AnswerGroup
                      val={skill.DataValue}
                      skill={skill}
                      index={trueIndex}
                      key={"answers" + trueIndex}
                      updateAnswer={props.updateAnswer}
                    />
                  </div>
                );
              })}
        </div>
      </div>
      <PageCounter total={props.skills.length}
                     pageNum={props.pageNum}
                     pageSize={props.pageSize}
                     />
    </div>
  );
};

export default QuestionPage;
