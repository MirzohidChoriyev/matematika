import React from 'react'
import './Sidebar.css'
import $ from 'jquery'
import {useState, useEffect} from 'react';

export default function Sidebar(){
	
// Sidebar show, hide....
const QuizToggle = () =>{
	 $('.QuizToggle').slideToggle(200);
}
	const AnswerToggle = () =>{
		 $('.AnswerToggle').slideToggle(200);
	}
	const QuestionToggle = () =>{
		 $('.QuestionToggle').slideToggle(200);
	}
	const AboutToggle = () =>{
		 $('.AboutToggle').slideToggle(200);
	}

    const TopbarMenu = () =>{
    		var i = document.querySelector('.Sidebar').style.left;
    		 	if(i === '0px'){
    	 	        $('.Sidebar').animate({'left': '-275px'}, 300);
    	 	    } else {
    	 	    	$('.Sidebar').animate({'left': '0px'}, 300); 
    	 	    }
    }


	return(
		<div className = "Sidebar">
		    <div className="TopbarMenu"  onClick={()=>{TopbarMenu()}} ><span><i class="fa fa-bars"></i></span></div>
            <div className="SidebarContainer">
            	  <span className='SidebarTitle quiz' onClick = {()=>{QuizToggle()}}>Questions <i class="fa fa-caret-down showQuizIcon" aria-hidden="true"></i></span>
            	  <div className='QuizToggle'>
            	  	  <ul className='SidebarUl'>
            	  	   <li className='SidebarLi Active'><i class="fa fa-circle-o Icon"></i>Presidential School</li>

            	  	   <li className='SidebarLi'><i class="fa fa-circle-o Icon"></i>For 4 classes</li>
            	  	   <li className='SidebarLi'><i class="fa fa-circle-o Icon"></i>For 5-6 classes</li>
            	  	   <li className='SidebarLi'><i class="fa fa-circle-o Icon"></i>For 7-8 classes</li>
            	  	   <li className='SidebarLi'><i class="fa fa-circle-o Icon"></i>For 9-10 classes</li>
            	  	   <li className='SidebarLi'><i class="fa fa-circle-o Icon"></i>For teachers</li>
            	    </ul>
            	  </div>
            </div>

            <div className="SidebarContainer">
            	  <span className='SidebarTitle' onClick = {()=>{AnswerToggle()}}>Results <i class="fa fa-caret-down showAnswerIcon" aria-hidden="true"></i></span>
            	  <div className="AnswerToggle">
            	  	  <ul className='SidebarUl'>
            	  	   <li className='SidebarLi'><i class="fa fa-circle-o AnswerIcon"></i>Presidential School</li>

            	  	   <li className='SidebarLi'><i class="fa fa-circle-o AnswerIcon"></i>For 4 classes</li>
            	  	   <li className='SidebarLi'><i class="fa fa-circle-o AnswerIcon"></i>For 5-6 classes</li>
            	  	   <li className='SidebarLi'><i class="fa fa-circle-o AnswerIcon"></i>For 7-8 classes</li>
            	  	   <li className='SidebarLi'><i class="fa fa-circle-o AnswerIcon"></i>For 9-10 classes</li>
            	  	   <li className='SidebarLi'><i class="fa fa-circle-o AnswerIcon"></i>For teachers</li>
            	    </ul>
            	  </div>
            </div>

            <div className="SidebarContainer">
            	  <span className='SidebarTitle' onClick = {()=>{QuestionToggle()}}>Examples <i class="fa fa-caret-down showQuestionIcon" aria-hidden="true"></i></span>
            	  <div className='QuestionToggle'>
            	  	  <ul className='SidebarUl'>
            	  	   <li className='SidebarLi'><i class="fa fa-circle-o QuestionIcon"></i>Presidential School</li>

            	  	   <li className='SidebarLi'><i class="fa fa-circle-o QuestionIcon"></i>For 4 classes</li>
            	  	   <li className='SidebarLi'><i class="fa fa-circle-o QuestionIcon"></i>For 5-6 classes</li>
            	  	   <li className='SidebarLi'><i class="fa fa-circle-o QuestionIcon"></i>For 7-8 classes</li>
            	  	   <li className='SidebarLi'><i class="fa fa-circle-o QuestionIcon"></i>For 9-10 classes</li>
            	  	   <li className='SidebarLi'><i class="fa fa-circle-o QuestionIcon"></i>For teachers</li>
            	  
            	    </ul>
            	  </div>
            </div>

            <div className="SidebarContainer">
            	  <span className='SidebarTitle' onClick = {()=>{AboutToggle()}}>Information <i class="fa fa-caret-down showAboutIcon" aria-hidden="true"></i></span>
            	  <div className='AboutToggle'>
            	  	 <ul className='SidebarUl'>
            	  	   <li className='SidebarLi'><i class="fa fa-circle-o dataIcon" aria-hidden="true"></i>Platform news</li>
            	  	   <li className='SidebarLi'><i class="fa fa-circle-o dataIcon" aria-hidden="true"></i>About the program</li>
            	    </ul>
            	  </div>
            </div>
		</div>
	)
}