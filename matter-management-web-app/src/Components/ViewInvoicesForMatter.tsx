import React, {useState, useEffect, useContext} from "react";
import { useNavigate } from "react-router-dom";
import {Matter, Jurisdiction, Client, Attorney} from './MatterValidationEntities';
import { clientBaseURL,matterBaseURL,attorneyBaseURL,jurisdictionBaseURL } from './URLs';
import axios from 'axios';
// import {AppContext} from '../App';
import {useLocation} from 'react-router-dom';
// import Loader from './Loader';

const AddMatter = () => {
    const navigate = useNavigate();
    const [formHeading, setFormHeading] = useState<string>("");
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
        const {matterName, value} = e.target;
        setNewMatter({...newMatter, [matterName]: value });
    };
    const handleRadioChange = (e:any) => 
    {
        const {matterName, value} = e.target;
        if(value === "Active")
        {
            setNewMatter({...newMatter, [matterName]: 1 });
        }
        else if(value === "Inactive")
        {
            setNewMatter({...newMatter, [matterName]: 0 });
        }
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
        const validZipcode = new RegExp("^[0-9]{6}$");

        // if (!validName.test(newMatter.title)) 
        // {
        //     alert("Please enter a valid Title");
        // }
        if(newMatter.jurisdictionId == 0)
        {
            alert("Please select a Jurisdiction Area");
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
        else if(newMatter.openDate == null)
        {
            alert("Please select open date");
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
                        // navigate("../Matters/ViewAllMatters");
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
                // axios.put(`${baseURL}/${data.id}`, newMatter)
                // .then(response => 
                // {
                //     navigate("../Matters/ViewAllMatters");
                // })
                setDefaultValues();
            }
        }
    }

    const handleCancelButton = () => {
        navigate("../Matters/ViewAllMatters");
    }

    useEffect(()=> {
    if(location.state != null && location.state.type === "Update")
        {
            setFormHeading("Update Matter Details");
            setSubmitButtonValue("Update");
            // data.id = location.state.id;
            // data.name = location.state.name;
            // data.email = location.state.email;
            // data.phone = location.state.phone;
            // data.street = location.state.street;
            // data.town = location.state.town;
            // data.city = location.state.city;
            // data.zipcode = location.state.zipcode;
        
            // setCustName(data.name);
            // setCustEmail(data.email);
            // setCustPhone(data.phone);
            // setCustStreet(data.street);
            // setCustTown(data.town);
            // setCustCity(data.city);
            // setCustZipcode(data.zipcode);
        }
        else
        {
            setFormHeading("Add Matter Details");
            setSubmitButtonValue("Submit");
            // data.id = 0;
            // data.name = '';
            // data.email = '';
            // data.phone = '';
            // data.street = '';
            // data.town = '';
            // data.city = '';
            // data.zipcode = '';
        
            // setCustName(data.name);
            // setCustEmail(data.email);
            // setCustPhone(data.phone);
            // setCustStreet(data.street);
            // setCustTown(data.town);
            // setCustCity(data.city);
            // setCustZipcode(data.zipcode);
        }
    },[location.state])
   
    return (
        <>
        <div className="my-container shadow">
            <h3>{formHeading}</h3>
            <hr></hr>
            <div>
                <form onSubmit={handleSubmit}>
                    {/* {loading && <Loader />} */}
                    <div className="row g-3 input-row">
                        <label className="col-md-4">
                        Title:
                        <input type="text" name="title" value={newMatter.fullName}
                        placeholder="Enter Title"
                        className="input-item-details" onChange={handleChange} required/>
                        </label>
         
                        <label className="col-md-4">
                        Jurisdiction:
                        <select required id = "jurisdiction-dropdown" className="input-item-details" name="jurisdictionId"
                                defaultValue="Select-Area" onBlur={() => getAttorneyByJurisdiction(newMatter.jurisdictionId)}
                                onChange={handleChange} >
                            <option value= "Select-Area" disabled>Select Jurisdiction Area</option>
                            {jurisdictions.map((item) => { 
                            return (<option key= {item.jurisdictionId} value={item.jurisdictionId} >
                                        {item.area}
                                    </option>);
                            })}
                        </select>
                        </label>

                        <label className="col-md-4">
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
                        <label className="col-md-4">
                            Description:
                            <input type="textarea" name="description" value={newMatter.openDate}
                            placeholder="Enter Description"
                            className="input-item-details" onChange={handleChange} required/>
                        </label>
                    </div>         
                    <div className="row g-3 input-row">
                        <label className="col-md-4">
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

                        <label className="col-md-4">
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

                        <label className="col-md-4">
                        Dates:
                            <section className="btn-group my-btn-group">
                                <input type="date" placeholder='Select OpenDate'/>
                                <label className="btn btn-outline-secondary" htmlFor="radio1">Open Date</label>
                                
                                <input type="date" placeholder='Select OpenDate'/>
                                <label className="btn btn-outline-secondary" htmlFor="radio1">Open Date</label>
                            </section>
                        </label>
                    </div>    
                   
                    <button type="submit" className="btn submit-btn">{submitButtonValue}</button>
                    <button className="btn btn-danger" onClick={handleCancelButton}>Cancel</button>
                </form>
            </div>
        </div>
        </>
    );
}
export default AddMatter;