import '../../App.css';
import 'react-bootstrap';
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <br />
      <br />
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