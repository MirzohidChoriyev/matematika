import React, {useEffect, useState} from 'react'
import "./QuizStart.css"
import {Link} from 'react-router-dom';
import HomePage from '../../components/HomePage/HomePage.js';

export default function QuizStart(){
	return(
		<div className = "QuizStart">
             <div className="QuizItem">
             	  <span className="QuizTitle">Prezident maktablariga tayyorlanuvchilar uchun.</span><br/>
                  <Link to = "./quiz">
                  	  <button className="QuizButton">Boshlash</button>
                  </Link>
                  <div className="QuizTime"><span>Vaqt chegarasi: 60 min</span></div>
             </div>
             <div className="QuizItem">
             	  <span className="QuizTitle">5-6 Sinf o'quvchilari uchun.</span><br/>
                  <button className="QuizButton">Boshlash</button>
                  <div className="QuizTime"><span>Vaqt chegarasi: 60 min</span></div>
             </div>
             <div className="QuizItem">
             	  <span className="QuizTitle">7-8 Sinf o'quvchilari uchun.</span><br/>
                  <button className="QuizButton">Boshlash</button>
                  <div className="QuizTime"><span>Vaqt chegarasi: 60 min</span></div>
             </div>
             <div className="QuizItem">
             	  <span className="QuizTitle">9-10 Sinf o'quvchilari uchun.</span><br/>
                  <button className="QuizButton">Boshlash</button>
                  <div className="QuizTime"><span>Vaqt chegarasi: 60 min</span></div>
             </div>
             <div className="QuizItem">
             	  <span className="QuizTitle">Abituriyentlar uchun.</span><br/>
                  <button className="QuizButton">Boshlash</button>
                  <div className="QuizTime"><span>Vaqt chegarasi: 60 min</span></div>
             </div>
             <div className="QuizItem">
             	  <span className="QuizTitle">O'qituvchilar uchun.</span><br/>
                  <button className="QuizButton">Boshlash</button>
                  <div className="QuizTime"><span>Vaqt chegarasi: 60 min</span></div>
             </div>
		</div>
	)
}