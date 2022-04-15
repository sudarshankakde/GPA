import React from 'react';
import ReactDOM from 'react-dom';
import './res/css/style.css';
import './res/css/home.css';
import BoysHostel from './page/BoysHostel';
import GirlsHostel from './page/GirlsHostel';
import Navbar from './component/Navbar';
import HomeComponent from './component/HomeComponent';
import LoginForm from './component/LoginForm';
import FooterComponet from './component/FooterComponet';
import PendingApplication from './component/PendingApplication';
import RejectedApplications from './component/RejectedApplications';
import NOPAGEFOUND from './component/NOPAGEFOUND';
import { BrowserRouter, Route, Routes } from "react-router-dom";
ReactDOM.render(
  <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="*" element={<NOPAGEFOUND title='Home' />} />
        <Route path="/" element={<HomeComponent title='Home' />} />
        <Route path="/login" element={<LoginForm title="Login" />} />
        <Route path="/home" element={<HomeComponent title='Home' />} />
        <Route path="/PendingApplication" element={<PendingApplication title="Pending Application" />} />
        <Route path="/RejectedApplications" element={<RejectedApplications title="Rejected Application" />} />
        <Route path="/BoysHostel" element={<BoysHostel title="Boys Hostel | Details" />} />
        <Route path="/GirlsHostel" element={<GirlsHostel title="Girls Hostel | Details" />} />
      </Routes>
      <FooterComponet />
    </BrowserRouter>
  </>
  ,
  document.getElementById('root')
);