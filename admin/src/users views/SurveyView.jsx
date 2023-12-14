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
      <fieldset id={question.question_id}>
        <legend>Select one answer :</legend>
        {choices.map((choice, index) => (
          <div role="region" key={index}>
            <input type="radio" id={choice} name="choice" value={choice} />
            <label htmlFor={choice}>{choice}</label>
          </div>
        ))}
      </fieldset>
    );
  }

  function generateTextInput(question) {
    if (question.question_id === 1) {
      return <input type="email" id={question.question_id} name="email" pattern=".+@.\.com"/>;
    } else {
      return <input type="text" id={question.question_id} maxLength="225" />;
    }
  }

  function generateSelectChoices(question) {
    return (
      <>
        <label htmlFor="choices">Choose between 1 and 5 :</label>
        <select id={question.question_id} name="choices">
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
          inputsArray.push(generateSelectChoices(question));
          break;
      }
    });
    return inputsArray;
  }

  function generateQuestionsDatasArray() {
    let questionsInputs = generateInputsArray();
    let propsDatasArray = [];

    questionsInputs.forEach((input, index) => {
      propsDatasArray.push({
        label: questionsDatas[index].body,
        description: input,
        id: index + 1,
      });
    });

    propsDatasArray.push({
      label: "Submit your answers !",
      description: "",
      id: 21
    });

    return propsDatasArray;
  }

  return (
    <div role="region" className="survey">
      <Survey questions={generateQuestionsDatasArray()} />
    </div>
  );
}

export default SurveyView;
