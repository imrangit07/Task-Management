
import axios from "axios";
import "../css/dashboard.css";
import '../css/GetUserDetails.css';

import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const MyTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [taskForm, setTaskForm] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "low"
  });


  const getTasks = async () => {
    try {
      const res = await axios.get("http://localhost:3000/admin/gettasks");
      console.log(res.data);
      setTasks(res.data)

    } catch (error) {
      console.log(error);

    }
  }

  const handelDeleteTask = async (taskId) => {
    try {
      const res = await axios.delete(`http://localhost:3000/admin/deletetask/${taskId}`);
      toast.success(res.data.msg);
      getTasks();
    } catch (error) {
      console.log("Error deleting task:", error);
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  };
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put("http://localhost:3000/admin/updatetask", { ...taskForm, id: selectedTaskId });
      toast.success(res.data.msg);
      getTasks();
      setShowModal(false);
      setSelectedUser(null);
      setSelectedTaskId(null);
    } catch (error) {
      console.log("Error creating task:", error);
    }
  };
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
                      Due: {new Date(task.dueDate).toLocaleDateString('en-IN')}
                    </span>
                    <div className="task-actions">
                      <button className="edit-btn"
                        onClick={() => {
                          setShowModal(true);
                          setSelectedUser(task.assignee);
                          setSelectedTaskId(task._id);
                          setTaskForm({
                            title: task.title,
                            description: task.description,
                            dueDate: task.dueDate,
                            priority: task.priority,
                            status: task.status
                          });
                        }}
                      >Edit</button>
                      <button
                        className="delete-btn"
                        onClick={() => handelDeleteTask(task._id)}
                      >Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`modal-overlay ${showModal ? 'active' : ''}`}>
        <div className="modal-content">
          <span className="close-btn" onClick={() => setShowModal(false)}>&times;</span>
          <h2>Assign Task to <span className='user-name'>{selectedUser}</span></h2>
          <form onSubmit={handelSubmit}>
            <div className="form-group">
              <label>Task Title</label>
              <input
                type="text"
                name="title"
                value={taskForm.title}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                name="description"
                value={taskForm.description}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Due Date</label>
              <input
                type="date"
                name="dueDate"
                value={taskForm.dueDate}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Priority</label>
              <select
                name="priority"
                value={taskForm.priority}
                onChange={handleInputChange}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
            <button type="submit" className="submit-btn">Assign Task</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default MyTasks;