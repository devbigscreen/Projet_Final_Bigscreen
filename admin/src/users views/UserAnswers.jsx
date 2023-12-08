import List from "../components/List";
import '../css/AnswersList.css';

const AnswersList = () => {
  return (
    <div role="region" className="answersPage">
      <div className="list" role="region">
        <h1>Vos réponses :</h1>
        <List />
      </div>
    </div>
  );
};

export default AnswersList;