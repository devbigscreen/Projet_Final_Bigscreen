import  { useState, useEffect } from "react";
import "../css/formulaires.css";

import Survey from '../components/Survey';
import { getAllQuestions } from '../services/requests';


function SurveyView () {
  let [questionsDatas, setQuestionsDatas] = useState([]);
 
    useEffect(() => {

      getAllQuestions().then((res)=>{
setQuestionsDatas(res.data.data)

      })
    }, []);  
    
  console.log(questionsDatas)

return (
  <div role="region" className="survey">
 {/* <Survey/>  */}
  </div>


 );
}


export default SurveyView ;