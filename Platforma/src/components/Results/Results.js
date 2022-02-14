import React from 'react';
import './Results.css';
import { gsap } from "gsap";
import {useEffect, useState} from 'react';
import {Card, Col, Row} from 'react-bootstrap';
import $ from 'jquery';

export default function Results(){
	const WidthResults = () =>{
  if(window.innerWidth > 750){
  
      gsap.from('.Resultgsap1', {opacity: 0, duration: 0.8, delay: 1.3, x: -70 })
      gsap.from('.Resultgsap2', {opacity: 0, duration: 0.8, delay: 1.3, y: -50 })
      gsap.from('.Resultgsap3', {opacity: 0, duration: 0.8, delay: 1.3, x: 70 })
      gsap.from('.Resultgsap4', {opacity: 0, duration: 0.8, delay: 1.3, x: -70 })
      gsap.from('.Resultgsap5', {opacity: 0, duration: 0.8, delay: 1.3, y: 50 })
      gsap.from('.Resultgsap6', {opacity: 0, duration: 0.8, delay: 1.3, x: 70 })
  
} else {
    
      gsap.from('.Resultgsap1', {opacity: 0, duration: 0.8, delay: 1.3, x: -70 })
      gsap.from('.Resultgsap2', {opacity: 0, duration: 0.8, delay: 1.3, x: 70 })
      gsap.from('.Resultgsap3', {opacity: 0, duration: 0.8, delay: 1.3, x: -70 })
      gsap.from('.Resultgsap4', {opacity: 0, duration: 0.8, delay: 1.3, x: 70 })
      gsap.from('.Resultgsap5', {opacity: 0, duration: 0.8, delay: 1.3, x: -70 })
      gsap.from('.Resultgsap6', {opacity: 0, duration: 0.8, delay: 1.3, x: 70 })
  
}
}
useEffect(()=>{
   WidthResults()
}, [])

	return(
		<div className = 'ResultsCards'>  
			 <div className="Cards">
                <Row>
                  <Col lg={4} md = {6} sm = {12}>
             	      <div className="ResultsCardsItem Resultgsap1">
                           <div className='ResultsTitle'>O'zingizni sinab ko'ring</div>
                           <div className="ResultsTitleLegend">Presidential School</div>
                           <button className="ResultsTitleButton">Try it yourself</button>
             	      </div>
             	  </Col>

             	  <Col lg={4} md = {6} sm = {12}>
             	      <div className="ResultsCardsItem Resultgsap2">
                           <div className='ResultsTitle'>O'zingizni sinab ko'ring</div>
                           <div className="ResultsTitleLegend">For 5-6 classes</div>
                           <button className="ResultsTitleButton">Try it yourself</button>
             	      </div>
             	  </Col>

             	  <Col lg={4} md = {6} sm = {12}>
             	      <div className="ResultsCardsItem Resultgsap3">
                           <div className='ResultsTitle'>O'zingizni sinab ko'ring</div>
                           <div className="ResultsTitleLegend">For 7-8 classes</div>
                           <button className="ResultsTitleButton">Try it yourself</button>
             	      </div>
             	  </Col>

             	  <Col lg={4} md = {6} sm = {12}>
             	      <div className="ResultsCardsItem Resultgsap4">
                           <div className='ResultsTitle'>O'zingizni sinab ko'ring</div>
                           <div className="ResultsTitleLegend">For 9-10 classes</div>
                           <button className="ResultsTitleButton">Try it yourself</button>
             	      </div>
             	  </Col>

             	  <Col lg={4} md = {6} sm = {12}>
             	      <div className="ResultsCardsItem Resultgsap5">
                           <div className='ResultsTitle'>O'zingizni sinab ko'ring</div>
                           <div className="ResultsTitleLegend">For applicants</div>
                           <button className="ResultsTitleButton">Try it yourself</button>
             	      </div>
             	  </Col>

             	  <Col lg={4} md = {6} sm = {12}>
             	      <div className="ResultsCardsItem Resultgsap6">
                           <div className='ResultsTitle'>O'zingizni sinab ko'ring</div>
                           <div className="ResultsTitleLegend">For teachers</div>
                           <button className="ResultsTitleButton">Try it yourself</button>
             	      </div>
             	  </Col>
             	 </Row>
             </div>
		</div>
	)
}