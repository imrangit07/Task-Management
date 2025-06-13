import { useEffect, useState } from 'react';
import '../css/Header.css';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('dashboard');
  const [isLogin, setLogin] = useState(false);
  
  const load = () => {
    const adminData = localStorage.getItem("Admin");
    if (adminData) {
      try {
        const parsedData = JSON.parse(adminData);
        if (parsedData?.isAdminLogin) {
          setLogin(parsedData);
        }
      } catch (err) {
        console.error("Failed to parse admin data", err);
      }
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

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <span className="logo-icon">📋</span>
          <span className="logo-text">TaskFlow</span>
        </div>
        <div>
          <h1 style={{textDecoration:"underline"}}>Task Management System</h1>
        </div>

        <button
          className={`mobile-menu-button ${mobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
          <div>
            <button className='user-btn' onClick={() => { navigate('/') }}>User</button>
            <button className='admin-btn' onClick={() => { navigate('adminlogin') }}>Admin</button>
          </div>
      </div>
    </nav>
  );
};

export default Header;