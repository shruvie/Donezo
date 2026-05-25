import './user-panel.css';
import logo from '../../assets/logo (1).png';
import { MdDashboard, MdCalendarToday, MdSettings, MdLogout } from 'react-icons/md'
import { FaTasks, FaProjectDiagram } from 'react-icons/fa'
import { IoSearch, IoNotificationsOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Dashboard from './dashboard/dashboard';
import Tasks from './tasks/tasks.jsx';
import TaskCalendar from './calender/calender.jsx';

function Userpanel(){

    const [activepage, setactivepage]=useState('dashboard');
    const navigate = useNavigate();

    const [showProfile, setShowProfile] =
    useState(false);

  

    const renderPage=()=>{
        switch(activepage){
            case 'dashboard': return <Dashboard/>;
            case 'tasks': return <Tasks />;
            case 'calender' : return <TaskCalendar />;
            default: <Dashboard />
        }
    };

    const user = JSON.parse(localStorage.getItem('user'));


    return(
        <>
        <div className='circ'></div>
             <div className='circ2'></div>
              <div className='circ3'></div>
               <div className='circ4'></div>
        <div className='usr-panel'>
            
            <div className='sidebar'>
                <div className='sdebar-logo'>
                    <img src={logo} className="lgmg"></img>
                    <h5>Donezo</h5>
                </div>
                <div className="sidebar-buttons">
                    <ul className='sidebari'>
                        <li onClick={() => setactivepage('dashboard')} className={activepage === 'dashboard' ? 'active' : ''}><MdDashboard id="icons"/>Dashboard</li>
                        <li onClick={() => setactivepage('tasks')} className={activepage === 'tasks' ? 'active' : ''}><FaTasks id="icons"/>Tasks</li>
                        <li onClick={() => setactivepage('calender')} className={activepage === 'calender' ? 'active' : '' }><MdCalendarToday id="icons"/>Calender</li>
                        <li><a href="Settings"><MdSettings id="icons"/>Settings</a></li>
                        <li><a href='' onClick={()=>navigate('/')}><MdLogout id="icons"/>Logout</a></li>
                    </ul>
                </div>
            </div>
            <div className='panel'>
                <div className='top-bar'>
                    <h2>Dashboard</h2>
                    <p><IoSearch id="icons"/>Search project, title</p>
                    <div className='profile'>
                        <div className='Add members'></div>
                        <div className='notifications'><IoNotificationsOutline /></div>
                        <img src={user?.avatar} className='top-bar-profile-img' onClick={()=>setShowProfile(true)}></img>
                        {showProfile && (
            <div className="profile-dropdown">
                <p onClick={()=>setShowProfile(false)}>x</p>
                <h3>{user?.name}</h3>

                <p>{user?.email}</p>

                <span>
                    {user?.role || "User"}
                </span>

                <button
                    className="logout-btn"
                    onClick={() => navigate('/')}
                >
                    Logout
                </button>

            </div>
        )}

                    </div>
                </div>
                <div className='main-content'>{renderPage() }</div>
            </div>
            
        </div>
        </>
    )
}

export default Userpanel;