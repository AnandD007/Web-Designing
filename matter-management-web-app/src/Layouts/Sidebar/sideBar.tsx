import '../../App.css';
import { Link } from "react-router-dom";


function Sidebar() {
  return (
    <div className="flex-shrink-0 p-2 sidebar w-20">
      <a className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none">
<br></br>
      </a>
      <ul className="list-unstyled ps-0">
        <li className="mb-1">
          <button className="btn btn-toggle align-items-center rounded collapsed">
          <Link to="/dashboard">Dashboard</Link>
          </button>
        </li>
        <hr/>
        <li className="mb-1">
          <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#matters-collapse" aria-expanded="false">
            Matters
          </button>
          <div className="collapse" id="matters-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><a className="link-dark rounded"><Link to="/matters/add">Add Matter</Link></a></li>
            </ul>
          </div>
        </li>
        <hr />
        <li className="mb-1">
          <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#invoices-collapse" aria-expanded="false">
            Invoices View
          </button>
          <div className="collapse" id="invoices-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><a className="link-dark rounded"><Link to="/invoices/ViewInvoicesByMatters">View All Invoices</Link></a></li>
              <li><a className="link-dark rounded"><Link to="/invoices/ViewInvoicesForMatter">View Invoices For Matter</Link></a></li>
            </ul>
          </div>
        </li>
        <hr />
        <li className="mb-1">
          <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
            Clients View
          </button>
          <div className="collapse" id="dashboard-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><a className="link-dark rounded"><Link to="/clients/ViewMattersByClients">View All Clients</Link></a></li>
              <li><a className="link-dark rounded"><Link to="/clients/ViewMattersForClient">View Matters For Client</Link></a></li>
            </ul>
          </div>
        </li>
        <hr />
        <li className="mb-1">
          <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#attorney-collapse" aria-expanded="false">
            Attorney View
          </button>
          <div className="collapse" id="attorney-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><a className="link-dark rounded"><Link to="/attorneys/ViewBillingForAttorney" className='text-weight-bold'>View Billings For Attorney</Link></a></li>
              <li><a className="link-dark rounded"><Link to="/attorneys/ViewBillingByAttorneys">View All Billings</Link></a></li>
            </ul>
          </div>
        </li>
        <hr />
      </ul>
    </div>
  );
};

export default Sidebar;