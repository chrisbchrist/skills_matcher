import React, { useState } from "react";

let MemoAnswerGroup = props => {
    const [answer, setAnswer] = React.useState({});
  
    //React.useEffect(() => console.log(props.index));
  
    function handleChange(e) {
      const val = e.target.value;
      const level = e.target.getAttribute("data-level");
      props.updateAnswer(val, props.index, level);
    }
  
    return (
      <div className="answers" role="group">
        <legend className="sr-only">{props.skill.ElementName}</legend>
        <div className="matcher__col matcher__col--lg">
          <label className="answers__radio">
            <input
              type="radio"
              name={props.skill.ElementId}
              value={props.skill.DataPoint20}
              checked={props.val == props.skill.DataPoint20}
              onChange={handleChange}
              data-level={1}
            />
            <div className="answers__custom-radio" />
            <span className="answers__label">{props.skill.AnchorFirst}</span>
          </label>
        </div>
        <div className="matcher__col matcher__col--sm">
          <label className="answers__radio">
            <input
              type="radio"
              name={props.skill.ElementId}
              value={props.skill.DataPoint35}
              checked={props.val == props.skill.DataPoint35}
              onChange={handleChange}
              data-level={2}
            />
            <div className="answers__custom-radio" />
          </label>
        </div>
        <div className="matcher__col matcher__col--lg">
          <label className="answers__radio">
            <input
              type="radio"
              name={props.skill.ElementId}
              value={props.skill.DataPoint50}
              checked={props.val == props.skill.DataPoint50}
              onChange={handleChange}
              data-level={3}
            />
            <div className="answers__custom-radio" />
            <span className="answers__label">{props.skill.AnchorThrid}</span>
          </label>
        </div>
        <div className="matcher__col matcher__col--sm">
          <label className="answers__radio">
            <input
              type="radio"
              name={props.skill.ElementId}
              value={props.skill.DataPoint65}
              checked={props.val == props.skill.DataPoint65}
              onChange={handleChange}
              data-level={4}
            />
            <div className="answers__custom-radio" />
          </label>
        </div>
        <div className="matcher__col matcher__col--lg">
          <label className="answers__radio">
            <input
              type="radio"
              name={props.skill.ElementId}
              value={props.skill.DataPoint80}
              checked={props.val == props.skill.DataPoint80}
              onChange={handleChange}
              data-level={5}
            />
            <div className="answers__custom-radio" />
            <span className="answers__label">{props.skill.AnchorLast}</span>
          </label>
        </div>
      </div>
    );
  };
  
  //Prevent re-rendering of all radio groups when only one updates
  const AnswerGroup = React.memo(MemoAnswerGroup, (prevProps, newProps) => {
    if (newProps.val == prevProps.val && newProps.index == prevProps.index) {
      return true;
    }
    return false;
  });

  export default AnswerGroup;