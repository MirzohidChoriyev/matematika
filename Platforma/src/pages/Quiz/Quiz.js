import React from 'react'
import './Quiz.css'
import QuizTopbar from '../../components/QuizTopbar/QuizTopbar.js'
import QuizTest from '../../components/QuizTest/QuizTest.js'

export default function Quiz(){
	return(
		<div className="Quiz">
            <div className="QuizApplication">
            	<QuizTopbar />
            	
            </div>
		</div>
	)
}