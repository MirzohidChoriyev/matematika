import React from 'react'
import './Menyu.css'
import {gsap} from 'gsap'
import {useEffect} from 'react'
import {Col, Row} from 'react-bootstrap'

export default function Menyu(){
	const AnimateMenyu = () =>{
		gsap.from('.gsap7', {opacity: 0, duration: 0.8, delay: 0.8, x: -100 })
        gsap.from('.gsap8', {opacity: 0, duration: 0.8, delay: 0.8, x: 100 })
	}
useEffect(()=>{
	AnimateMenyu()
}, [])
	return(
		<div className = 'Menyu'>
			 <div className='MenyuCards'>
			    <Row>
			      <Col lg = {6} md={12} sm = {12}>
			 	      <div className="MenyuCardsItem1 gsap7">
			 	  	      <span className="span1">O'zingizni sinab ko'ring</span>
			 	  	      <span className="span1">Natijalaringizni bilib oling</span>
			 	  	      <span className="span1">Har hafta yangi testlar</span>
			 	      </div>
			      </Col>

			      <Col lg = {6} md={12} sm = {12}>
			 	      <div className="MenyuCardsItem2 gsap8">
			 	  	      <span className="span2">Prezident maktabiga tayyorlanuvchilar uchun</span>
			 	  	      <span className="span2">4, 5, 6, 7, 8, 9, 10, 11 - Sinflar uchun</span>
			 	  	      <span className="span2">O'qituvchilar uchun</span>
			 	      </div>
			      </Col>
			    </Row>
			 </div>
		</div>
	)
}
