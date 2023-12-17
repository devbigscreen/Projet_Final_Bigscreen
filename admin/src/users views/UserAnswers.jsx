import List from "../components/List";
import "../css/AnswersList.css";
import { useEffect, useState } from "react";
import { getAllQuestions, getOneUserAnswers } from "../services/requests";
import { useParams } from "react-router-dom";
import logoNoir from "../images/logoNoir.png";

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
    <>
      <nav className="userAnswersNav">
        <img src={logoNoir} alt="Logo" className="logoNoir" />
        <h1>Your answers</h1>
      </nav>
      <section className="listUserView">
        <List
          questionsDatas={questionsDatas}
          view="answers"
          userDatas={userAnswers}
        />
      </section>
    </>
  );
};

export default AnswersList;
