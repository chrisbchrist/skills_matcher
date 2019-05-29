import React, { useState, useEffect } from "react";
import ReactTable from "react-table";
import Modal from "./Modal";
import SkillList from "./SkillList";

const Results = props => {
    const [jobs, setJobs] = React.useState([]);
    const [pageSize, setPageSize] = React.useState(10);
    const [pageNum, setPageNum] = React.useState(1);
    const [skillsModal, setSkillsModal] = React.useState(false);
  
    //POST answers and store results on mount
    React.useEffect(() => {
      let answerObj = {
        SKAValueList: props.skills.map(skill => ({
          ElementId: skill.ElementId,
          DataValue: skill.DataValue
        }))
      };
  
      fetch("https://api.careeronestop.org/v1/skillsmatcher/eKVo73aZJi6gYRw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer 2/8FL+RelJg9m5EvWAFVyzF2/FbEhiRrmwbA9E2By1H0UHVGA451zMfYQEZz013zXrFTbgakF1d0jBmF9aPnXw=="
        },
        body: JSON.stringify(answerObj)
      })
        .then(response => response.json())
        .then(response => {
          console.log(response.SKARankList);
          setJobs(response.SKARankList);
        });
    }, []);
    
    //Attach event listeners on component mount to scroll to top when table page is changed, return cleanup function for unmounting
    React.useEffect(() => {
      
      function scrollToTop() {
        window.scrollTo(0, 0);
      }
      
      const tableButtons = document.getElementsByClassName("-btn");
      for (let i = 0; i < tableButtons.length; i++) {
        tableButtons[i].addEventListener("click", scrollToTop);
      }
      
      return () => {
        for (let i = 0; i < tableButtons.length; i++) {
          tableButtons[i].removeEventListener("click", scrollToTop);
        }
      }
      
    }, []);
    
    function toggleModal() {
      setSkillsModal(!skillsModal);
    }
    
    const columns = [
    {
      Header: 'Rank',
      accessor: 'Rank',
      headerStyle: { whiteSpace: 'unset' },
      headerClassName: "results__table-head",
      style: { whiteSpace: 'unset' },
      //maxWidth: 100,
      width: "100%",
      minWidth: 55,
      Cell: ({ value }) => (<div className="results__rank">{value}</div>),
    },
    {
      Header: 'Title',
      accessor: 'OccupationTitle',
      headerStyle: { whiteSpace: 'unset' },
      headerClassName: "results__table-head",
      style: { whiteSpace: 'unset',
               padding: 10},
      Cell: ({ row, original }) => (<a
            href={"https://www.onetonline.org/link/summary/" + original.OnetCode}
            target="_blank"
            className="results__link"
          >
            {original.OccupationTitle}
          </a>),
      minWidth: 150
    },
    {
      Header: 'Annual Wages',
      accessor: 'AnnualWages',
      headerStyle: { whiteSpace: 'unset' },
      headerClassName: "results__table-head",
      Cell: ({ value }) => value > 0
      ? (<div className="results__td"><span className="mobile__label">Average Salary</span><span className="results__dollar">$</span>{value.toLocaleString()}</div>) 
        : (<span>N/A</span>),
      //maxWidth: 150,
      minWidth: 76,
      sortMethod: (a, b) => {
        return b - a;
      }
    },
    {
      Header: 'Typical Education',
      accessor: 'TypicalEducation',
      headerStyle: { whiteSpace: 'unset' },
      headerClassName: "results__table-head",
      //maxWidth: 278,
      Cell: ({ value }) => (<div className="results__td"><span className="mobile__label">Typical Education</span><span>{value}</span></div>),
      style: { whiteSpace: 'unset' },
      sortMethod: (a, b) => {
        const eduOrder = ["Doctoral or professional degree", "Master's degree", "Bachelor's degree", "Associate's degree", "Postsecondary non-degree award", "High school diploma or equivalent", "No formal educational credential"];
        return eduOrder.indexOf(a) - eduOrder.indexOf(b);
      }
    },
    {
      Header: 'Outlook',
      accessor: 'Outlook',
      headerStyle: { whiteSpace: 'unset' },
      headerClassName: "results__table-head",
      //maxWidth: 150,
      Cell: ({ value }) => {
        const outlookClass = (value == "Bright") ? "results__outlook--bright" : (value == "Below Average") ? "results__outlook--below" : "";
        return (<div className="results__td"><span className="mobile__label">Job Outlook</span><span className={outlookClass}>{value}</span></div>);
      },
      sortMethod: (a,b) => {
        const sortOrder = ["Bright", "Average", "Below Average"];
        return sortOrder.indexOf(a) - sortOrder.indexOf(b);
      }
    },
  ];
  
    return (
      <div className="matcher matcher--results">
        <p className="results__list-info">See a <a className="results__list-link" href="#" onClick={toggleModal}>full list of your skills</a> to use for your resumé or other career activities.</p>
        <Modal show={skillsModal} onClose={toggleModal} customWidth={750}>
          <SkillList skills={props.skills}/>
        </Modal>
        <ReactTable 
          loading={jobs.length < 1}
          getTdProps={(state, rowInfo, column, instance) => {
            return {
              style: {
                padding: 10,
                display: "flex",
                alignItems: "center",
              }
            }
          }}
          getTheadThProps={(state, rowInfo, column, instance) => {
            return {
              style: {
                padding: "15px 10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }
            }
          }}
          columns={columns}
          data={jobs}
          minRows={0}
          minWidth={300}
          className="-striped -highlight results__table"
          filterable={true}
          />
      </div>
    );
  };

  export default Results;