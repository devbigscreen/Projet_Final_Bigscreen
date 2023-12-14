import Navbar from "../components/Navbar";
import List from "../components/List";
import '../css/QuestionsList.css';
import { useEffect, useState } from "react";
import { getAllQuestions } from "../services/requests";

const QuestionsList = () => {
  let [questionsDatas, setQuestionsDatas] = useState([]);

  useEffect(() => {
    getAllQuestions().then((res)=>{
      setQuestionsDatas(res.data.data);
    });
  }, []);

  console.log(questionsDatas)

  return (
    <div role="region" className="listPage">
      <Navbar/>
      <div className="list" role="region">
        <h1>Questionnaire !</h1>
        {questionsDatas &&
        <List questionsDatas={questionsDatas} view='questions'/>
        }
      </div>
    </div>
  );
};

export default QuestionsList;