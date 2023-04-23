import React, { useState, useContext } from 'react';
import {Modal} from 'react-bootstrap';
import axios from 'axios';
import '../App.css';
import Loader from './loader';
import ViewAllCustomers from './customerList';
import {AppContext} from '../App';

interface Customer {
    CustomerId: number,
    firstName: string,
    lastName: string,
    emailId: string,
    phoneNo: string,
    streetName: string,
    landmark: string,
    city: string,
    state:string,
    country:string,
    zipcode: string,
}
const baseURL = "https://localhost:7267/api/Customer";

const ViewModal: React.FC<any> = ({getCustomerId}) => {

  const [customer, setCustomer] = useState<Customer>();
  const [isShow, invokeModal] = useState<boolean>();
  const closeModal = () => invokeModal(false);
  const showModal = () => invokeModal(true);
  const { loading } = useContext(AppContext);

  React.useEffect( () => {
    axios.get(`${baseURL}/${getCustomerId}`).then((response) => 
    {
        setCustomer(response.data.data);
    });
  }, [getCustomerId]);

  return (
    <div>
      <Modal.Header closeButton onClick={closeModal}>
        <Modal.Title>Customer Details</Modal.Title>
        {loading && <Loader />}
      </Modal.Header>
      <Modal.Body>
        <div>
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="table-dark">
                <tr>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                </tr>
            </thead>
            <tbody>
                <tr key={customer?.CustomerId}>
                  <td>{customer?.firstName}</td>
                  <td>{customer?.lastName}</td>
                </tr>
            </tbody>
          </table>
        </div>
        <div className="table-responsive">
          <table className="table table-bordered table-striped ">
            <thead className="table-dark">
              <tr>
                <th scope="col">EmailId</th>
                <th scope="col">PhoneNo</th>
              </tr>
            </thead>
            <tbody>
                <tr key={customer?.CustomerId}>
                  <td>{customer?.emailId}</td>
                  <td>{customer?.phoneNo}</td>
                </tr>
            </tbody>
          </table>
        </div>
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="table-dark">
              <tr>
                <th scope="col">StreetName</th>
                <th scope="col">landmark</th>
              </tr>
            </thead>
            <tbody>
                <tr key={customer?.CustomerId}>
                  <td>{customer?.streetName}</td>
                  <td>{customer?.landmark}</td>
                </tr>
            </tbody>
          </table>
        </div>
        <div className="table-responsive">
          <table className="table table-bordered table-striped ">
            <thead className="table-dark">
              <tr>
                <th scope="col">City</th>
                <th scope="col">State</th>
                <th scope="col">Country</th>
                <th scope="col">Zipcode</th>
              </tr>
            </thead>
            <tbody>
                <tr key={customer?.CustomerId}>
                  <td>{customer?.city}</td>
                  <td>{customer?.state}</td>
                  <td>{customer?.country}</td>
                  <td>{customer?.zipcode}</td>
                </tr>
            </tbody>
          </table>
        </div>
        </div>
      </Modal.Body>
      <Modal.Footer>            

      </Modal.Footer>
    </div>
  )
}
export default ViewModal;