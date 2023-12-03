import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './admin views/Home'
import QuestionsList from './admin views/QuestionsList';
import AnswersList from './users views/UserAnswers';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            {/* 
            <Route path='/' element={<Login />} />
            <Route path='*' element={<Login />} />
            */}
            <Route path='/home' element={<Home />}/>
            <Route path='/questions' element={<QuestionsList/>}/>
            <Route path='/answers' element={<AnswersList/>}/>

          </Routes>
        </BrowserRouter> 
      
      </div>
  )
}

export default App
