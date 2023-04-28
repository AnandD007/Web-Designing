import React, {useState} from "react";
import 'react-bootstrap';
import axios from 'axios';
import '../App.css';
import { GetAllInvoiceByMattersURL } from "./URLs";
import { InvoiceByMatter } from "./MatterValidationEntities";

const ViewInvoicesByMatters = () => {

    const [invoices, setInvoices] = useState<InvoiceByMatter[][]>([]);

    const getInvoices = () => {
        axios.get(GetAllInvoiceByMattersURL)
        .then((response) => 
        {
            setInvoices(response.data.data);
        })
        .catch(error => console.log(error.data.message));
    }

    React.useEffect( () => {
        getInvoices();
      }, []);

    return (
        <div className="my-container shadow">
            <h3>Invoices By Matters</h3>
            <div className="table-responsive card">
                {/* {loading && <Loader />} */}
                <table className="table table-bordered table-striped ">
                    <thead className="table-color">
                        <tr>
                            <th scope="row">S.No.</th>
                            <th scope="row">Invoice</th>
                            <th scope="row">Creation Date</th>
                            <th scope="row">Matter Name</th>
                            <th scope="row">Attorney</th>
                            <th scope="row">Hours Worked</th>
                            <th scope="row">Billing</th>
                        </tr>
                    </thead>
                    <tbody>
                        {invoices?.map((clientName, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <tr>
                                        <th rowSpan={invoices[index].length + 1}>{index + 1}</th>
                                        <th colSpan={6}>{invoices[index][0].matterName}</th>
                                    </tr>
                                    {invoices[index].map((invoice, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{invoice.date.toString()}</td>
                                                <td>{invoice.matterName}</td>
                                                <td>{invoice.attorneyName}</td>
                                                <td>{invoice.hoursWorked}</td>
                                                <td>{invoice.totalAmount}</td>
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
    );
}
export default ViewInvoicesByMatters;