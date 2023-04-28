import React, { useState } from "react";
import axios from 'axios';
import '../App.css';
import { billingByAttorneysBaseURL } from "./URLs"

interface ViewBillingByAttorneys {
    id: number,
    attorneyName: string,
    billing: number,
}

const ViewBillingByAttorneys = () => {

    const [billingByAttorneys, setBillingByAttorneys] = useState<ViewBillingByAttorneys[]>([]);

    const getBillingByAttorneys = () => {
        axios.get(`${billingByAttorneysBaseURL}`)
            .then((response) => {
                debugger
                setBillingByAttorneys(response.data.data);
            })
            .catch(error => console.log(error.data.message));
        }

    React.useEffect(() => {
        getBillingByAttorneys();
    }, []);

    return (
            <div className="my-container shadow">
                <h3>Last Week's Billing by Attorneys</h3>
                <hr></hr>
                <div className="table-responsive card">
                    <table className="table table-bordered table-striped">
                        <thead className="table-color">
                            <tr>
                                <th scope="col">Attorney FullName</th>
                                <th scope="col">Pervious Week Billing</th>
                            </tr>
                        </thead>
                        <tbody>
                        {billingByAttorneys.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.attorneyName}</td>
                                    <td>{item.billing}</td> 
                                </tr>
                            );
                        })}
                    </tbody>
                    </table>
                </div>
            </div>
    )
}
export default ViewBillingByAttorneys;