import axios from 'axios';
import { useEffect, useState } from 'react';
import '../css/GetUserDetails.css';

const GetUserDetails = () => {
    const [users, setUsers] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [taskForm, setTaskForm] = useState({
        title: '',
        description: '',
        dueDate: '',
        priority: 'medium'
    });

    const getUserData = async () => {
        try {
            const res = await axios.get('http://localhost:3000/user/getuser');
            setUsers(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleAssignTask = (user) => {
        setSelectedUser(user);
        setShowModal(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTaskForm(prev => ({...prev,[name]: value}));
        console.log(taskForm);
        
    };

    useEffect(() => {
        getUserData();
    }, []);

    return (
        <div className="user-details-container">
            <table className="user-table">
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>User Name</th>
                        <th>User Email</th>
                        <th>Designation</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.userId}>
                            <td>{user.userId}</td>
                            <td>{user.userName}</td>
                            <td>{user.userEmail}</td>
                            <td>{user.designation}</td>
                            <td>
                                <button 
                                    className="assign-task-btn"
                                    onClick={() => handleAssignTask(user)}
                                >
                                    Assign Task
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className={`modal-overlay ${showModal ? 'active' : ''}`}>
                <div className="modal-content">
                    <span className="close-btn" onClick={() => setShowModal(false)}>&times;</span>
                    <h2>Assign Task to <span className='user-name'>{selectedUser?.userName}</span></h2>
                    <form >
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
        </div>
    )
}

export default GetUserDetails;