import '../../App.css';
import {Dropdown} from 'react-bootstrap';
import { Link } from "react-router-dom";


function Sidebar() {
  return (
    <div className="sidebar">
      <br />
      <br />
      <ul>
        <li>
          <Link to="/dashboard" className="sidebar-items border rounded mt-4">Dashboard</Link>
        </li>
        <li>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic" className="sidebar-items">Customer</Dropdown.Toggle>
          <Dropdown.Menu className="sidebar-dropdown-menu ">
            <Dropdown.Item className="dropdown-items"><Link to="/customer/add">Add Customer</Link></Dropdown.Item>
            <Dropdown.Item className="dropdown-items"><Link to="/customer/view">View Customers</Link></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;