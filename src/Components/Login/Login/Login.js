import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config'
import './Login.css'


firebase.initializeApp(firebaseConfig);
const Login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    const handleLogin =()=>{
        firebase.auth().signInWithPopup(provider)
        .then(function(result) {
           
            const {displayName,email} = result.user;
            const user ={name:displayName, email}
            console.log(user)
            
            
          }).catch(function(error) {
            console.log(error.message)
          });
    
    }
    return ( 
        <div className="login">
            <h2>Login with</h2>
            <input type="text" onClick={handleLogin} placeholder="continue with google"className="search_btn"></input>
        </div>     
    );
};

export default Login;