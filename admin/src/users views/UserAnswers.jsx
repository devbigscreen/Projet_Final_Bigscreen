import List from "../components/List";
import "../css/AnswersList.css";
import { useEffect, useState } from "react";
import { getAllQuestions, getOneUserAnswers } from "../services/requests";

const AnswersList = () => {
  let [questionsDatas, setQuestionsDatas] = useState([]);
  let [userAnswers, setUserAnswers] = useState([]);

  useEffect(() => {
    
    getAllQuestions().then((res) => {
      setQuestionsDatas(res.data.data);
    });

    getOneUserAnswers('test2').then((res) => {
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
