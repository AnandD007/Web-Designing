import React, { useState } from 'react';
import {Modal} from 'react-bootstrap';
import axios from 'axios';
import invokeDeleteModal from './customerList';

const baseURL = "https://localhost:7267/api/Customer";

const CustomerDeleteConfirmation: React.FC<any> = ({deletionCustomerId}) => {

    const [isShow, invokeModal] = useState<boolean>();
    const closeModal = () => invokeModal(false);

    const handleDeleteOnClick = () => {
        axios.delete(`${baseURL}/${deletionCustomerId}`)
            .then(() => 
            {
                console.log("Deleted");
            });
    }

    return (
        <div>
            <Modal.Header closeButton onClick={closeModal} onSubmit={closeModal}>
                <Modal.Title className="text-align-center">Delete Data?</Modal.Title>
            </Modal.Header>
            <Modal.Body className='d-flex justify-content-center'>
                <div className="text-center font-weight-bold">Are You Sure?</div>
                <div>
                    <br/><br/>
                    <button 
                        type="button" 
                        className="btn btn-danger"
                        onClick={handleDeleteOnClick}>
                        Delete
                    </button>
                </div>
            </Modal.Body>
        </div>
    )
}
export default CustomerDeleteConfirmation;