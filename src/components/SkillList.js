import React from "react";
import { Link } from "react-router-dom";

const SkillList = (props) => {
    
    function skillsByLevel(level) {
      const filteredSkills = props.skills.filter((skill) => skill.AnswerLevel == level);
      return filteredSkills.map((skill, index) => (
        <li key={"skill-" + skill.AnswerLevel + index} className="skill-list__item"><span className="skill-list__name">{skill.ElementName}</span> - {skill.EasyReadDescription}</li>
      ))
    }
    
    const skillLevels = ["Beginner", "Basic", "Skilled", "Advanced", "Expert"];
    
    return (
      <div className="skill-list">
        <Link to="/" className="controls__btn controls__btn--blue controls__btn--back">Back</Link>
        <h2 className="skill-list__title">Your Skills</h2>
        {skillLevels.reverse().map((level, index) => (
          <div className="skill-list__section">
            <h3 className="skill-list__level">{level}</h3>
            <ul className="skill-list__list">
              {skillsByLevel(skillLevels.length - index)}
            </ul>
          </div>
        ))}
      </div>
    )
  }

  export default SkillList;