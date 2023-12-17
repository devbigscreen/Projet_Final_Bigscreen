import { useState, useEffect } from "react";
import "../css/formulaires.css";
import "../css/survey.css";
import Survey from "../components/Survey";
import { getAllQuestions } from "../services/requests";
import "../css/surveyView.css";

function SurveyView() {
  let [questionsDatas, setQuestionsDatas] = useState([]);

  useEffect(() => {
    getAllQuestions().then((res) => {
      setQuestionsDatas(res.data.data);
    });
  }, []);

  /**
   * Generates checkbox choices for a given question.
   * @param {Object} question - The question object containing choices.
   * @returns {JSX.Element} - The JSX element representing checkbox choices.
   */
  function generateCheckboxChoices(question) {
    const choices = Object.values(question.choices);
    return (
      <fieldset className="radioInput" id={question.question_id}>
        <legend className="legend">Select one answer :</legend>
        {choices.map((choice, index) => (
          <div className="choiceRadio" role="region" key={index}>
            <input type="radio" id={choice} name="choice" value={choice} />
            <label htmlFor={choice}>{choice}</label>
          </div>
        ))}
      </fieldset>
    );
  }

  /**
   * Generates text input for a given question.
   * @param {Object} question - The question object.
   * @returns {JSX.Element} - The JSX element representing text input.
   */
  function generateTextInput(question) {
    if (question.question_id === 1) {
      return (
        <input
          className="enterEmail"
          type="email"
          id={question.question_id}
          name="email"
          pattern=".+@.\.com"
        />
      );
    } else {
      return (
        <input
          className="yearInput"
          type="text"
          id={question.question_id}
          maxLength="225"
        />
      );
    }
  }

  /**
   * Generates select choices for a given question.
   * @param {Object} question - The question object.
   * @returns {JSX.Element} - The JSX element representing select choices.
   */
  function generateSelectChoices(question) {
    return (
      <>
        <label className="titleChoose" htmlFor="choices">
          Choose between 1 and 5 :
        </label>
        <select
          className="selectchoices"
          id={question.question_id}
          name="choices"
        >
          {[1, 2, 3, 4, 5].map((value, index) => (
            <option key={index} value={value}>
              {value}
            </option>
          ))}
        </select>
      </>
    );
  }

  /**
   * Generates an array of input elements based on question types.
   * @returns {Array} - An array of JSX elements representing input fields.
   */
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

  /**
   * Generates an array of question data for rendering.
   * @returns {Array} - An array of objects representing question data.
   */
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
      id: 21,
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
