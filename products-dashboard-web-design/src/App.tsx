import './App.css';
import 'react-bootstrap';

import React, { useState, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import DashboardPage from './Pages/dashboard';
import Header from './Layouts/Header/header';
import ProductAddPage from './Pages/productsAdd';
import ProductViewPage from './Pages/productsView';
import Sidebar from './Layouts/Sidebar/sideBar';

export const AppContext = React.createContext<any>({});

interface Product {
  id: number;
  name: string;
  description: string;
  quantity: number;
  price: number;
}

function App() {

  const [profile, setProfile] = useState({
    name: "User",
    photo: "gradientImage-1",
  });
  const [sortedBy, setSortedBy] = useState<string>();

  const [currentProduct, setCurrentProduct] = useState<Product>({
    id: 0,
    name: '',
    description: '',
    quantity: 0,
    price: 0,
  });
  const [showdiv, setShowdiv] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [products, setProducts] = useState<Product[]>([]);

  const handleClosediv = () => setShowdiv(false);

  const handleShowdiv = () => {
    setCurrentProduct({
      id: 0,
      name: "",
      description: "",
      quantity: 0,
      price: 0,
    });
    setCurrentStep(1);
    setShowdiv(true);
  };

  const handleStep1Submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCurrentStep(2);
  };

  const handleStep2Submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newProduct = { ...currentProduct, id: products.length + 1 };
    setProducts((prevProducts) => [...prevProducts, newProduct]);
    setShowdiv(false);
    setCurrentStep(1);
    alert("Product added successfully..!");
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setCurrentProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setCurrentProduct((prevProduct) => ({ ...prevProduct, quantity: parseInt(value) }));
  };


  const [search, setSearch] = useState('');
  const filteredItems = {
    list: products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    ),
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSort = (sortBy: string) => {
    let sortedList: Product[] = [];

    if (sortBy === 'nameAsc') {
      sortedList = [...products].sort((a, b) => a.name.localeCompare(b.name));
    }
    else if (sortBy === 'nameDesc') {
      sortedList = [...products].sort((a, b) => b.name.localeCompare(a.name));
    }
    else if (sortBy === 'priceAsc') {
      sortedList = [...products].sort((a, b) => a.price - b.price);
    }
    else if (sortBy === 'priceDesc') {
      sortedList = [...products].sort((a, b) => b.price - a.price);
    }
    setProducts(sortedList);
    setSortedBy(sortBy);
  };

  const handleDeleteProduct = (id: number) => {
    const updatedList = products.filter((Product) => Product.id !== id);
    setProducts(updatedList);
  };

  const clearValues = (event: React.ChangeEvent<HTMLInputElement>) => {

  }
  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setCurrentProduct((prevProduct) => ({ ...prevProduct, price: parseFloat(value) }));
  };


  return (
    <AppContext.Provider value={{
      sortedBy,
      handleSort,
      handlePriceChange,
      handleQuantityChange,
      handleClosediv,
      handleStep1Submit,
      handleStep2Submit,
      setCurrentStep,
      setShowdiv,
      currentStep,
      setProducts,
      setSortedBy,
      search,
      handleSearch,
      filteredItems,
      handleDeleteProduct,
      currentProduct,
      handleInputChange
    }}>
      <div>
        <Header />
        <div className="main-container">
          <Sidebar />
          <div className="content-container">
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/product/add" element={<ProductAddPage />} />
              <Route path="/product/view" element={<ProductViewPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default App;
