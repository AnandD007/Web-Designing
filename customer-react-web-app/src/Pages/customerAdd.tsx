import React, {useState, useEffect, useContext} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {AppContext} from '../App';
import {useLocation} from 'react-router-dom';
import Loader from '../components/loader';

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

const AddCustomerPage = () => {
    const navigate = useNavigate();
    const [custId, setCustId] = useState<number>(0);
    const [custFirstName, setCustFirstName] = useState<string>("");
    const [custLastName, setCustLastName] = useState<string>("");
    const [custEmailId, setCustEmailId] = useState<string>("");
    const [custPhoneNo, setCustPhoneNo] = useState<string>("");
    const [custStreetName, setCustStreetName] = useState<string>("");
    const [custLandmark, setCustLandmark] = useState<string>("");
    const [custCity, setCustCity] = useState<string>("");
    const [custState, setCustState] = useState<string>("");
    const [custCountry, setCustCountry] = useState<string>("");
    const [custZipcode, setCustZipcode] = useState<string>("");
    var [formHeading, setFormHeading] = useState<string>("Add Customer Details");
    var [submitButtonValue, setSubmitButtonValue] = useState<string>("Submit");
    const [data,setData]=useState({CustomerId:0,firstName:"",lastName:"",emailId:"",phoneNo:"",streetName:"",landmark:"",city:"",state:"",country:"",zipcode:""});
    const location = useLocation();
    const { loading } = useContext(AppContext);

    const newCustomer: Customer = {
        CustomerId: custId,
        firstName: custFirstName,
        lastName: custLastName,
        emailId: custEmailId,
        phoneNo: custPhoneNo,
        streetName: custStreetName,
        landmark: custLandmark,
        city: custCity,
        state: custState,
        country: custCountry,
        zipcode: custZipcode,
    }

    const handleFirstNameChange = (e:any) => 
    {
        setCustFirstName(e.target.value );
    };
    const handleLastNameChange = (e:any) => 
    {
        setCustLastName(e.target.value );
    };
    const handleEmailIdChange = (e:any) => 
    {
        setCustEmailId(e.target.value );
    };
    const handlePhoneNoChange = (e:any) => 
    {
        setCustPhoneNo(e.target.value );
    };
    const handleStreetNameChange = (e:any) => 
    {
        setCustStreetName(e.target.value );
    };
    const handleLandmarkChange = (e:any) => 
    {
        setCustLandmark(e.target.value );
    };
    const handleCityChange = (e:any) => 
    {
        setCustCity(e.target.value );
    };
    const handleStateChange = (e:any) => 
    {
        setCustState(e.target.value );
    };
    const handleCountryChange = (e:any) => 
    {
        setCustCountry(e.target.value );
    };
    const handleZipcodeChange = (e:any) => 
    {
        setCustZipcode(e.target.value );
    };

    const setDefaultValues = () =>
    {
        setCustId(0);
        setCustFirstName("");
        setCustLastName("");
        setCustEmailId("");
        setCustPhoneNo("");
        setCustStreetName("");
        setCustLandmark("");
        setCustCity("");
        setCustState("");
        setCustCountry("");
        setCustZipcode("");
    }

    const handleSubmit = (e:any) => 
    {
        e.preventDefault();
        const validName = new RegExp('^[a-zA-z]+([\s][a-zA-Z]+)*$');
        const validEmailId = new RegExp('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$');
        const validPhoneNo = new RegExp("^[0-9]{10}$");
        const validZipcode = new RegExp("^[0-9]{6}$");
        
        if (!validName.test(custFirstName)) 
        {
            alert("Please Enter a valid First Name");
        }
        if (!validName.test(custLastName)) 
        {
            alert("Please Enter a valid Last Name");
        }
        else if (!validEmailId.test(custEmailId)) 
        {
            alert("Please Enter a valid EmailId ID");
        }
        else if (!validPhoneNo.test(custPhoneNo)) 
        {
            alert("Please Enter a valid PhoneNo Number");
        }
        else if (!validName.test(custStreetName) && custStreetName!='') 
        {
            alert("Please Enter a valid StreetName");
        }
        else if (!validName.test(custLandmark) && custLandmark!='') 
        {
            alert("Please Enter a valid Landmark");
        }
        else if (!validName.test(custCity) && custCity!='') 
        {
            alert("Please Enter a valid City");
        }
        else if (!validName.test(custState) && custState!='') 
        {
            alert("Please Enter a valid State");
        }
        else if (!validName.test(custCountry) && custCountry!='') 
        {
            alert("Please Enter a valid Country");
        }
        else if (!validZipcode.test(custZipcode) && custZipcode!='')
        {
            alert("Please Enter a valid Zipcode");
        }
        else
        {
            if(submitButtonValue=== "Submit")
            {
                axios.post(baseURL, newCustomer)
                .then(response => 
                {
                    navigate("../customer/view");
                })
                setDefaultValues();
            }
            else
            {
                axios.put(`${baseURL}/${data.CustomerId}`, newCustomer)
                .then(response => 
                {
                    navigate("../customer/view");
                })
                setDefaultValues();
            }
        }
    }

    const handleBackButton = () => {
        navigate("../customer/view");
    }

    useEffect(()=> {
    if(location.state != null && location.state.type === "Update")
        {
            setFormHeading("Update Customer Details");
            setSubmitButtonValue("Update");
            data.CustomerId = location.state.CustomerId;
            data.firstName = location.state.firstName;
            data.lastName = location.state.lastName;
            data.emailId = location.state.emailId;
            data.phoneNo = location.state.phoneNo;
            data.streetName = location.state.streetName;
            data.landmark = location.state.landmark;
            data.city = location.state.city;
            data.state = location.state.state;
            data.country = location.state.country;
            data.zipcode = location.state.zipcode;
            
            setCustId(data.CustomerId);
            setCustFirstName(data.firstName);
            setCustLastName(data.lastName);
            setCustEmailId(data.emailId);
            setCustPhoneNo(data.phoneNo);
            setCustStreetName(data.streetName);
            setCustLandmark(data.landmark);
            setCustCity(data.city);
            setCustState(data.state);
            setCustCountry(data.country);
            setCustZipcode(data.zipcode);
        }
        else
        {
            setFormHeading("Add Customer Details");
            setSubmitButtonValue("Submit");
            data.CustomerId = 0;
            data.firstName = '';
            data.lastName = '';
            data.emailId = '';
            data.phoneNo = '';
            data.streetName = '';
            data.landmark = '';
            data.city = '';
            data.state = '';
            data.country = '';
            data.zipcode = '';
        
            setCustId(data.CustomerId);
            setCustFirstName(data.firstName);
            setCustLastName(data.lastName);
            setCustEmailId(data.emailId);
            setCustPhoneNo(data.phoneNo);
            setCustStreetName(data.streetName);
            setCustLandmark(data.landmark);
            setCustCity(data.city);
            setCustState(data.state);
            setCustCountry(data.country);
            setCustZipcode(data.zipcode);
        }
    },[location.state])
   
    return (
        <>
        <div className="my-container shadow">
            <h3>{formHeading}</h3>
            <hr></hr>
            <div>
                <form onSubmit={handleSubmit}>
                    {loading && <Loader />}
                    <div className="row g-3 input-row">
                        <label className="col-md-5">
                        First Name:
                        <input type="text" name="name" value={custFirstName}
                        placeholder="Enter First Name"
                        className="input-item-details" onChange={handleFirstNameChange} required/>
                        </label>

                        <label className="col-md-5">
                        Last Name:
                        <input type="text" name="name" value={custLastName}
                        placeholder="Enter Last Name"
                        className="input-item-details" onChange={handleLastNameChange} required/>
                        </label>
         
                        <label className="col-md-5">
                        EmailId:
                        <input type="text" name="name" value={custEmailId}
                        placeholder="Enter EmailId"
                        className="input-item-details" onChange={handleEmailIdChange} required/>
                        </label>

                        <label className="col-md-5">
                        PhoneNo:
                        <input type="text" name="name" value={custPhoneNo}
                        placeholder="Enter Phone No."
                        className="input-item-details" onChange={handlePhoneNoChange} required/>
                        </label>
                    </div>           
                    <div className="row g-3 input-row">
                        <label className="col-md-5">
                        StreetName:
                        <input type="text" name="name" value={custStreetName}
                        placeholder="Enter StreetName"
                        className="input-item-details" onChange={handleStreetNameChange} />
                        </label>

                        <label className="col-md-5">
                        Landmark:
                        <input type="text" name="name" value={custLandmark}
                        placeholder="Enter Landmark"
                        className="input-item-details" onChange={handleLandmarkChange} />
                        </label>

                        <label className="col-md-5">
                        City:
                        <input type="text" name="name" value={custCity}
                        placeholder="Enter City"
                        className="input-item-details" onChange={handleCityChange} />
                        </label>

                        <label className="col-md-5">
                        State:
                        <input type="text" name="name" value={custState}
                        placeholder="Enter State"
                        className="input-item-details" onChange={handleStateChange} />
                        </label>

                        <label className="col-md-5">
                        Country:
                        <input type="text" name="name" value={custCountry}
                        placeholder="Enter Country"
                        className="input-item-details" onChange={handleCountryChange} />
                        </label>

                    </div>    
                    <div className="row g-3 input-row">
                        <label className="col-md-5">
                        Zipcode:
                        <input type="text border-none" name="name" value={custZipcode}
                        placeholder="Enter Zipcode"
                        className="input-item-details" onChange={handleZipcodeChange} />
                        </label>
                    </div>           
                    <button type="submit" className="btn submit-btn" 
                            ><i className="fa fa-check" aria-hidden="true"></i> {submitButtonValue}</button>
                    <button className="btn btn-danger" onClick={handleBackButton}><i className="fa fa-minus-circle" aria-hidden="true"></i> Cancel</button>
                </form>
            </div>
        </div>
        </>
    );
}
export default AddCustomerPage; 