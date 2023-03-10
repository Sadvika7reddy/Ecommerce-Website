import {Fragment,useRef,useState,useContext} from 'react';
import AuthContext from '../UI/Context';
import classes from './Login.module.css';
import { useNavigate } from 'react-router-dom';
const Login=()=>{
    const history=useNavigate();
    const Authcntx=useContext(AuthContext)
    const emailInputRef=useRef();
    const passwordInputRef=useRef();
    const EventHandler=(event)=>{
        event.preventDefault();
        const enteredEmail=emailInputRef.current.value;
        const enteredPassword=passwordInputRef.current.value;
      localStorage.setItem('email',enteredEmail);
      
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCewUWbgztJYjhsb5UEmf3Ni6T_ehpNmXQ',{
            method:'POST',
            body:JSON.stringify(
              {
                email:enteredEmail,
                password:enteredPassword,
                returnSecureToken:true
              }
            ),
            headers :{
              'Content-Type':'application/json'
            }
          }
          ).then(res=>{
            if(res.ok){
                
              return res.json();
              
    
            }
            else{
              return res.json().then((data)=>{
                let errorMessage='Authentication Failed';
                throw new Error(errormessage);
              })
            }
        }).then((data)=>{
            Authcntx.logIn(data.idToken);
            history('/')
          })
          .catch((err)=>{
            alert(err.message)
          })
    } 
   
    const LogOutHandler=()=>{
      
      
      Authcntx.logOut();
    }
    return(
        <Fragment>
            <form className={classes.auth} onSubmit={EventHandler}>
                <div>
                    <label>Email</label>
                    <input type='email' required ref={emailInputRef}/>
                    <br/>
                    &nbsp;
                    </div>
                    <div>
                    <label>Password</label>
                    <input type='password' required ref={passwordInputRef}/><br/>
                    &nbsp;
                    </div>
                    <button type='submit'>Login</button>
                    <button type='submit' onClick={LogOutHandler}>LogOut</button>
            </form> 
        </Fragment>
    )
}
export default Login;