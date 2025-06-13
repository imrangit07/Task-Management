import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import UserDashboardNab from "../components/UserDashboardNab";

const UserDashboard = () => {
    return (
        <>
            <UserDashboardNab />
            
            <Outlet />

            <Footer />
        </>
    )
}

export default UserDashboard;