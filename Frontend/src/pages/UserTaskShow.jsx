
import axios from "axios";
import "../css/dashboard.css";
import { useState, useEffect } from "react";

const UserTaskShow = () => {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    try {
      const userData = localStorage.getItem("UserLogin");
      const userId = JSON.parse(userData).userId;
      const res = await axios.get(`http://localhost:3000/user/getusertasks/?id=${userId}`);
      setTasks(res.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getTasks();
  }, [])
  return (
    <>
      <div className="dashboard-container" >
        <div className="right-container" style={{ padding: "10px 100px" }}>
          <div className="task-header">
            <h2>Task Dashboard</h2>
            <div className="task-filters">
              <select>
                <option>All Status</option>
                <option>Pending</option>
                <option>In Progress</option>
                <option>Completed</option>
              </select>
              <select>
                <option>All Priorities</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>
          </div>
          <div className="task-stats">
            <div className="stat-card total">
              <span className="stat-number">{tasks.length}</span>
              <span className="stat-label">Total Tasks</span>
            </div>
            <div className="stat-card pending">
              <span className="stat-number">
                {tasks.filter(t => t.status === "pending").length}
              </span>
              <span className="stat-label">Pending</span>
            </div>
            <div className="stat-card in-progress">
              <span className="stat-number">
                {tasks.filter(t => t.status === "in-progress").length}
              </span>
              <span className="stat-label">In Progress</span>
            </div>
            <div className="stat-card completed">
              <span className="stat-number">
                {tasks.filter(t => t.status === "completed").length}
              </span>
              <span className="stat-label">Completed</span>
            </div>
          </div>
          <div className="task-list">
            {tasks.map(task => (
              <div key={task.id} className={`task-card ${task.priority}`}>
                <div className="task-card-header">
                  <h4>{task.title}</h4>
                  <span className={`task-status ${task.status}`}>
                    {task.status.replace("-", " ")}
                  </span>
                </div>
                <p className="task-description">{task.description}</p>
                <div className="task-card-footer">
                  <span className="task-assignee">{task.assignee}</span>
                  <div className="task-meta">
                    <span className="task-date">
                      Due: {new Date(task.dueDate).toLocaleDateString()}
                    </span>
                    <div className="task-actions">
                      <button className="edit-btn">Edit</button>
                      <button className="delete-btn">Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserTaskShow;