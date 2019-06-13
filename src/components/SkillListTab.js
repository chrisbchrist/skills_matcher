import React, { useState } from "react";

const SkillListTab = (props) => {
    const isSelected = props.selectedLevel === props.value;
    return (
        <div onClick={() => props.setLevel(props.value)} className={ isSelected ? "skill-list__tab skill-list__tab--selected" : "skill-list__tab"}>
            <img className={isSelected ? "skill-list__icon skill-list__icon--show" : "skill-list__icon" } src={"https://www.virtualcareersystem.com/Portals/0/Images/skills_matcher/" + props.level.toLowerCase() + ".png"}/>
            <span className="skill-list__level">{props.level}</span>
        </div>
    )
}

export default SkillListTab;