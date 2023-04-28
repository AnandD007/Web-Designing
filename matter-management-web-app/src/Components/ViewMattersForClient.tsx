import React, {useState} from "react";
import axios from 'axios';
import '../App.css';
import { Client } from "./MatterValidationEntities";
import { clientBaseURL } from "./URLs";
import { MatterByClient } from "./MatterValidationEntities";
import { invoicesForMatterURL } from "./URLs";

const ViewMattersForClient = () => {

    const [clients,setClients]=useState<Client[]>([]);
    const [mattersByClient,setMattersByClient]=useState<MatterByClient[]>([]);

    const getClients = () => {
        axios.get(clientBaseURL).then((response) => 
        {
            setClients(response.data.data);
        })
        .catch(error => console.log(error.data.message));
    }
    const getMattersByClient = (clientId: number) => {
        axios.get(`${invoicesForMatterURL}/${clientId}`)
        .then((response) => 
        {
            setMattersByClient(response.data.data);
        })
        .catch(error => console.log(error.data.message));
    }

    React.useEffect( () => {
        getClients();
    }, []);

    const handleChange = (e:any) => 
    {
        const {fullName, value} = e.target;
        getMattersByClient(value);
    };
    return (
        <>
        <div className="my-container shadow">
            <h3>Matters For a Client</h3>
            <hr></hr>
            <label className="col-md-4">
                Select a Client:
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
            <div className="table-responsive card ">
                <table className="table table-bordered table-striped ">
                    <thead className="table-color">
                        <tr>
                            <th scope="col">Matter Name</th>
                            <th scope="col">Jurisdiction</th>
                            <th scope="col">Client Name</th>
                            <th scope="col">Billing Attorney</th>
                            <th scope="col">Responsible Attorney</th>
                        </tr>
                    </thead>
                    <tbody>
                    {mattersByClient.map((item: MatterByClient,index)=>{
                        return <tr key={index}>
                                <td className="view-info">{item.matterName}</td>
                                <td className="view-info">{item.jurisdictionArea}</td>
                                <td className="view-info">{item.clientName}</td>
                                <td className="view-info">{item.billingAttorneyName}</td>
                                <td className="view-info">{item.responsibleAttorneyName}</td>
                            </tr>
                    })}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}
export default ViewMattersForClient;