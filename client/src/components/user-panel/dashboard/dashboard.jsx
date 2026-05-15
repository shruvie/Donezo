import { FaArrowDown, FaChevronDown, FaEdit, FaRegEdit, FaUserEdit } from 'react-icons/fa';
import './dashboard.css';
import { IoArrowDown } from 'react-icons/io5';
import { BsPaperclip, BsThreeDots } from 'react-icons/bs';
import bg from '../../../assets/grad-red.png';
import MiniCalendar from '../../Extras/calender/minicalender.jsx';


function Dashboard(){
    return(
        <div className='task'>
            <div className='left'>
                <div className='titlebar'>
                    <h3>Hello, Shruti!</h3>
                    <p>Management and Planning is a simple & attractive way to be productive.</p>
                </div>
                    <div className='tasks-section'>
                        <div className='filters'>
                            <div className='or-filters'>
                                <div className='type'>to-do<FaChevronDown/></div>
                            <div className='priority'>High Priority<FaChevronDown/></div>
                        </div>
                        <div className='add-task'>+  New Task</div>
                        </div>
                            <div className='task-cards'>
                                <div className='task-top'>
                                    <div className='task-title'>
                                    <h6>Today</h6>
                                    <h3>Creating resume</h3>
                                    <p>Description: <span>Creating things</span></p>
                                </div>
                                <div className='task-bottom'>
                                    <div className='attach-files'><BsPaperclip className='clip'/></div>
                                    <div className='more'><BsThreeDots className='dots'/></div>
                                </div>
                                </div>
                                <p>08:30 Am - 09:30 Am</p>
                            </div>
                    </div>
            </div>
            <div className='right'>
                
                <div className='note' style={{backgroundImage:`url(${bg})`}}>
                    <div className='note-top'>
                        <h6>Today's note</h6>
                        <div className='edit'><FaRegEdit /></div>
                    </div>
                    <div className='note-content'>
                        <div className='li'></div>
                        <p>Going to the meetings for planning meetings for tomorrow's ahead.</p>
                    </div>
                </div>
                <div className='cal'><MiniCalendar/></div>
                <div className='Projects'></div>
                <div className='tasks-progress'></div>
            </div>
        </div>
    )
}

export default Dashboard;