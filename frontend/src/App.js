import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import {AuthProvider} from './context/AuthContext'
import HomePage from './Pages/Home/HomePage';
import LoginPage from './Pages/Login/LoginPage';
import Header from './components/Header';
import Works from './components/Works/works'
import Chat from './components/Chat/Chat'
import UserLayout from './Pages/Layout/UserLayout';
import ClientHomeCarousel from './components/ClientHome/ClientHomeCarousel';
import Signup from './Pages/Signup/Signup';
import FreelancerLogin from './Pages/Freelancer/FreelancerLogin';
import AdminLogin from './Pages/Admin/AdminLogin';
import AdminHome from './Pages/Admin/AdminHome';
import AdminLayout from './Pages/Layout/AdminLayout'
import AdminClientsList from './components/Admin/AdminClientsList';
import AdminFreelancersList from './components/Admin/AdminFreelancersList';
import AdminReportedList from './components/Admin/AdminReportedList';
import SignupModal from './Pages/Modal/SignupModal';
import SignupFreelancer from './Pages/Signup/SignupFreelancer';
import FreelancerDetails from './Pages/Client/FreelancerDetails';
import ApplicationForm from './Pages/Client/ApplicationForm';
import Profile from './components/Profile/Profile'



function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          
          <Routes>
            {/* CLIENT ROUTES START */}
            <Route element={<UserLayout/>} path="/user/" >
              <Route element={<HomePage/>} path="/user/home/" />

              <Route element={<Chat/>} path="/user/chat" />
              <Route element={<Works/>} path="/user/works" />
              {/* <Route element={<Profile/>} path="/user/profile" /> */}
              {/* <Route element={<ClientHomeCarousel/>} path="/user/clienthome" /> */}
            </Route>
            <Route element={<LoginPage/>} exact path="/" />
            <Route element={<FreelancerDetails/>} exact path="/freelancersdetails" />
            <Route element={<ApplicationForm/>} exact path="/applicationform" />


            {/* CLIENT ROUTES END */}


            <Route element={<Signup/>} path="/signup" />
            <Route element={<SignupFreelancer/>} path="/signup-freelancer" />
            <Route element={<FreelancerLogin/>} path="/freelancer-login"/>

            {/* ADMIN ROUTES START  */}
            <Route element={<AdminLogin/>} path="/admin-login"/>
            <Route element={<AdminLayout/>} path="/admin/">
              <Route element={<AdminHome/>} path="/admin/admin-home"/>
              <Route element={<AdminClientsList/>} path="/admin/admin-client-list"/>
              <Route element={<AdminFreelancersList/>} path="/admin/admin-freelancers-list"/>
              <Route element={<AdminReportedList/>} path="/admin/admin-reported-list"/>
            </Route>
            {/* ADMIN ROUTES END */}
            

          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
