import List from "../components/List";
import "../css/AnswersList.css";
import { useEffect, useState } from "react";
import { getAllQuestions, getOneUserAnswers } from "../services/requests";
import { useParams } from 'react-router-dom';

const AnswersList = () => {
  let [questionsDatas, setQuestionsDatas] = useState([]);
  let [userAnswers, setUserAnswers] = useState([]);
  let params = useParams();
  let userId = params.id;

  useEffect(() => {
    
    getAllQuestions().then((res) => {
      setQuestionsDatas(res.data.data);
    });

    getOneUserAnswers(userId).then((res) => {
      setUserAnswers(res.data.data);
    });

  }, []);



  return (
    
    <List
      questionsDatas={questionsDatas}
      view="answers"
      userDatas={userAnswers}
    />
  );
};

export default AnswersList;
