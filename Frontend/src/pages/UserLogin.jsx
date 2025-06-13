import { useState } from 'react';
import '../css/Admin.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";

const UserLogin = () => {
    const [userEmail, setUserEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    const handelUserLogin = async (e) => {
        e.preventDefault()

        try {
            const res = await axios.post("http://localhost:3000/user/userLogin", { userEmail, password });
            toast.success(res.data.msg);

            localStorage.setItem("UserLogin", JSON.stringify(res.data.UserData));

            setTimeout(() => {
                navigate("/userdashboard");
            }, 4000);

        } catch (error) {
            toast.error(error.response.data.msg);
        }

    }

    return (
        <div className="admin-login-container">
            <div className="admin-login-card">

                <div className="login-header">
                    <div className="logo">
                        <h2>User Portal</h2>
                    </div>
                    <p>Sign in to access the dashboard</p>
                </div>

                <form className="login-form">

                    <div className="form-group">
                        <label htmlFor="username">Email</label>
                        <div className="input-with-icon">
                            <input
                                type="email"
                                id="username"
                                name="userEmail"
                                placeholder="Enter your email"
                                onChange={(e) => { setUserEmail(e.target.value) }}
                            />
                        </div>
                    </div>


                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <div className="input-with-icon">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                onChange={(e) => { setPassword(e.target.value) }}
                            />
                            <button type="button" className="show-password">
                            </button>
                        </div>
                    </div>


                    <div className="form-options">
                        <a href="/forgot-password" className="forgot-password">
                            Forgot password?
                        </a>
                    </div>


                    <button type="submit" className="login-button" onClick={handelUserLogin}>
                        Sign In
                    </button>


                    <div className="divider">
                        <span>or</span>
                    </div>

                </form>
            </div>
            <ToastContainer
                autoClose={3000}
            />
        </div>
    );
};

export default UserLogin;