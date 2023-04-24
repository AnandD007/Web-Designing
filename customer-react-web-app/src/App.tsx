import './App.css';
import 'react-bootstrap';
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from 'axios';
import DashboardPage from './Pages/dashboard';
import Header from './Layouts/Header/header';
import CustomerAddPage from './Pages/customerAdd';
import CustomerViewPage from './Components/customersView';
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
              <Route path="/customer/add" element={<CustomerAddPage />} />
              <Route path="/customer/view" element={<CustomerViewPage />} />
            </Routes>
              </div>
        </div>
        </div>
    </AppContext.Provider>
  );
}
export default App;
