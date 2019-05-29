import React from "react";

const SkillList = (props) => {
    
    function skillsByLevel(level) {
      const filteredSkills = props.skills.filter((skill) => skill.AnswerLevel == level);
      return filteredSkills.map((skill) => (
        <li className="skill-list__item"><span className="skill-list__name">{skill.ElementName}</span> - {skill.EasyReadDescription}</li>
      ))
    }
    
    const skillLevels = ["Beginner", "Basic", "Skilled", "Advanced", "Expert"];
    
    return (
      <div>
        <h2 className="skill-list__title">Your Skills</h2>
        {skillLevels.reverse().map((level, index) => (
          <div className="skill-list__section">
            <h3 className="skill-list__level">{level}</h3>
            <ul className="skill-list">
              {skillsByLevel(skillLevels.length - index)}
            </ul>
          </div>
        ))}
      </div>
    )
  }

  export default SkillList;