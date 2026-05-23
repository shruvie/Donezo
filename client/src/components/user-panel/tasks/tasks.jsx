import React, { useEffect, useState } from "react";
import { BsPaperclip, BsThreeDots } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";

function Tasks() {
    const [overlay, setOverlay] = useState(false);
    const [tasks, setTasks] = useState([]);

    const statuses = [{ label: 'to-do', value: 'to-do', color: '#ff8787', bgcolor: '#ffbebe' }, { label: 'progress', value: 'progress', color: '#fcdab3', bgcolor: '#fff8b4' }, { label: 'done', value: 'done', color: '#ceffd5', bgcolor: '#bbffbf' }];
    
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        const token = localStorage.getItem('token');

        fetch(`http://localhost:3000/api/tasks/`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(req => req.json())
            .then(data => { console.log(data); setTasks(Array.isArray(data) ? data : []) })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className='task' style={{ width: '1055px', display:'flex', flexDirection:'column'}}>
            <div className='left' style={{ width: '100%'}}>
                <div className='titlebar'>
                    <h3>Hello, Shruti!</h3>
                    <p>Management and Planning is a simple & attractive way to be productive.</p>
                </div>
                <div className='tasks-section'>
                    <div className='filters'>
                        <div className='or-filters'>
                            <div className='type'>to-do<FaChevronDown /></div>
                            <div className='priority'>High Priority<FaChevronDown /></div>
                        </div>
                        <div className='add-task' onClick={() => { setOverlay(true) }}>+  New Task</div>
                    </div>

                    {tasks.map((task, i) => (
                        <div className='task-cards' style={{width:'100%'}}>
                            <div key={i} className='task-top'>
                                <div className='task-title'>
                                    <h6>Today</h6>
                                    <h3>{task.title}</h3>
                                    <p>Description: <span>{task.description}</span></p>
                                    <p className='time'>{task.duedate ? new Date(task.duedate).toLocaleDateString('en-US', {
                                        month: 'short',
                                        day: 'numeric',
                                        year: 'numeric'
                                    }) : 'No due date'}</p>
                                </div>
                                <div className='task-bottom'>
                                    <div className='attach-files'><BsPaperclip className='clip' /></div>
                                    <div className='more'><BsThreeDots className='dots' /></div>
                                </div>

                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
        )   
}

            export default Tasks;