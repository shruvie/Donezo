import React, { useEffect, useState } from "react";
import { BsPaperclip, BsThreeDots } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import Popup from "../../Extras/popup-notif/popup-notif";

function Tasks() {
    const [overlay, setOverlay] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [open, setopen] = useState(null);
    const [currentstatus, setcurrentstatus] = useState({ label: 'to-do', value: 'to-do', color: '#ff8787', bgcolor: '#ffbebe' });
    const [selectedpriority, setselectedpriority] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [duedate, setDuedate] = useState('');
    const [popup,setpopup]=useState(null);


    const statuses = [
        { label: 'to-do', value: 'to-do', color: '#ff8787', bgcolor: '#ffbebe' },
        { label: 'in-progress', value: 'in-progress', color: '#fcdab3', bgcolor: '#fff8b4' },
        { label: 'done', value: 'done', color: '#ceffd5', bgcolor: '#bbffbf' }
    ];

    const priorities = [
        { label: 'Low', value: 'low' },
        { label: 'Medium', value: 'medium' },
        { label: 'High', value: 'high' }
    ];

    useEffect(() => {
        const token = localStorage.getItem('token');

        fetch(`https://donezo-production-d645.up.railway.app/api/tasks/`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(req => req.json())
            .then(data => { setTasks(Array.isArray(data) ? data : []); })
            .catch(err => console.log(err));
    }, []);

    const handleSubmit = async () => {
    const token = localStorage.getItem('token');

    try {
        const res = await fetch('https://donezo-production-d645.up.railway.app/api/tasks/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                title,
                description,
                duedate,
                status: currentstatus.value,
                priority: selectedpriority
            })
        });

        const data = await res.json();
        console.log('response:', data); // check what comes back

        if (!res.ok) {
            setpopup({ message: data.message || 'Failed to add task', type: 'error' });
            return;
        }

        setTasks([...tasks, data]);
        setOverlay(false);
        setTitle('');
        setDescription('');
        setDuedate('');
        setselectedpriority(null);
        setcurrentstatus(statuses[0]);
        setpopup({ message: 'Task added successfully!', type: 'success' });

    } catch (err) {
        console.log(err);
        setpopup({ message: 'Server error occurred', type: 'error' });
    }
};

    return (
        <>
            <div className='task' style={{ width: '1055px', display: 'flex', flexDirection: 'column' }}>
                <div className='left' style={{ width: '100%' }}>
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
                            <div className='add-task' onClick={() => setOverlay(true)}>+ New Task</div>
                        </div>

                        {tasks.map((task, i) => (
                            <div key={i} className='task-cards' style={{ width: '100%' }}>
                                <div className='task-top'>
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

            {overlay && (
                <div className='overlay' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div className='overlay-form' style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>

                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <input
                                name='title'
                                className='title'
                                type='text'
                                placeholder='Title'
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                            />
                            <div className='statuses'>
                                <button
                                    className='status-btn'
                                    style={{ color: currentstatus.color, borderColor: currentstatus.color, display: 'flex', flexDirection: 'row', gap: '8px', alignItems: 'center' }}
                                    onClick={() => setopen(open === 'form' ? null : 'form')}
                                >
                                    <div style={{ backgroundColor: currentstatus.color, height: '14px', width: '14px', borderRadius: '7px' }} />
                                    {currentstatus.value} ▾
                                </button>

                                {open === 'form' && (
                                    <div className='status-dropdown'>
                                        {statuses.map((item) => (
                                            <div
                                                className='status-option'
                                                key={item.value}
                                                style={{ color: item.color, padding: '12px 16px', display: 'flex', justifyContent: 'left', alignItems: 'center', gap: '8px', flexDirection: 'row' }}
                                                onClick={() => { setcurrentstatus(item); setopen(null); }}
                                            >
                                                <div style={{ backgroundColor: item.color, height: '14px', width: '14px', borderRadius: '7px' }} />
                                                {item.value}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className='nd-row'>
                            <div className='pri'>
                                <p style={{ fontSize: '12px', marginTop: '12px' }}>priority</p>
                                <div className='prior-row'>
                                    {priorities.map((items) => {
                                        const isSelected = selectedpriority === items.value;
                                        return (
                                            <div
                                                className="prior"
                                                key={items.value}
                                                style={{ backgroundColor: isSelected ? 'white' : '#000000', color: isSelected ? 'black' : 'white', borderColor: isSelected ? 'black' : 'white', fontWeight: '500' }}
                                                onClick={() => setselectedpriority(items.value)}
                                            >
                                                {items.label}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className='duedate'>
                                <label style={{ fontSize: '12px', marginTop: '12px' }}>Date</label>
                                <input
                                    type='date'
                                    value={duedate}
                                    onChange={e => setDuedate(e.target.value)}
                                />
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <label htmlFor='description' style={{ fontSize: '12px' }}>Description</label>
                            <input
                                name='description'
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                                style={{ border: '1px solid #ffffff69', textAlign: 'top', borderRadius: '10px', height: '60px', width: '100%' }}
                            />
                        </div>
                    </div>

                    <div className='buttons1' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', gap: '12px' }}>
                        <button
                            className='cancel-btn'
                            style={{ border: '1px solid #ffffff4a', color: 'white', padding: '8px 12px', borderRadius: '22px' }}
                            onClick={() => setOverlay(false)}
                        >
                            Cancel
                        </button>
                        <button
                            className='add-btn'
                            style={{ backgroundColor: 'white', color: 'black', padding: '8px 12px', borderRadius: '22px' }}
                            onClick={handleSubmit}
                        >
                            Save
                        </button>
                    </div>
                </div>
            )}
            {popup && <Popup type={popup.type} message={popup.message} onClose={() => setpopup(null)} />}
        </>
    );
}

export default Tasks;