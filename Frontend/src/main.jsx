import '@fortawesome/fontawesome-free/css/all.min.css';
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import './css/style.css'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById('root')).render(
    <>
        <App />
        <ToastContainer
            autoClose={2000}
            pauseOnHover={false}
        />
    </>

)
