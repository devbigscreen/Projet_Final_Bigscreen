import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

import { useState } from "react";
import { addUserDb } from "../services/requests";

const Survey = (props) => {
  const steps = props.questions;

  if (!steps || steps.length === 0) {
    return <span>Loading... Please wait...</span>;
  }

  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [saveAnswers, setSaveAnswers] = useState([]);
  const maxSteps = steps.length;

  const updateAnswersState = (questionId, inputValue) => {
    let newArray = [...saveAnswers];
    newArray.splice(questionId, 0, inputValue);
    setSaveAnswers(newArray);
  };

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

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

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
      console.log(response);
    });
  };

  return (
    <div className="boxContainer">
      <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            height: 50,
            pl: 2,
            bgcolor: "background.default",
          }}
        >
          <Typography>{steps[activeStep].label}</Typography>
        </Paper>
        <Box sx={{ height: 255, maxWidth: 400, width: "100%", p: 2 }}>
          {steps[activeStep].description}
          {activeStep === 20 ? (
            <Button size="small" onClick={submitAnswers}>
              Submit
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
  );
};

export default Survey;
