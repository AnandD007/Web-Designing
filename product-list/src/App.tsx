import './App.css';
import { BrowserRouter as Router, Routes, Route }
    from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import GroceryList from "./Productlist";

function App() {
  return (
    <div className="App">
      <GroceryList />
    </div>
  );
}

export default App;
