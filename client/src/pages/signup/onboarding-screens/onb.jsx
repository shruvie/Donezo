import './onb.css';
import bgv from '../../../assets/avatar-bg.mp4';
import img from '../../../assets/logo (1).png';
import { BsUpload } from 'react-icons/bs';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const defaultAvatars = [
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Shruti',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Donezo',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Task',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Plan',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Work',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Focus',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Goal',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Done',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Star',
];

function Onb(){
    const [selectedAvatar, setSelectedAvatar] = useState(null);
    const [avatars, setAvatars] = useState([]);  // fixed destructuring
    const navigate = useNavigate();

    const handleUpload = async(e) => {
        const file = e.target.files[0];
    if(!file) return;

    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user._id;

    const imgData = new FormData();
    imgData.append('file', file);
    imgData.append('upload_preset', 'avatars');


    try{
            const cloudinaryRes = await axios.post(
    'https://api.cloudinary.com/v1_1/dvngb5c6v/image/upload',
    imgData,
    {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }
);
            const imgUrl = cloudinaryRes.data.secure_url;
            setSelectedAvatar(imgUrl);    
            await axios.put(`https://donezo-production-d645.up.railway.app/api/users/${userId}/avatar`,{avatar:imgUrl},
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
            setAvatars((prev) => [...prev, imgUrl]);
            setSelectedAvatar(imgUrl);             // set as selected too
        }
        catch(err){
            console.log({error:err.message});
        }
    };

    const handleConfirm = async () => {
        if(!selectedAvatar) return alert('Please select an avatar!');
        const user = JSON.parse(localStorage.getItem('user'));
        localStorage.setItem('user', JSON.stringify({ ...user, avatar: selectedAvatar }));
        navigate('/userpanel');
    };

    return(
        <div className='onboarding-screen'>
            <div className='onb-left'>
                <div className='onb-left-cont'>
                    <img src={img} className='im2'></img>
                    <p>Donezo</p>
                </div>
                <video src={bgv} autoPlay muted loop playsInline className='bgvv'></video>
            </div>
            <div className='onb-right'>
                <div className='title-bar'>
                    <h3>Lets Onboard you</h3>
                    <p>Choose an avatar!</p>
                </div>

                {/* Preview */}
                <div className='av-preview'>
                    <img
                        src={selectedAvatar || defaultAvatars[0]}
                        className='av-preview-img'
                    />
                    <div className='av'>
                        <label>
                            <BsUpload className='ed'/>
                            <p>Upload</p>
                            <input
                                type='file'
                                accept='image/*'
                                onChange={handleUpload}
                                style={{ display: 'none' }}
                            />
                        </label>
                    </div>
                </div>

                <div className='ri-main-content'>
                    {/* Upload section */}
                    

                    {/* Choose from avatars */}
                    <div className='moree'>
                        <p>U can select more</p>
                        <div className='options'>
                             <div className='av-pack'>
                                {defaultAvatars.map((av, i) => (
                                  
                                    <img
                                        key={i}
                                        src={av}
                                        className={`av-opt ${selectedAvatar === av ? 'av-selected' : ''}`}
                                        onClick={() => setSelectedAvatar(av)}
                                    />
                                    
                                ))}
                                </div>
                            
                        </div>
                    </div>
                </div>

                <button className='confirm-btn' onClick={handleConfirm}>Confirm</button>
            </div>
        </div>
    )
}

export default Onb;