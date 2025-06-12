import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminLogin from './pages/Admin'
import Layout from './Layout'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import DashboardNab from './components/dashboardNab'
import MyTasks from './pages/MyTasks'
import CreateUser from './pages/CreateUser'
import DashboardHome from './pages/DashboardHome'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='adminlogin' element={<AdminLogin />} />
          </Route>
        </Routes>
        <Routes>
          <Route path='dashboard' element={<Dashboard />}>
          <Route index element={<DashboardHome/>} />
          <Route path='mytask' element={<MyTasks />} />
          <Route path='create' element={<CreateUser />} />
          
          </Route>
         
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App