import React from 'react'
import './Home.css'
// import Menyu from '../../components/Menyu/Menyu.js'
import HomePage from '../../components/HomePage/HomePage.js'
import Sidebar from '../../components/Sidebar/Sidebar.js'
import Results from '../../components/Results/Results.js'
import Topbar from '../../components/Topbar/Topbar.js'
import {Card, Col, Row} from 'react-bootstrap'

export default function Home(){
	return(
		<div className = "Home">  
		    <Topbar />            
		    <Sidebar />
            <HomePage />
            <Results />
		</div>
	)
}