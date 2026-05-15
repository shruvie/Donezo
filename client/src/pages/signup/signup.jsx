import './signup.css';
import React from 'react';
import img from '../../assets/logo (1).png';
import vid from "../../assets/signupvid.mp4";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Popup from '../../components/Extras/popup-notif/popup-notif';

function Signup(){
     const[email, setEmail]=useState('');
    const[password, setpswrd]=useState('');
    const [error,setError]=useState('');
    const [notification, setNotification] = useState({
        message:'',
        type:''
    });
    const [name, setName]= useState('');
    const navigate = useNavigate();

    const handleSubmit= async(e) =>{
        
    e.preventDefault();
        try{
            const res = await axios.post("http://localhost:3000/api/auth/register",{
                email,
                name,
                password
            })
            localStorage.setItem('token', res.data.token);
            setNotification({
                message: 'Account created successfully',
                type: 'success'
            })
            navigate('/userpanel');

        }catch(err){
            console.log(err.message);
            setNotification({
                message: err.response?.data?.message ||
                'Registration Failed',
                type: 'error'
            });
        }
    }
    return(
        <div className='signup-page'>
            <Popup
                type={notification.type}
                message={notification.message}
                onClose={() =>
                    setNotification({
                        message: '',
                        type: ''
                    })
                }
            />
            <div className='leftin'>
                <video autoPlay muted loop playsInline className='bg-vid1'>
                               <source src={vid} type="video/mp4" />
                </video>
                <div className='brandin'>
                    <div className='signtxtt'>
                        <img src={img} className="im1"></img>
                         <p>Donezo</p>
                    </div>
                    <h5>Welcome Back!</h5>
                <p>Please enter your details to login to your account.</p>
                </div>
                
            </div>
            <div className='rightin'>
                <div className='man'>
                    <div className='signtext'>
                        <h3>Create an Account</h3>
                        <p>Enter your credentials to create your account.</p>
                    </div>
                   
                </div>
                <div className='myform'>
                    <form className='signupform' onSubmit={handleSubmit}>
                        <div className='first-row'>
                            <div id="formb1">
                            <label htmlFor='name'>Name</label>
                            <input name="name" onChange={(e)=>setName(e.target.value)} />
                        </div>
                        <div id="formb1">
                            <label htmlFor='mail'>Email</label>
                            <input name="mail" onChange={(e)=>setEmail(e.target.value)} />
                        </div>
                        </div>
                        <div id="formb1">
                             <label htmlFor='pswd'>Password</label>
                             <input name="pswd" onChange={(e)=>setpswrd(e.target.value)}/>
                             <p className='forgot-password'>Forgot Password?</p>
                        </div>
                        
                        {error && <p style={{color:'red',fontSize:"9px"}}>{error}</p>}
                        <button type="submit">Sign Up</button>
                        
                    </form>
                </div>
                <div className='iflogin'><p>Already have an account?</p>
                <p className='but' onClick={()=>{navigate('/login')}}> Sign in.</p></div>
            </div>
        </div>
    )
}

export default Signup;