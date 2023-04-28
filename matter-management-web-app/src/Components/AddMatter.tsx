import React, {useState, useEffect, useContext} from "react";
import { useNavigate } from "react-router-dom";
import {Matter, Jurisdiction, Client, Attorney} from './MatterValidationEntities';
import axios from 'axios';
import {useLocation} from 'react-router-dom';
import { attorneyBaseURL,jurisdictionBaseURL,clientBaseURL,matterBaseURL } from "./URLs";

const AddMatters = () => {
    const navigate = useNavigate();
    const [heading, setHeading] = useState<string>("");
    const [submitButtonValue, setSubmitButtonValue] = useState<string>("");
    const [jurisdictions,setJurisdictions]=useState<Jurisdiction[]>([]);
    const [clients,setClients]=useState<Client[]>([]);
    const [attorneysByJurisdiction,setAttorneysByJurisdiction]=useState<Attorney[]>([]);
    const [attorneys,setAttorneys]=useState<Attorney[]>([]);
    const [newMatter,setNewMatter]=useState<Matter>
        ({matterId:0,fullName:"",openDate:"",closeDate:"",jurisdictionId:0,clientId:0,billingAttorneyId:0,responsibleAttorneyId:0});

    React.useEffect( () => {
        getJurisdictions();
        getClients();
        getAttorneys();
      }, []);

    const location = useLocation();
    // const { loading } = useContext(AppContext);

    const getJurisdictions = () => {
        axios.get(jurisdictionBaseURL).then((response) => 
        {
            setJurisdictions(response.data.data);
        })
        .catch(error => console.log(error.data.message));
    }
    const getClients = () => {
        axios.get(clientBaseURL).then((response) => 
        {
            setClients(response.data.data);
        });
    }
    const getAttorneyByJurisdiction = (jurisdictionId: number) => {
        axios.get(`${attorneyBaseURL}/GetAttorneysByJurisdiction/${jurisdictionId}`).then((response) => 
        {
            setAttorneysByJurisdiction(response.data.data);
        })
        .catch(error => console.log(error.data.message));
    }
    const getAttorneys = () => {
        axios.get(`${attorneyBaseURL}`).then((response) => 
        {
            setAttorneys(response.data.data);
        })
        .catch(error => console.log(error.data.message));
    }
    
    const handleChange = (e:any) => 
    {
        const {fullName, value} = e.target;
        setNewMatter({...newMatter, [fullName]: value });
    };

    const show = () => {
        console.log(newMatter);
    }

    const setDefaultValues = () =>
    {
        setNewMatter({matterId:0,fullName:"",openDate:"",closeDate:"",jurisdictionId:0,clientId:0,billingAttorneyId:0,responsibleAttorneyId:0});
    }

    const handleSubmit = (e:any) => 
    {
        e.preventDefault();
        const validName = new RegExp('^[a-zA-z]+([\s][a-zA-Z]+)*$');
        const validEmail = new RegExp('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$');
        const validPhone = new RegExp("^[0-9]{10}$");

        if(newMatter.jurisdictionId == 0)
        {
            alert("Please select a Jurisdiction");
        }
        else if(newMatter.clientId == 0)
        {
            alert("Please select a Client");
        }
        else if(newMatter.billingAttorneyId == 0)
        {
            alert("Please select a Billing Attorney");
        }
        else if(newMatter.responsibleAttorneyId == 0)
        {
            alert("Please select a Responsible Attorney");
        }
        else 
        {
            show();
            if(submitButtonValue=== "Submit")
            {
                try
                {
                    axios.post(matterBaseURL, newMatter)
                    .then((response) => 
                    {
                        console.log(response.data);
                      //  navigate("../matters/ViewAllMatters");
                    });
                }
                catch (error:any)
                {
                    alert(error.response.data.message);
                }
                
                setDefaultValues();
            }
            else
            {
                setDefaultValues();
            }
        }
    }

    const handleCancelButton = () => {
     //   navigate("../matters/ViewAllMatters");
    }

    useEffect(()=> {
    if(location.state != null && location.state.type === "Update")
        {
            setHeading("Update Matter Details");
            setSubmitButtonValue("Update");
        }
        else
        {
            setHeading("Add Matter Details");
            setSubmitButtonValue("Submit");
        }
    },[location.state])
   
    return (
        <>
        <div className="my-container shadow form-control">
            <h3>{heading}</h3>
            <hr></hr>
            <div>
                <form onSubmit={handleSubmit} className="align-content-center">
                    {/* {loading && <Loader />} */}
                    <div className="row g-4 input-row">
                        <label className="col-md-6">
                        Title:
                        <input type="text" name="fullName" value={newMatter.fullName}
                        placeholder="Enter Matter Name"
                        className="input-item-details" onChange={handleChange} required/>
                        </label>
         
                        {/* <label className="col-md-4">
                        Jurisdiction:
                        <select required id = "jurisdiction-dropdown" className="input-item-details" name="jurisdictionId"
                                defaultValue="Select-Area" onBlur={() => getAttorneyByJurisdiction(newMatter.jurisdictionId)}
                                onChange={handleChange} >
                            <option value= "Select-Area">Select Jurisdiction Area</option>
                            {jurisdictions.map((item) => { 
                            return (<option key= {item.jurisdictionId} value={item.jurisdictionId} >
                                        {item.area}
                                    </option>);
                            })}
                        </select>
                        </label> */}

                        <label className="col-md-6">
                        Client:
                        <select required id = "client-dropdown" className="input-item-details" name="clientId"
                                defaultValue="Select-Client"
                                onChange={handleChange} >
                            <option value= "Select-Client" disabled>Select a Client</option>
                            {clients.map((item) => { 
                            return (<option key= {item.clientId} value={item.clientId} >
                                        {item.fullName}
                                    </option>);
                            })}
                        </select>
                        </label>
                    </div>  
                    <div className="row g-3 input-row">
                    </div>         
                    <div className="row g-3 input-row">
                        <label className="col-md-6">
                        Billing Attorney:
                        <select required id = "billing-attorney" className="input-item-details" name="billingAttorneyId"
                                defaultValue="Select-Billing-Attorney"
                                onChange={handleChange} >
                            <option value= "Select-Billing-Attorney" disabled>Select an Attorney</option>
                            {attorneysByJurisdiction.map((item) => { 
                            return (<option key= {item.attorneyId} value={item.attorneyId} >
                                        {item.fullName}
                                    </option>);
                            })}
                        </select>
                        </label>

                        <label className="col-md-6">
                        Responsible Attorney:
                        <select required id = "responsible-attorney" className="input-item-details" name="responsibleAttorneyId"
                                defaultValue="Select-Responsible-Attorney"
                                onChange={handleChange} >
                            <option value= "Select-Responsible-Attorney" disabled>Select an Attorney</option>
                            {attorneys.map((item) => { 
                            return (<option key= {item.attorneyId} value={item.attorneyId} >
                                        {item.fullName}
                                    </option>);
                            })}
                        </select>
                        </label>
                        <label className="col-md-6">
                            Open Date:
                            <input className="input-item-details border-none"
       min="2023-01-01" max="2023-12-31" type="date" name="openDate" onChange={handleChange}></input>
                        </label>
                    </div>    
                   
                    <button type="submit" className="btn submit-btn"><i className="fa fa-check" aria-hidden="true"></i> {submitButtonValue}</button>
                    <button className="btn btn-danger" onClick={handleCancelButton}><i className="fa fa-minus-circle" aria-hidden="true"></i> Cancel</button>
                </form>
            </div>
        </div>
        </>
    );
}
export default AddMatters;