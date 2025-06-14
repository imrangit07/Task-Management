
import { useState } from "react";
import "../css/dashboard.css";
import axios from "axios";
import { useEffect } from "react";
import GetUserDetails from "../pages/GetUserDetails";
import { toast } from "react-toastify";
const CreateUser = () => {
    const [userData, setUserData] = useState({});
    const handelInput = (e) => {
        const { name, value } = e.target;
        setUserData(Values => ({ ...Values, [name]: value }))
    }

    const handelSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:3000/admin/createuser', userData);
            toast.success("user Created Successfuly");
        } catch (error) {
            console.log(error.response);
        }
    }


    return (
        <>
            <div className="dashboard-container">
                <div className="left-container">
                    <div className="create-user-section">
                        <h3>Create New User</h3>
                        <form className="task-form" onSubmit={handelSubmit}>
                            <div className="form-group">
                                <label>User Id</label>
                                <input type="number" placeholder="Enter user Id" name="userId" onChange={handelInput} />
                            </div>
                            <div className="form-group">
                                <label>User Name</label>
                                <input type="text" placeholder="Enter user name" name="userName" onChange={handelInput} />
                            </div>
                            <div className="form-group">
                                <label>User Email</label>
                                <input type="email" placeholder="Enter user email" name="userEmail" onChange={handelInput} />
                            </div>
                            <div className="form-group">
                                <label>Designation</label>
                                <select name="designation" onChange={handelInput}>
                                    <option>Select designation</option>
                                    <option>Manager</option>
                                    <option>Team Leader</option>
                                    <option>Frontend Developer</option>
                                    <option>Backend Developer</option>
                                    <option>Designer</option>
                                    <option>Software Developer</option>
                                    <option>UI/UX Designer</option>
                                    <option>Quality Analyst</option>
                                    <option>DevOps Engineer</option>
                                </select>
                            </div>
                            <button type="submit" className="submit-btn">
                                Add User
                            </button>
                        </form>
                    </div>
                </div >

                <div className="right-container">
                    <GetUserDetails />

                </div>
            </div >
        </>
    );
};

export default CreateUser;