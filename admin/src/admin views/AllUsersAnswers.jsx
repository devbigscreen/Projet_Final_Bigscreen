import List from "../components/List";
import "../css/AnswersList.css";
import { useEffect, useState } from "react";
import { getAllAnswers, getAllQuestions } from "../services/requests";
import { useParams } from 'react-router-dom';

const AnswersList = () => {
  let [questionsDatas, setQuestionsDatas] = useState([]);
  let [usersAnswers, setUsersAnswers] = useState([]);
  let [allListsDatas, setAllListsDatas] = useState([]);
  let params = useParams();
  let userId = params.id;

  useEffect(() => {
    
    getAllQuestions().then((res) => {
      setQuestionsDatas(res.data.data);
    });

    getAllAnswers(userId).then((res) => {
      setUsersAnswers(res.data.data);
    });

    const subArrayLength = 20;

    const listsArrays = [];
    for (let i = 0; i < usersAnswers.length; i += subArrayLength) {
    const newListArray = usersAnswers.slice(i, i + subArrayLength);
    listsArrays.push(newListArray);
    };

    setAllListsDatas(listsArrays);

    console.log(allListsDatas)

  }, []);


  return (
    
    <>
  {allListsDatas && questionsDatas &&
    allListsDatas.map((list, index) => (
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