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

  useEffect(() => {
    getAllAnswers().then((res) => {
      setAnswersDatas(res);
    });

    getAllQuestions().then((res)=>{
      setQuestionsDatas(res);
    });
  }, []);

  function returnPieChartsDatas(questionId){
    let arrayId = questionId - 1;

    if (!answersDatas.data || !answersDatas.data.data || !questionsDatas) {
      return null;
    }

    let allAnswers = answersDatas.data.data;
    let allQuestions = questionsDatas.data.data;
    let answersArray = [];
    let questionsArray = [];

    questionsArray = Object.values(allQuestions[arrayId].choices)

    questionsArray.forEach(choice => {
      let countAnswers = 0;
      allAnswers.forEach(answer => {
        if(answer.question_id === questionId && choice.trim().toLowerCase() === answer.answers.trim().toLowerCase()){
          countAnswers++;
        }
      });

      answersArray.push(countAnswers);
    })

    if (answersArray.length === 0) {
      return null;
    }

    const nextDatasets =  {
      labels: questionsArray,
      datasets: [
        {
          data: answersArray,
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#8BC34A', '#FF9800'],
        },
      ],
    };

    return nextDatasets;
  }

  function returnRadarChartsDatas(questionId){
    let arrayId = questionId - 1;

    if (!answersDatas.data || !answersDatas.data.data || !questionsDatas) {
      return null;
    }

    let allAnswers = answersDatas.data.data;
    let allQuestions = questionsDatas.data.data;
    let countsAnswersArray = [];
    const possibleAnswers =  ['1', '2', '3', '4', '5'];

    let question = allQuestions[arrayId].body;

    possibleAnswers.forEach(element =>{
      let count = 0;
      allAnswers.forEach(answer =>{
        if(answer.question_id === questionId && element.trim().toLowerCase() === answer.answers.trim().toLowerCase()){
          count++;
        }
      });

      countsAnswersArray.push(count);
    });

    const nextDatasets =  {
      labels: possibleAnswers,
      datasets: [
        {
          label: JSON.stringify(question),
          data: countsAnswersArray,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderWidth: 1,
        },
      ],
    };

    return nextDatasets;
  }
  
  return (
    <div role="region" className="homepage">
      <CheckAuth />
      <Navbar />
      <div role="region">
        <h1>Bienvenue Admin !</h1>
        {answersDatas.data && answersDatas.data.data &&
        questionsDatas.data && questionsDatas.data.data  &&(
          <ul className="charts">
            <li><Pie data={returnPieChartsDatas(6)} key={"6"}/></li>
            <li><Pie data={returnPieChartsDatas(7)} key={"7"}/></li>
            <li><Pie data={returnPieChartsDatas(10)} key={"10"}/></li>
            <li><Radar data={returnRadarChartsDatas(11)} key={"11"}/></li>
            <li><Radar data={returnRadarChartsDatas(12)} key={"12"}/></li>
            <li><Radar data={returnRadarChartsDatas(13)} key={"13"}/></li>
            <li><Radar data={returnRadarChartsDatas(14)} key={"14"}/></li>
            <li><Radar data={returnRadarChartsDatas(15)} key={"15"}/></li>
          </ul>
          
        )}
      </div>
    </div>
  );
};

export default Home;
