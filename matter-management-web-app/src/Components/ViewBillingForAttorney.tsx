import React, {useState} from "react";
import axios from 'axios';
import '../App.css';
import { Attorney } from "./MatterValidationEntities";
import { attorneyBaseURL } from "./URLs";
import { billingForAttorneyURL } from "./URLs";


const ViewBillingForAttorney = () => {

    const [attorneys,setAttorneys]=useState<Attorney[]>([]);
    const [billingForAttorney,setBillingForAttorney]=useState<number>();
    const [attorneyFullName, setAttorneyFullName] = useState<string>();

    const getAttorneys = () => {
        axios.get(attorneyBaseURL).then((response) => 
        {
            setAttorneys(response.data.data);
        })
        .catch(error => console.log(error.data.message));
    }
    const getBillingByAttorney = (attorneyId: number) => {
        axios.get(`${billingForAttorneyURL}/${attorneyId}`)
        .then((response) => 
        {
            setBillingForAttorney(response.data.data);
        })
        .catch(error => console.log(error.data.message));
    }

    React.useEffect( () => {
        getAttorneys();
    }, []);

    const handleChange = (e:any) => 
    {
        const {fullName, value} = e.target;
        attorneys.forEach(a => {
            if(a.attorneyId == value) {
                setAttorneyFullName(a.fullName);
            }  
        getBillingByAttorney(value);
        });
    };

    return (
        <div className="my-container shadow">
            <h3>Last Week's Billing for an Attorney</h3>
            <hr></hr>
            <label className="col-md-4">
                Select an Attorney:
                <select required id = "attorney-dropdown" className="input-item-details" name="attorneyId"
                        defaultValue="Select-Attorney"
                        onChange={handleChange} >
                    <option value= "Select-Attorney" disabled>Select an Attorney</option>
                    {attorneys.map((item) => { 
                    return (<option key= {item.attorneyId} value={item.attorneyId} >
                                {item.fullName}
                            </option>);
                    })}
                </select>
            </label>
            <div className="table-responsive card">
                <table className="table table-bordered table-color">
                    <thead className="table-color">
                        <tr>
                            <th scope="col">Attorney FullName</th>
                            <th scope="col">Last Week's Billing</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="view-info">{attorneyFullName}</td>
                            <td className="view-info">{billingForAttorney}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default ViewBillingForAttorney;