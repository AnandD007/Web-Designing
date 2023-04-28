import React, {useState} from "react";
import axios from 'axios';
import '../App.css';
import { MatterByClient } from "./MatterValidationEntities";
import { mattersByClientsBaseURL } from "./URLs";


const ViewMattersByClients = () => {

    const [matters, setMatters] = useState<MatterByClient[][]>([]);

    const getMatters = () => {
        axios.get(mattersByClientsBaseURL)
        .then((response) => 
        {
            setMatters(response.data.data);
        })
        .catch(error => console.log(error.data.message));
    }

    React.useEffect( () => {
        getMatters();
      }, []);

    return (
        <>
        <div className="my-container shadow">
            <h3>Matters By Clients</h3>
            <div className="table-responsive card">
                <table className="table table-bordered table-striped">
                    <thead className="table-color">
                        <tr>
                        <th scope="row">Client No.</th>
                            <th scope="row">Matters</th>
                            <th scope="row">Open Date</th>
                            <th scope="row">Close Date</th>
                            <th scope="row">Area</th>
                            <th scope="row">Billing Attorney</th>
                            <th scope="row">Responsible Attorney</th>
                        </tr>
                    </thead>
                    <tbody>
                        {matters?.map((clientName, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <tr>
                                        <th rowSpan={matters[index].length + 1}>{index + 1}</th>
                                        <th colSpan={7}>{matters[index][0].clientName}</th>
                                    </tr>
                                    {matters[index].map((matter, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{matter.matterName}</td>
                                                <td>{matter.openDate}</td>
                                                <td>{matter.closeDate}</td>
                                                <td>{matter.jurisdictionArea}</td>
                                                <td>{matter.billingAttorneyName}</td>
                                                <td>{matter.responsibleAttorneyName}</td>
                                            </tr>
                                        )
                                    })}
                                </React.Fragment>
                            )
                        })}
                        </tbody>
                </table>
            </div>
        </div>
        </>   
    );
}
export default ViewMattersByClients;