import '../App.css';
import {Form, Button} from 'react-bootstrap';

import React, { useContext, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


const ProductAddPage = () => {
    const productNameRef = useRef<HTMLInputElement>(null);
  
    useEffect(() => {
      if (productNameRef.current) {
        productNameRef.current.focus();
      }
    }, []);
  
    return (
      <div>
        <h1>Product Add Page</h1>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Product Name</Form.Label>
            <Form.Control type="text" placeholder="Enter product name" ref={productNameRef} />
          </Form.Group>
  
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Product Description</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Enter product description" />
          </Form.Group>
  
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  };

  export default ProductAddPage;
  