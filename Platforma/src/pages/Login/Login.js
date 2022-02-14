import React from 'react'
import "./Login.css"
import axios from 'axios';
import $ from 'jquery'
import {Form, Button} from 'react-bootstrap'

export default function Login(){
const checkLogin = () =>{
    var login = document.getElementById('login').value;  
    var password = document.getElementById('password').value;

    var array = {     
        'login':login,
        'password':password
    }
    console.log(array);
    axios({ 
        url:'http://213.230.99.101:2027/api/auth/signin',
        method: 'post',
        data: array
    }).then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err);
    })
}

	return(  
		<div className = "Login">
            <div className="LoginContainer">
            	 <img className="LoginImage" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Emblem_of_Uzbekistan.svg/200px-Emblem_of_Uzbekistan.svg.png" />
<div className="LoginTitle">Matematika fanidan online platforma</div>
<div className="FormContainer">  
<Form className='Form'>
  <Form.Group className="mb-3" controlId="login">
    <Form.Label>Login</Form.Label>
    <Form.Control type="text" placeholder="Loginni kiriting" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="password">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Passwordni kiriting" />
  </Form.Group>
  <Button variant="primary" type="button" onClick = {checkLogin}>
    Submit
  </Button>
</Form> <br/>
    {/*<Button className="Button2" style = {{backgroundColor: 'green', color: 'white', border: '1px solid white', position: 'absolute', bottom: '20px'}}>
        Ro'yxatdan o'tish
    </Button>*/}
</div>
            </div>
		</div>
	)
}