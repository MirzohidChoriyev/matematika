import React from 'react'
import './Topbar.css'
import {useEffect} from 'react'
import $ from 'jquery'

export default function Topbar(){
	const SearchBar = () =>{
		 $('.TopbarItemIcon').on('click', ()=>{
		 	  $('.SearchItem').slideToggle(200);
		 })
	}

	   $(document).ready(()=>{
        $(window).scroll(()=>{
        	   if(window.scrollY > 20){
                $('.SearchItem').hide(200);
        	   } else {
                $('.SearchItem').show(200);
        	   }
        })
	})
useEffect(()=>{
	SearchBar();
	
}, [])
	return(
		<div>
             <div className = "Topbar">
                <span className='TopbarTitle'>Matematika</span>
             	  <ul className='TopbarContainer'>
             	  	    
             	  	    <li className="TopbarItem">Yangiliklar</li>
             	  	    <li className="TopbarItem">Natijalar</li>
             	  	    <li className="TopbarItem">Savollar</li>
             	  	    <li className="TopbarItem">Dastur haqida</li>
             	  	    <li className="TopbarItemIcon"><i class="fa fa-search"></i></li>
             	  </ul>

             	  <div className="SearchItem">
             	  	    <input placeholder = "Search" />
             	  </div>
             </div>
		</div>
	)
}