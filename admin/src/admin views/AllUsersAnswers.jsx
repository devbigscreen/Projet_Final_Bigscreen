import List from "../components/List";
import "../css/AnswersList.css";
import { useEffect, useState } from "react";
import { getAllAnswers, getAllQuestions } from "../services/requests";
import { useParams } from 'react-router-dom';
import Navbar from "../components/Navbar";

const AnswersList = () => {
  let [questionsDatas, setQuestionsDatas] = useState([]);
  let [usersAnswers, setUsersAnswers] = useState([]);
  let params = useParams();
  let userId = params.id;

  useEffect(() => {
    
    getAllQuestions().then((res) => {
      setQuestionsDatas(res.data.data);
    });

    getAllAnswers(userId).then((res) => {
      setUsersAnswers(res.data.data);
    });
  }, []);


  return (
    
    <>
    <Navbar />
  {usersAnswers && questionsDatas &&
    usersAnswers.map((list, index) => (
      <List
        key={index}
        questionsDatas={questionsDatas}
        view="answers"
        userDatas={list}
      />
    ))}
</>
  );
};

export default AnswersList;