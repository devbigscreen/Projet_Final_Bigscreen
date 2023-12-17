import Navbar from "../components/Navbar";
import List from "../components/List";
import CheckAuth from "../components/CheckAuth";
import "../css/QuestionsList.css";
import { useEffect, useState } from "react";
import { getAllQuestions } from "../services/requests";

const QuestionsList = () => {
  let [questionsDatas, setQuestionsDatas] = useState([]);

  useEffect(() => {
    getAllQuestions().then((res) => {
      setQuestionsDatas(res.data.data);
    });
  }, []);

  return (
    <div role="region" className="listPage">
      <CheckAuth />
      <Navbar />
      <div className="list" role="region">
        <h1>Liste des questions</h1>
        {questionsDatas && (
          <List questionsDatas={questionsDatas} view="questions" />
        )}
      </div>
    </div>
  );
};

export default QuestionsList;
