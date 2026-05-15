import { useState } from 'react';
import './minicalender.css';

function MiniCalendar({ tasks = [] }) {
    const today = new Date();
    const [current, setCurrent] = useState(new Date(today.getFullYear(), today.getMonth(), 1));

    const year = current.getFullYear();
    const month = current.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const monthName = current.toLocaleString('default', { month: 'long' });

    const prevMonth = () => setCurrent(new Date(year, month - 1, 1));
    const nextMonth = () => setCurrent(new Date(year, month + 1, 1));

    const todayTasks = tasks.filter(t => {
        const d = new Date(t.date);
        return d.toDateString() === today.toDateString();
    });

    const cells = [];
    for (let i = 0; i < firstDay; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) cells.push(d);

    return (
        <div className='mini-cal'>
            {/* Header */}
            <div className='cal-header'>
                <button onClick={prevMonth}>‹</button>
                <span style={{background: 'none'}}>{monthName} {year}</span>
                <button onClick={nextMonth}>›</button>
            </div>

            {/* Day labels */}
            <div className='cal-days-label'>
                {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => (
                    <span key={d} style={{background: 'none'}}>{d}</span>
                ))}
            </div>

            {/* Date grid */}
            <div className='cal-grid'>
                {cells.map((d, i) => (
                    <div
                        key={i}
                        className={`cal-cell 
                            ${d === today.getDate() && month === today.getMonth() && year === today.getFullYear() ? 'today' : ''}
                            ${d === null ? 'empty' : ''}
                        `}
                    >
                        {d}
                    </div>
                ))}
            </div>

            {/* Today's tasks */}
            <div className='cal-tasks'>
                <h6>Today's Tasks</h6>
                {todayTasks.length === 0
                    ? <p className='no-tasks'>No tasks for today</p>
                    : todayTasks.map((t, i) => (
                        <div key={i} className='cal-task-item'>
                            <span className='cal-dot'></span>
                            <div>
                                <p className='cal-task-title'>{t.title}</p>
                                <p className='cal-task-time'>{t.time}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default MiniCalendar;