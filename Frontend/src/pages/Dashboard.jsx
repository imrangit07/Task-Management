import { Outlet } from "react-router-dom";
import DashboardNab from "../components/dashboardNab";
import Footer from "../components/Footer";

const Dashboard = () => {
  return (
    <>
      <DashboardNab />

      <Outlet />

      <Footer />
    </>
  )
}

export default Dashboard