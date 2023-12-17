import Navbar from "../components/Navbar";
import "../css/Home.css";
import 'chart.js/auto'
import { useState, useEffect } from "react";
import { getAllAnswers, getAllQuestions } from "../services/requests";
import { Pie, Radar } from "react-chartjs-2";
import {Chart, ArcElement, Tooltip, Legend} from 'chart.js';
import CheckAuth from '../components/CheckAuth';

const Home = () => {
  let [answersDatas, setAnswersDatas] = useState([]);
  let [questionsDatas, setQuestionsDatas] = useState([]);
  Chart.register(ArcElement, Tooltip, Legend);
  Chart.defaults.font.size = 10;

  useEffect(() => {
    getAllAnswers().then((res) => {
      setAnswersDatas(res);
    });

    getAllQuestions().then((res)=>{
      setQuestionsDatas(res);
    });
  }, []);


/**
 * Generates data for pie charts based on the specified question ID.
 * @param {number} questionId - The ID of the question for which pie chart data is requested.
 * @returns {Object} - An object containing chart data.
 */
function returnPieChartsDatas(questionId) {
  // Adjust the question ID to fit the array index.
  let arrayId = questionId - 1;

  // Check if essential data is available.
  if (!answersDatas.data || !answersDatas.data.data || !questionsDatas) {
    return null;
  }

  let allAnswers = answersDatas.data.data;
  let allQuestions = questionsDatas.data.data;
  let answersArray = [];
  let questionsArray = [];

  // Extract choices from the specified question.
  questionsArray = Object.values(allQuestions[arrayId].choices);

  // Count the occurrences of each choice in the answers.
  questionsArray.forEach(choice => {
    let countAnswers = 0;
    allAnswers.forEach(answer => {
      if (choice.trim().toLowerCase() === answer[arrayId].answers.trim().toLowerCase()) {
        countAnswers++;
      }
    });

    answersArray.push(countAnswers);
  });

  // Check if there are no answers.
  if (answersArray.length === 0) {
    return null;
  }

  // Add the datas in the datasets.
  const nextDatasets = {
    labels: questionsArray,
    datasets: [
      {
        label: allQuestions[arrayId].body,
        data: answersArray,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#8BC34A', '#FF9800'],
      },
    ],
  };

  return nextDatasets;
}

 /**
 * Generates data for radar charts based on the specified question ID.
 * @param {number} questionId - The ID of the question for which radar chart data is requested.
 * @returns {Object} - An object containing chart data.
 */
function returnRadarChartsDatas(questionId) {
  // Adjust the question ID to fit the array index.
  let arrayId = questionId - 1;

  // Check if essential data is available.
  if (!answersDatas.data || !answersDatas.data.data || !questionsDatas) {
    return null;
  }

  let allAnswers = answersDatas.data.data;
  let allQuestions = questionsDatas.data.data;
  let countsAnswersArray = [];
  const possibleAnswers = ['1', '2', '3', '4', '5'];

  // Extract the body of the specified question.
  let question = allQuestions[arrayId].body;

  // Count the occurrences of each possible answer in the answers.
  possibleAnswers.forEach(element => {
    let count = 0;
    allAnswers.forEach(answer => {
      if (element.trim().toLowerCase() === answer[arrayId].answers.trim().toLowerCase()) {
        count++;
      }
    });

    countsAnswersArray.push(count);
  });

  // Add data to datasets.
  const nextDatasets = {
    labels: possibleAnswers,
    datasets: [
      {
        label: JSON.stringify(question),
        data: countsAnswersArray,
        backgroundColor: 'rgba(54, 162, 235, 0.4)',
        borderColor: '#36A2EB',
        borderWidth: 1,
      },
    ],
  };

  return nextDatasets;
}

  const optionsPie = {
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
    },
    maintainAspectRatio : false
  };

  const optionsRadar = {
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    responsive: true
  };
  
  return (
    <div role="region" className="homepage">
      <CheckAuth />
      <Navbar />
      <div role="region" className="content">
        <h1>Bienvenue Admin !</h1>
        {answersDatas.data && answersDatas.data.data &&
        questionsDatas.data && questionsDatas.data.data  &&(
          <ul className="charts">
            <li className="chart"><Pie data={returnPieChartsDatas(6)} key={"6"} options={optionsPie}/></li>
            <li className="chart"><Pie data={returnPieChartsDatas(7)} key={"7"} options={optionsPie}/></li>
            <li className="chart"><Pie data={returnPieChartsDatas(10)} key={"10"} options={optionsPie}/></li>
            <li className="chart"><Radar data={returnRadarChartsDatas(11)} key={"11"} options={optionsRadar}/></li>
            <li className="chart"><Radar data={returnRadarChartsDatas(12)} key={"12"} options={optionsRadar}/></li>
            <li className="chart"><Radar data={returnRadarChartsDatas(13)} key={"13"} options={optionsRadar}/></li>
            <li className="chart"><Radar data={returnRadarChartsDatas(14)} key={"14"} options={optionsRadar}/></li>
            <li className="chart"><Radar data={returnRadarChartsDatas(15)} key={"15"} options={optionsRadar}/></li>
          </ul>
          
        )}
      </div>
    </div>
  );
};

export default Home;
