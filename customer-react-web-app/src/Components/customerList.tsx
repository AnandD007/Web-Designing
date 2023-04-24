import { Modal } from "react-bootstrap";
import ViewModal from './customerModal';
import Loader from './loader';
import '../App.css';
import React, {useState, useContext} from "react";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import CustomerDeleteConfirmation from './deleteCustomer';
import {Customer} from './customer';
import {AppContext} from '../App';

const baseURL = "https://localhost:7267/api/Customer";

const ViewAllCustomers: React.FC = () => {

    const [customers, setCustomers] = useState<Customer[]>([]);
    const [isView, invokeViewModal] = useState(false);
    const [isShow, invokeDeleteModal] = useState(false);
    const [getCustomerId,setGetCustomerId] = useState<number>(0);
    const [deletionCustomerId, setDeletionCustomerId] = useState<number>(0);
    const { loading } = useContext(AppContext);
    const navigate = useNavigate();
    
    const getCustomers = () => {
        axios.get(baseURL).then((response) => 
        {
            setCustomers(response.data.data);
            console.log(response.data.data);
        });
    }

    React.useEffect( () => {
        getCustomers();
      }, []);
    
    const handleTableRowClick = (custId:number) => 
    {
        setGetCustomerId(custId);
        invokeViewModal(true);
    }

    const handleUpdateClick = (sendCustomerId:number, sendFirstName:string, sendLastName:string, sendEmailId:string,sendPhoneNo:string,
                            sendStreetName:string,sendLandmark:string,sendCity:string, sendState:string, sendCountry:string, sendZipcode:string) => 
    { 
        navigate('../Customer/add',
                {state:
                    {
                        type: "Update",
                        customerId: sendCustomerId, firstName: sendFirstName, lastName: sendLastName, emailId: sendEmailId, phoneNo: sendPhoneNo,
                        streetName: sendStreetName, landmark: sendLandmark, city: sendCity, state: sendState, country: sendCountry, zipcode: sendZipcode
                    }
                });
    }

    const handleDeleteClick = (CustomerId: number) => {
        setDeletionCustomerId(CustomerId);
        invokeDeleteModal(true);
        getCustomers();
    }
    
    return (
        <div className="my-container shadow">
            <h3>Customer List</h3>
            <div className="table-responsive card">
                {loading && <Loader />}
                <table className="table table-bordered table-striped ">
                    <thead className="table-color">
                        <tr>
                            <th scope="col">Customer Id</th>
                            <th scope="col">Full Name</th>
                            <th scope="col">Email Id</th>
                            <th scope="col">PhoneNo</th>
                            <th scope="col">City</th>
                            <th scope="col">State</th>
                            <th scope="col">Country</th>
                            <th scope="col">Update</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                 <tbody>
                    {customers.map((e,index)=>{
                        const{customerId, firstName, lastName, emailId, phoneNo, streetName, landmark, city, state, country, zipcode} = e;
                    return <tr key={index}>
                            <td onClick= {() => handleTableRowClick(e.customerId)} className="view-info">{e.customerId}</td>
                            <td onClick= {() => handleTableRowClick(e.customerId)} className="view-info">{e.firstName.trim()+" "+e.lastName.trim()}</td>
                            <td onClick= {() => handleTableRowClick(e.customerId)} className="view-info">{e.emailId}</td>
                            <td onClick= {() => handleTableRowClick(e.customerId)} className="view-info">{e.phoneNo}</td>
                            <td onClick= {() => handleTableRowClick(e.customerId)} className="view-info">{e.city}</td>
                            <td onClick= {() => handleTableRowClick(e.customerId)} className="view-info">{e.state}</td>
                            <td onClick= {() => handleTableRowClick(e.customerId)} className="view-info">{e.country}</td>
                            <td>
                                <button 
                                    type="button" 
                                    className="btn update-btn btn-warning"
                                    onClick={() => handleUpdateClick(customerId,firstName,lastName,emailId,phoneNo,streetName,landmark,city,state, country, zipcode)}>
                                    <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                </button>
                            </td>
                            <td>
                                <button 
                                    type="button" 
                                    className="btn btn-danger"
                                    onClick = {() => handleDeleteClick(customerId)} 
                                    disabled = {!((streetName === null || streetName.trim() === "") && 
                                    (landmark === null || landmark.trim() === "") &&
                                    (city === null || city.trim() === "") && 
                                    (zipcode === null || zipcode.trim() === ""))}
                                    ><i className="fa fa-trash-o" aria-hidden="true"></i>
                                </button>
                            </td>
                            </tr>
                        })}
                 </tbody>
                </table>
                <div>
                <p className="text-danger float-right mr-2">Please update empty all location fields data to enable the delete option</p>
                </div>
            </div>
            <div>
                <Modal show={isView} onHide={() => invokeViewModal(false)} contentClassName="modal-container">
                    <ViewModal getCustomerId={getCustomerId} /> 
                </Modal>
                
                <Modal show={isShow} onHide={() => invokeDeleteModal(false)} contentClassName="modal-container">
                    <CustomerDeleteConfirmation deletionCustomerId = {deletionCustomerId} /> 
                </Modal>
            </div>
        </div>
    );
}
export default ViewAllCustomers;
