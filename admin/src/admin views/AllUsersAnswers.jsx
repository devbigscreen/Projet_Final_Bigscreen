import List from "../components/List";
import "../css/AnswersList.css";
import { useEffect, useState } from "react";
import { getAllAnswers, getAllQuestions } from "../services/requests";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import CheckAuth from "../components/CheckAuth";

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
      <CheckAuth />
      <Navbar />
      <h1>Liste de toutes les réponses</h1>
      <section className="list">
        {usersAnswers &&
          questionsDatas &&
          usersAnswers.map((list, index) => (
            <List
              key={index}
              questionsDatas={questionsDatas}
              view="answers"
              userDatas={list}
            />
          ))}
      </section>
    </>
  );
};

export default AnswersList;
