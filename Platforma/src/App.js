import React from 'react'
import "./App.css"
import Home from './pages/Home/Home.js'
import QuizStart from './pages/QuizStart/QuizStart.js'
import Login from './pages/Login/Login.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Quiz from './pages/Quiz/Quiz.js';

export default function App(){
	return(
		<div className='App'>
		     {/*<Login />*/}
             <BrowserRouter>
             	  <Switch>
             	        <Route exact path = "/"><Home /></Route>
             	  	    <Route exact path = "/quizstart"><QuizStart /></Route>
             	  	    <Route exact path = "/quiz"><Quiz /></Route>
             	  </Switch> 
             </BrowserRouter>
                 
		</div>
	)
}
