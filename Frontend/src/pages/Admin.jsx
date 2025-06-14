
import { useState } from 'react';
import '../css/Admin.css';
import axios from "axios";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AdminLogin = () => {
  const [admin,setAdmin]=useState("");
  const [password,setPassword]=useState("");
const navigate = useNavigate()
  const handelAdminLogin =async(e)=>{
    e.preventDefault()

    try {
      const res = await axios.post("http://localhost:3000/admin/adminlogin",{admin,password});
       toast.success(res.data.msg);
  
       localStorage.setItem("Admin",JSON.stringify(res.data.adminData));

      setTimeout(() => {
            navigate("/dashboard");
        }, 4000);
 
    } catch (error) {
      toast.error(error.response.data.msg);
      
    }
         
  }

  console.log(admin,password);
  
  return (
    <div className="admin-login-container">
      <div className="admin-login-card">
      
        <div className="login-header">
          <div className="logo">
            <h2>Admin Portal</h2>
          </div>
          <p>Sign in to access the dashboard</p>
        </div>

        <form className="login-form">
        
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <div className="input-with-icon">
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                onChange={(e)=>{setAdmin(e.target.value)}}
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
                onChange={(e)=>{setPassword(e.target.value)}}
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

         
          <button type="submit" className="login-button" onClick={handelAdminLogin}>
            Sign In
          </button>

      
          <div className="divider">
            <span>or</span>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AdminLogin;