import { useEffect, useMemo, useState } from "react";
import "./calender.css";

function TaskCalendar() {
  const [tasks, setTasks] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("https://donezo-production-d645.up.railway.app/api/tasks/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) =>
        setTasks(Array.isArray(data) ? data : [])
      )
      .catch((err) => console.log(err));
  }, []);

  // FORMAT DATE
  const formatDateLocal = (date) => {
    const d = new Date(date);

    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(
      2,
      "0"
    );
    const day = String(d.getDate()).padStart(
      2,
      "0"
    );

    return `${year}-${month}-${day}`;
  };

  // GROUP TASKS BY DATE
  const tasksByDate = useMemo(() => {
    const map = {};

    tasks.forEach((task) => {
      if (!task.duedate) return;

      const key = formatDateLocal(task.duedate);

      if (!map[key]) {
        map[key] = [];
      }

      map[key].push(task);
    });

    return map;
  }, [tasks]);

  // SELECTED TASKS
  const selectedTasks = selectedDate
    ? tasksByDate[selectedDate] || []
    : [];

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(
    year,
    month,
    1
  ).getDay();

  const daysInMonth = new Date(
    year,
    month + 1,
    0
  ).getDate();

  const cells = [];

  // EMPTY CELLS
  for (let i = 0; i < firstDay; i++) {
    cells.push({ type: "blank" });
  }

  // DAYS
  for (let day = 1; day <= daysInMonth; day++) {
    const dateKey = formatDateLocal(
      new Date(year, month, day)
    );

    cells.push({
      day,
      dateKey,
      hasTasks: !!tasksByDate[dateKey]?.length,
    });
  }

  // MONTH NAVIGATION
  const prevMonth = () => {
    setCurrentDate(
      new Date(year, month - 1, 1)
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(year, month + 1, 1)
    );
  };

  return (
    <div className="task-calendar">

      {/* HEADER */}
      <div className="calendar-header">
        <button
          className="nav-btn"
          onClick={prevMonth}
        >
          ←
        </button>

        <h3>
          {currentDate.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </h3>

        <button
          className="nav-btn"
          onClick={nextMonth}
        >
          →
        </button>
      </div>

      {/* CALENDAR */}
      <div className="cal-grid">

        {/* DAY NAMES */}
        {[
          "Sun",
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
          "Sat",
        ].map((day) => (
          <div
            key={day}
            className="day-name"
          >
            {day}
          </div>
        ))}

        {/* CELLS */}
        {cells.map((cell, index) =>
          cell.type === "blank" ? (
            <div
              key={index}
              className="cal-cell empty"
            />
          ) : (
            <div
              key={cell.dateKey}
              onClick={() =>
                setSelectedDate(
                  cell.dateKey
                )
              }
              className={`cal-cell 
                ${
                  cell.hasTasks
                    ? "has-task"
                    : ""
                }
                ${
                  selectedDate ===
                  cell.dateKey
                    ? "selected"
                    : ""
                }
              `}
            >
              {/* DATE */}
              <span className="date-number">
                {cell.day}
              </span>

              {/* MINI TASK TAGS */}
              <div className="mini-tags">

                {tasksByDate[
                  cell.dateKey
                ]
                  ?.slice(0, 2)
                  .map((task) => (
                    <span
                      key={
                        task._id ||
                        task.title
                      }
                      className="mini-tag"
                    >
                      {task.title}
                    </span>
                  ))}

              </div>
            </div>
          )
        )}
      </div>

      {/* SELECTED DATE TASKS */}
      {selectedDate && (
        <div className="selected-tasks">

          <h4>
            Tasks for {selectedDate}
          </h4>

          {selectedTasks.length ? (
            <div className="selected-task-list">

              {selectedTasks.map((task) => (
                <div
                  key={
                    task._id ||
                    task.title
                  }
                  className="task-card"
                >
                  <h5>{task.title}</h5>

                  <p>
                    {task.description ||
                      "No description"}
                  </p>
                </div>
              ))}

            </div>
          ) : (
            <p>
              No tasks for this date.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default TaskCalendar;