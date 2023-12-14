import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './admin views/Login'
import Home from './admin views/Home'
import QuestionsList from './admin views/QuestionsList';
import AnswersList from './users views/UserAnswers';
import SurveyView from './users views/SurveyView';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            
            <Route path='/' element={<Login />} />
   
            
            <Route path='/home' element={<Home />}/>
            <Route path='/questions' element={<QuestionsList/>}/>
            <Route path='/answers/:id' element={<AnswersList/>}/>
            <Route path='/survey' element={<SurveyView/>}/>
          </Routes>
        </BrowserRouter> 
      
      </div>
  )
}

export default App
