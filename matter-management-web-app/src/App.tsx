import './App.css';
import 'react-bootstrap';
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from 'axios';
import DashboardPage from './Pages/dashboard';
import Header from './Layouts/Header/header';
import ViewMattersByClients from './Components/ViewMattersByClients';
import ViewMattersForClient from './Components/ViewMattersForClient';
import ViewInvoicesForMatter from './Components/ViewInvoicesForMatter';
import ViewBillingForAttorney from './Components/ViewBillingForAttorney';
import ViewBillingByAttorneys from './Components/ViewBillingByAttorneys';
import ViewInvoicesByMatters from './Components/ViewInvoicesByMatters';
import AddMatters from './Components/AddMatter';
import Sidebar from './Layouts/Sidebar/sideBar';

export const AppContext = React.createContext<any>({});

function App() {
  const [profile, setProfile] = useState({
    name: "User",
    photo: "gradientImage-1",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.interceptors.request.use(
      function (config) {
        console.log("Before Request..");
        // document.body.classList.add("loading-indicator");
        setLoading(true);
        return config;
      },
      function (error) {
        console.log("Error Before Request");
        setLoading(false);
        return Promise.reject(error);
      }
    );

    axios.interceptors.response.use(
      function (response) {
        console.log("After Request..");
        // document.body.classList.remove("loading-indicator");
        setLoading(false);
        return response;
      },
      function (error) {
        console.log("Error After Request");
        setLoading(false);
        return Promise.reject(error);
      }
    );
  }, []);
  return (
    <AppContext.Provider value={{ loading }}>
        <div className="App">
        <Header />
        <div className="main-container">
          <Sidebar />
          <div className="content-container">
          <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="matters/add" element={<AddMatters />} />
              <Route path="clients/ViewMattersByClients" element={<ViewMattersByClients />} />
              <Route path="clients/ViewMattersForClient" element={<ViewMattersForClient />} />
              <Route path="invoices/ViewInvoicesByMatters" element={<ViewInvoicesByMatters />} />      
              <Route path="invoices/ViewInvoicesForMatter" element={<ViewInvoicesForMatter />} />
              <Route path="attorneys/ViewBillingForAttorney" element={<ViewBillingForAttorney />} />
              <Route path="attorneys/ViewBillingByAttorneys" element={<ViewBillingByAttorneys />} />
            </Routes>
              </div>
        </div>
        </div>
    </AppContext.Provider>
  );
}
export default App;
