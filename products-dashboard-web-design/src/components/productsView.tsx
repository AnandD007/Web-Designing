import '../App.css';
import 'react-bootstrap';

import React, { useContext, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const ProductViewPage = () => {
  return (
    <div>
      <h1>Product View Page</h1>
      <p>Here are your products:</p>
      <ul>
        <li>Product 1</li>
        <li>Product 2</li>
        <li>Product 3</li>
      </ul>
    </div>
  );
};

export default ProductViewPage;