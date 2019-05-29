import React from "react";

const HeaderRow = () => {
    return (
      <div className="matcher__legend">
        <div
          className="matcher__col matcher__col--33"
          style={{ paddingLeft: 40 }}
        >
          <span className="matcher__legend-label">Skill</span>
        </div>
        <div className="matcher__col--flex">
          <div className="matcher__col matcher__col--lg">
            <span className="matcher__legend-label text-center">Beginner</span>
          </div>
          <div className="matcher__col matcher__col--sm">
            <span className="matcher__legend-label text-center">Basic</span>
          </div>
          <div className="matcher__col matcher__col--lg">
            <span className="matcher__legend-label text-center">Skilled</span>
          </div>
          <div className="matcher__col matcher__col--sm">
            <span className="matcher__legend-label text-center">Advanced</span>
          </div>
          <div className="matcher__col matcher__col--lg">
            <span className="matcher__legend-label text-center">Expert</span>
          </div>
        </div>
      </div>
    );
  };

  export default HeaderRow;