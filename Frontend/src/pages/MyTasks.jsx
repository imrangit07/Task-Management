import DashboardNab from "../components/dashboardNab";
import "../css/dashboard.css";

const MyTasks = () => {
  // Sample task data
  const tasks = [
    {
      id: 1,
      title: "Complete project",
      description: "Finish the React dashboard implementation",
      status: "in-progress",
      priority: "high",
      dueDate: "2023-06-15",
      assignee: "John Doe"
    },
    {
      id: 2,
      title: "Team meeting",
      description: "Discuss project progress with team members",
      status: "pending",
      priority: "medium",
      dueDate: "2023-06-10",
      assignee: "Jane Smith"
    },
    {
      id: 3,
      title: "Code review",
      description: "Review pull requests from junior developers",
      status: "completed",
      priority: "low",
      dueDate: "2023-06-05",
      assignee: "Mike Johnson"
    },
    {
      id: 4,
      title: "Update documentation",
      description: "Add new API endpoints to documentation",
      status: "pending",
      priority: "medium",
      dueDate: "2023-06-12",
      assignee: "Sarah Williams"
    }
  ];

  return (
    <>
      <div className="dashboard-container">
        <div className="left-container">
          <div className="create-user-section">
            <h3>Create New Task</h3>
            <form className="task-form">
              <div className="form-group">
                <label>Task Title</label>
                <input type="text" placeholder="Enter task title" />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea placeholder="Enter task description"></textarea>
              </div>
              <div className="form-group">
                <label>Assignee</label>
                <select>
                  <option>Select assignee</option>
                  <option>John Doe</option>
                  <option>Jane Smith</option>
                  <option>Mike Johnson</option>
                </select>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Priority</label>
                  <select>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Due Date</label>
                  <input type="date" />
                </div>
              </div>
              <button type="submit" className="submit-btn">
                Create Task
              </button>
            </form>
          </div>
        </div>
        <div className="right-container">
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

export default MyTasks;