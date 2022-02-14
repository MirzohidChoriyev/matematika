import React from 'react'
import $ from 'jquery'
import './HomePage.css'
import { gsap } from "gsap";
import {useEffect, useState} from 'react'
import {Card, Col, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom' 

export default function HomeCards(){


const Width = () =>{
  if(window.innerWidth > 750){
  
      gsap.from('.gsap1', {opacity: 0, duration: 0.8, delay: 1.3, x: -70 })
      gsap.from('.gsap2', {opacity: 0, duration: 0.8, delay: 1.3, y: -50 })
      gsap.from('.gsap3', {opacity: 0, duration: 0.8, delay: 1.3, x: 70 })
      gsap.from('.gsap4', {opacity: 0, duration: 0.8, delay: 1.3, x: -70 })
      gsap.from('.gsap5', {opacity: 0, duration: 0.8, delay: 1.3, y: 50 })
      gsap.from('.gsap6', {opacity: 0, duration: 0.8, delay: 1.3, x: 70 })
  
} else {
      
      gsap.from('.gsap1', {opacity: 0, duration: 0.8, delay: 1.3, x: -70 })
      gsap.from('.gsap2', {opacity: 0, duration: 0.8, delay: 1.3, x: 70 })
      gsap.from('.gsap3', {opacity: 0, duration: 0.8, delay: 1.3, x: -70 })
      gsap.from('.gsap4', {opacity: 0, duration: 0.8, delay: 1.3, x: 70 })
      gsap.from('.gsap5', {opacity: 0, duration: 0.8, delay: 1.3, x: -70 })
      gsap.from('.gsap6', {opacity: 0, duration: 0.8, delay: 1.3, x: 70 })
  
}
}
useEffect(()=>{
   Width()
}, [])

	return(
		<div className = 'HomeCards'>
			 <div className="Cards">
                <Row>
                  <Col lg={4} md = {6} sm = {12}>
             	      <div className="HomeCardsItem gsap1">
                           <div className='Title'>O'zingizni sinab ko'ring</div>
                           <div className="TitleLegend">Presidential School</div>
                           <button className="TitleButton">
                               <Link className="Link" to = "/quizstart">Try it yourself</Link>
                           </button>
             	      </div>
             	  </Col>

             	  <Col lg={4} md = {6} sm = {12}>
             	      <div className="HomeCardsItem gsap2">
                           <div className='Title'>O'zingizni sinab ko'ring</div>
                           <div className="TitleLegend">For 5-6 classes</div>
                           <button className="TitleButton">
                               <Link className="Link" to = "/quizstart">Try it yourself</Link>
                           </button>
             	      </div>
             	  </Col>

             	  <Col lg={4} md = {6} sm = {12}>
             	      <div className="HomeCardsItem gsap3">
                           <div className='Title'>O'zingizni sinab ko'ring</div>
                           <div className="TitleLegend">For 7-8 classes</div>
                           <button className="TitleButton">
                               <Link className="Link" to = "/quizstart">Try it yourself</Link>
                           </button>
             	      </div>
             	  </Col>

             	  <Col lg={4} md = {6} sm = {12}>
             	      <div className="HomeCardsItem gsap4">
                           <div className='Title'>O'zingizni sinab ko'ring</div>
                           <div className="TitleLegend">For 9-10 classes</div>
                           <button className="TitleButton">
                               <Link className="Link" to = "/quizstart">Try it yourself</Link>
                           </button>
             	      </div>
             	  </Col>  

             	  <Col lg={4} md = {6} sm = {12}>
             	      <div className="HomeCardsItem gsap5">
                           <div className='Title'>O'zingizni sinab ko'ring</div>
                           <div className="TitleLegend">For applicants</div>
                           <button className="TitleButton">
                               <Link className="Link" to = "/quizstart">Try it yourself</Link>
                           </button>
             	      </div>
             	  </Col>

             	  <Col lg={4} md = {6} sm = {12}>
             	      <div className="HomeCardsItem gsap6">
                           <div className='Title'>O'zingizni sinab ko'ring</div>
                           <div className="TitleLegend">For teachers</div>
                           <button className="TitleButton">
                               <Link className="Link" to = "/quizstart">Try it yourself</Link>
                           </button>
             	      </div>
             	  </Col>
             	 </Row>
             </div>
		</div>
	)
}