import React, { Component, useState, useEffect, useRef } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Progress from "../components/Progress";
import QuestionPage from "../components/QuestionPage";
import Controls from "../components/Controls";
import Results from "../components/Results";
import CosLogo from "../components/CosLogo";

const App = () => {
  const scrollRef = useRef(null);
  const [skills, setSkills] = React.useState([]);
  const [pageNum, setPageNum] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);
  const [complete, setComplete] = React.useState(false);

  const scrollToTop = (ref) =>  {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const top = rect.top + scrollTop;
      window.scrollTo(0, top);
    }
  };

  function fetchData() {
    fetch("https://api.careeronestop.org/v1/skillsmatcher/eKVo73aZJi6gYRw", {
      headers: {
        Authorization:
          "Bearer 2/8FL+RelJg9m5EvWAFVyzF2/FbEhiRrmwbA9E2By1H0UHVGA451zMfYQEZz013zXrFTbgakF1d0jBmF9aPnXw=="
      }
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        const skillsWithAnswers = response.Skills.map((skill, index) => {
          // Add a property to store the user response so I don't have to correlate questions/answers as 2 collections, and save the index in relation to the total number of skills to prevent calculating it later.
          return { ...skill, DataValue: "0", TrueIndex: index };
        });
        setSkills(skillsWithAnswers);
        // Reset page number as this will also be the reset function
        if (pageNum > 1) {
          setPageNum(1);
          setComplete(false);
        }
      });
  }

  //Effect hook with empty listener array fetches skill data only on component mount
  useEffect(() => {
    fetchData();
  }, []);



  //Scroll to top on page change
  //React.useEffect(() => window.scrollTo(0, 0), [pageNum]);

  useEffect(() => scrollToTop(scrollRef), [pageNum]);

  function updateAnswer(answer, index, level) {
    //Deep copy array to prevent direct state mutation
    let currentAnswers = Array.from(skills);
    currentAnswers[index].DataValue = answer;
    currentAnswers[index].AnswerLevel = level;
    setSkills(currentAnswers);
  }

  // Checks if all questions for the current page have been answered
  function allQuestionsAnswered() {
    let pageAnswers = skills
      .slice((pageNum - 1) * pageSize, pageSize * pageNum)
      .filter(skill => skill.DataValue != "0");
    let result = pageAnswers.length === pageSize ? true : false;

    return result;
  }

  function nextPage() {
    if (
      pageNum < Math.ceil(skills.length / pageSize) &&
      allQuestionsAnswered()
    ) {
      setPageNum(currentPage => currentPage + 1);
    } else {
      alert("Please select an answer for each question.");
    }
  }

  function prevPage() {
    if (pageNum > 1) {
      setPageNum(currentPage => currentPage - 1);
    }
  }

  function showResults() {
    setComplete(true);
  }

  //Added for semantics
  function reset() {
    fetchData();
  }

  if (!complete) {
    return (
      <Router basename="/Find-Training/Skills-Matcher">
        <div className="matcher" ref={scrollRef}>
          <div className="matcher__instructions">
            <h2 className="matcher__section-header">Assessment</h2>
            <div className="matcher__accent"></div>
            <p>Select your skill level based on your experience with each of the following activities.</p>
          </div>
          <Progress page={pageNum} total={skills.length / pageSize} />
          <QuestionPage
            skills={skills}
            pageNum={pageNum}
            pageSize={pageSize}
            updateAnswer={updateAnswer}
          />
          <Controls
            page={pageNum}
            pageSize={pageSize}
            totalQuestions={skills.length}
            nextPage={nextPage}
            prevPage={prevPage}
            showResults={showResults}
            reset={reset}
          />
          <CosLogo/>
        </div>
      </Router>
    );
  } else {
    return (
      <Router>
        <div className="matcher" ref={scrollRef}>
          <Results skills={skills} 
                   reset={fetchData}
                   scrollToTop={scrollToTop}/>
        </div> 
      </Router>
    );
  }
};

export default App;
