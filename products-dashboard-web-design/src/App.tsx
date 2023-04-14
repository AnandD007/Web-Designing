import './App.css';
import 'react-bootstrap';

import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container, Form, Button } from "react-bootstrap";
import DashboardPage from './components/dashboard';
import Header from './components/header';
import ProductAddPage from './components/productsAdd';
import ProductViewPage from './components/productsView';
import Sidebar from './components/sideBar';


interface ContextType {
  profilePhotoUrl: string;
}

const AppContext = React.createContext<ContextType>({
  profilePhotoUrl: "",
});


{/* productsview.tsx*/ }

const App = () => {
  const appContextValue = {
    profilePhotoUrl: "https://picsum.photos/50/50",
  };

  return (
    <AppContext.Provider value={appContextValue}>
        <div>
          <Header />
          <div className="main-container">
            <Sidebar />
            <div className="content-container">
              <Router>
              <Routes>
                <Route path="/dashboard">
                  <DashboardPage />
                </Route>
                <Route path="/product/add">
                  <ProductAddPage />
                </Route>
                <Route path="/product/view">
                  <ProductViewPage />
                </Route>
              </Routes>
              </Router>
            </div>
          </div>
        </div>
    </AppContext.Provider>
  );
};

export default App;
