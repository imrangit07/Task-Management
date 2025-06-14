import { useEffect, useState } from 'react';
import '../css/Header.css';
import { useNavigate } from 'react-router-dom';

const UserDashboardNab = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('dashboard');
    const [isLogin, setLogin] = useState(false);
    const [logout, setLogout] = useState(false)

    const load = () => {
        const userData = localStorage.getItem("UserLogin");
        if (userData) {
            const parsedData = JSON.parse(userData);
            setLogin(parsedData);
        }
    }
    useEffect(() => {
        load();
    }, []);


    const navigate = useNavigate()
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const handleNavClick = (item) => {
        setActiveItem(item);
        setMobileMenuOpen(false);
    };

    const handelLogout = ()=>{
        localStorage.clear();
        navigate("/");
    }

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-brand">
                    <span className="logo-icon">📋</span>
                    <span className="logo-text">TaskFlow</span>
                </div>

                <button
                    className={`mobile-menu-button ${mobileMenuOpen ? 'open' : ''}`}
                    onClick={toggleMobileMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <>
                    <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
                        <ul>
                            <li
                                className={activeItem === 'dashboard' ? 'active' : ''}
                                onClick={() => handleNavClick('dashboard')}
                            >
                                <i className="fas fa-tachometer-alt"></i>
                                <span onClick={() => { navigate("/userdashboard") }}>Dashboard</span>
                            </li>
                            <li
                                className={activeItem === 'tasks' ? 'active' : ''}
                                onClick={() => handleNavClick('tasks')}
                            >
                                <i className="fas fa-tasks"></i>
                                <span onClick={()=>{navigate("usertask")}}>My Tasks</span>
                            </li>
                            <li
                                className={activeItem === 'projects' ? 'active' : ''}
                                onClick={() => handleNavClick('projects')}
                            >
                                <i className="fas fa-project-diagram"></i>
                                <span>Projects</span>
                            </li>
                            <li
                                className={activeItem === 'calendar' ? 'active' : ''}
                                onClick={() => handleNavClick('calendar')}
                            >
                                <i className="fas fa-calendar-alt"></i>
                                <span>Calendar</span>
                            </li>
                        </ul>
                    </div>


                    <div className="user-profile" >
                        <div className="notification-badge">
                            <i className="fas fa-bell"></i>
                            <span className="badge">3</span>
                        </div>

                        <div className="profile-dropdown" onClick={()=>{setLogout(prev=>!prev)}}>
                            <div className="profile-avatar">
                                <img
                                    src="https://tse3.mm.bing.net/th?id=OIP.MBCR-2yri_2xatIZSaja4wAAAA&pid=Api&P=0&h=180"
                                    alt="User profile"
                                />
                            </div>
                            <span className="profile-name">{isLogin.userName}</span>
                            <i className="fas fa-chevron-down" style={{ rotate: logout ? '180deg' : '0deg' }}></i>


                            <div className='Logout-btn' style={{ display: logout ? 'block' : 'none' }}>
                                <span onClick={handelLogout}>Logout</span>
                            </div>
                        </div>


                    </div>
                </>
            </div>
        </nav>
    );
};

export default UserDashboardNab