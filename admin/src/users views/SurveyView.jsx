import { useState, useEffect } from "react";
import "../css/formulaires.css";

import Survey from "../components/Survey";
import { getAllQuestions } from "../services/requests";

function SurveyView() {
  let [questionsDatas, setQuestionsDatas] = useState([]);

  useEffect(() => {
    getAllQuestions().then((res) => {
      setQuestionsDatas(res.data.data);
    });
  }, []);

  function generateCheckboxChoices(question) {
    const choices = Object.values(question.choices);
    return (
      <fieldset>
        <legend>Select one answer :</legend>
        {choices.map((choice, index) => (
          <div role="region" key={index}>
            <input type="radio" id={choice} name="choice" value={choice}/>
            <label htmlFor={choice}>{choice}</label>
          </div>
        ))}
      </fieldset>
    );
  }

  function generateTextInput(question) {
    if(question.question_id === 1){
      return <input type="email" id="email" name="email" />
    }else{
      return <input type="text" maxLength="225" />;
    }
  }

  function generateSelectChoices() {
    return (
      <>
        <label htmlFor="choices">Choose between 1 and 5 :</label>
        <select id="choices" name="choices">
          {[1, 2, 3, 4, 5].map((value, index) => (
            <option key={index} value={value}>
              {value}
            </option>
          ))}
        </select>
      </>
    );
  }

  function generateInputsArray() {
    let inputsArray = [];
    questionsDatas.forEach((question) => {
      switch (question.type.toLowerCase()) {
        case "a":
          inputsArray.push(generateCheckboxChoices(question));
          break;
        case "b":
          inputsArray.push(generateTextInput(question));
          break;
        case "c":
          inputsArray.push(generateSelectChoices());
          break;
      }
    });
    return inputsArray;
  }

  function generateQuestionsDatasArray(){
    let questionsInputs = generateInputsArray();
    let propsDatasArray = [];

    questionsInputs.forEach((input, index)=>{
      propsDatasArray.push(
        {
          "label" : questionsDatas[index].body,
          "description" : input
        }
      )
    });

    return propsDatasArray;
  }

  return (
    <div role="region" className="survey">
      <Survey questions={generateQuestionsDatasArray()}/> 
    </div>
  );
}

export default SurveyView;
