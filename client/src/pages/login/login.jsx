import React from 'react';
import './login.css';
import img from '../../assets/logo (1).png';
import vid from "../../assets/loginvid.mp4";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Popup from '../../components/Extras/popup-notif/popup-notif';

function Login(){
    const[email, setEmail]=useState('');
    const[password, setpswrd]=useState('');
    const [error,setError]=useState('');
    const [notification, setNotification]=useState({
        message:'',
        type:''
    })
    const navigate = useNavigate();

    const handleSubmit= async(e) =>{
        
    e.preventDefault();
        try{
            const res = await axios.post("http://localhost:3000/api/auth/login",{
                email,
                password
            })
            localStorage.setItem('token', res.data.token);
            setNotification({
                message: 'Welcome back, Sign In Successful',
                type: 'success'
            });
            navigate('/userpanel');

        }catch(err){
            console.log(err.message);
            setNotification({
                message:err.response?.data?.message ||
                'Registration Failed',
                type: 'error'
            })
        }
    }

    return(
        <div className='login-page'>
            <Popup
            type={notification.type}
            message={notification.message}
            onClose={()=>
                setNotification({
                    message:'',
                    type:''
                })
            }/>
            <div className='circle1'></div>
            <div className='circle2'></div>
            <div className='circle3'></div>
            <h1 className="idk">*</h1>
            <div className='loginn'>
            <div className='left'>
                <video autoPlay muted loop playsInline className='bg-vid'>
                   <source src={vid} type="video/mp4" />
                </video>
                <div className='left-content'>
                    <div className="left-brand">
                        <img src={img} className="logimg"></img>
                        <p style={{fontSize:"14px"}}>Denozo</p>
                    </div>
                    <h5>Welcome Back!</h5>
                    <p>Please enter your details to login to your account.</p>
                </div>
            </div>
            <div className='right'>
                    <div className='signtext'>
                        <h3>Sign In Account</h3>
                        <p>Enter your credentials to login your account.</p>
                    </div>
                    <form className='signinform' onSubmit={handleSubmit}>
                        <div id="formb">
                            <label htmlFor='mail'>Email</label>
                            <input name="mail" onChange={(e)=>setEmail(e.target.value)} />
                        </div>
                        <div id="formb">
                             <label htmlFor='pswd'>Password</label>
                        <input name="pswd" onChange={(e)=>setpswrd(e.target.value)}/>
                        </div>
                        {error && <p style={{color:'red',fontSize:"9px"}}>{error}</p>}
                        <button type="submit">Sign In</button>
                    </form>
                    <div className='ifsignup'><p>Don't have an account?</p>
                <p className='buts' onClick={()=>{navigate('/signup')}}> Create Account.</p></div>
            </div>
        </div>
        </div>
    )
}

export default Login;