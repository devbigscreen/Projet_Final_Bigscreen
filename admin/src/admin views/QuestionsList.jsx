import Navbar from "../components/Navbar";
import List from "../components/List";
import '../css/QuestionsList.css';

const QuestionsList = () => {
  return (
    <div role="region" className="listPage">
      <Navbar/>
      <div className="list" role="region">
        <h1>Questionnaire !</h1>
        <List />
      </div>
    </div>
  );
};

export default QuestionsList;