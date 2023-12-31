import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import "../css/survey.css";
import { useState } from "react";
import { addUserDb } from "../services/requests";
import logoNoir2 from "../images/logoNoir2.png";

const Survey = (props) => {
  const steps = props.questions;

  if (!steps || steps.length === 0) {
    return <span>Loading... Please wait...</span>;
  }

  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [saveAnswers, setSaveAnswers] = useState([]);
  const maxSteps = steps.length;

  /**
   * Checks if the given email is valid based on a regular expression.
   * @param {string} email - The email address to validate.
   * @returns {boolean} - True if the email is valid, false otherwise.
   */
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Updates the state of saved answers for a given question ID.
   * @param {number} questionId - The ID of the question.
   * @param {string} inputValue - The user's input value for the question.
   */
  const updateAnswersState = (questionId, inputValue) => {
    let newArray = [...saveAnswers];
    newArray.splice(questionId, 0, inputValue);
    setSaveAnswers(newArray);
  };

  /**
   * Handles the navigation to the next step in the questionnaire.
   * Validates input based on question type and updates answers accordingly.
   */
  const handleNext = () => {
    let input = document.getElementById(steps[activeStep].id);
    let span = document.getElementById("boxSpan");
    span.innerHTML = "";

    if (input.type === "fieldset") {
      let inputArray = input.children;
      for (let i = 1; i < inputArray.length; i++) {
        if (inputArray[i].children[0].checked) {
          updateAnswersState(
            steps[activeStep].id,
            inputArray[i].children[0].value
          );
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
        span.innerHTML = "";
      }
      return (span.innerHTML = "Please answer the question");
    } else if (input.type === "email") {
      if (!isValidEmail(input.value)) {
        return (span.innerHTML = "Please enter a valid email");
      } else {
        updateAnswersState(steps[activeStep].id, input.value);
        span.innerHTML = "";
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    } else {
      if (input.value === "" || input.value === null) {
        return (span.innerHTML = "Please answer the question");
      } else {
        updateAnswersState(steps[activeStep].id, input.value);
        span.innerHTML = "";
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    }
  };

  /**
   * Handles the navigation to the previous step in the questionnaire.
   */
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  /**
   * Submits the formatted answers to the database and redirect the user to his answers page.
   */
  const submitAnswers = () => {
    let formatAnswersArray = [];

    saveAnswers.forEach((answer, index) => {
      formatAnswersArray.push({
        question_id: index + 1,
        answer_id: index + 1,
        answers: answer,
      });
    });

    addUserDb(formatAnswersArray).then((response) => {
      window.location.href = response.data.urlDatas.url;
    });
  };

  return (
    <>
      <Box className="globaleBox">
        <img src={logoNoir2} className="logoNoir2" alt="logo" />

        <div className="surAskCtner">
          <Box className="surveyTypographyTitle">
            <Typography variant="h5" sx={{ maxWidth: 480 }}>
              Sondage : Votre avis nous intéresse !
            </Typography>
          </Box>
          <Box className="survAsks " sx={{ maxWidth: 480, flexGrow: 1 }}>
            <Typography variant="h5" className="survAsksLabes">
              {steps[activeStep].label}
            </Typography>
            <Box sx={{ height: 320, maxWidth: 480, p: 2 }}>
              {" "}
              {steps[activeStep].description}
              {activeStep === 20 ? (
                <Button size="small" onClick={submitAnswers}>
                  <Typography variant="h5" className="submitButton">
                    Submit
                  </Typography>
                </Button>
              ) : (
                ""
              )}
              <span id="boxSpan"></span>
            </Box>

            <MobileStepper
              variant="text"
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  {" "}
                  Next
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            />
          </Box>
        </div>
      </Box>
    </>
  );
};

export default Survey;
