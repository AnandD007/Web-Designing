import { Modal } from "react-bootstrap";
import ViewModal from './CustomerModal';
import Loader from './loader';
import '../App.css';
import React, {useState, useContext} from "react";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import CustomerDeleteConfirmation from './DeleteCustomer';
import custId from '../Pages/customerAdd';
import {AppContext} from '../App';

const baseURL = "https://localhost:7267/api/Customer";


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

    const handleUpdateClick = (sendCustomerId:any, sendFirstName:any, sendLastName:any, sendEmailId:any,sendPhoneNo:any,
                            sendStreetName:any,sendLandmark:any,sendCity:any, sendState:any, sendCountry:any, sendZipcode:any) => 
    { 
        navigate('../Customer/add',
                {state:
                    {
                        type: "Update",
                        CustomerId: sendCustomerId, firstName: sendFirstName, lastName: sendLastName, emailId: sendEmailId, phoneNo: sendPhoneNo,
                        streetName: sendStreetName, landmark: sendLandmark, city: sendCity, state: sendState, country: sendCountry, zipcode: sendZipcode
                    }
                });
    }

    const handleDeleteClick = (CustomerId:any) => {
        setDeletionCustomerId(CustomerId);
        invokeDeleteModal(true);
        axios.delete(`${baseURL}/${CustomerId}`)
        .then(() => 
        {
            getCustomers();
        })
        .catch(err => console.log(err))
    }
    return (
        <div className="my-container shadow">
            <h3>Customer List</h3>
            <div className="table-responsive card">
                {loading && <Loader />}
                <table className="table table-bordered table-striped ">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">S.No.</th>
                            <th scope="col">Full Name</th>
                            <th scope="col">EmailId</th>
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
                        const{CustomerId, firstName, lastName, emailId, phoneNo, streetName, landmark, city, state, country, zipcode} = e;
                    return <tr key={index}>
                            <td onClick= {() => handleTableRowClick(CustomerId)} className="view-info">{index+1}</td>
                            <td onClick= {() => handleTableRowClick(CustomerId)} className="view-info">{firstName.trim()+" "+lastName.trim()}</td>
                            <td onClick= {() => handleTableRowClick(CustomerId)} className="view-info">{emailId}</td>
                            <td onClick= {() => handleTableRowClick(CustomerId)} className="view-info">{phoneNo}</td>
                            <td onClick= {() => handleTableRowClick(CustomerId)} className="view-info">{city}</td>
                            <td onClick= {() => handleTableRowClick(CustomerId)} className="view-info">{state}</td>
                            <td onClick= {() => handleTableRowClick(CustomerId)} className="view-info">{country}</td>
                            <td>
                                <button 
                                    type="button" 
                                    className="btn update-btn btn-warning"
                                    onClick={() => handleUpdateClick(CustomerId,firstName,lastName,emailId,phoneNo,streetName,landmark,city,state, country, zipcode)}>
                                    <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                </button>
                            </td>
                            <td>
                                <button 
                                    type="button" 
                                    className="btn btn-danger"
                                    onClick = {() => handleDeleteClick(e.CustomerId)} 
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
