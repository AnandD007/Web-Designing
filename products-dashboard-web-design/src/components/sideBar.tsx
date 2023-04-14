import '../App.css';
import 'react-bootstrap';

import React, { useContext, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Sidebar = () => {
    return (
      <div className="sidebar">
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/product/add">Product Add</Link>
          </li>
          <li>
            <Link to="/product/view">Product View</Link>
          </li>
        </ul>
      </div>
    );
  };

  export default Sidebar;