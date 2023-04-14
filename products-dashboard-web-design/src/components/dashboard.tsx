import '../App.css';
import React from "react";
import 'react-bootstrap';

const DashboardPage = () => {
    return (
        <React.Fragment>
            <h1>Welcome back, User!</h1>
            <p>Dashboard</p>
            <div className="row">
                <h4>Latest Products</h4>
                <hr />
                <div className="float-left">
                    <img src="" width="400px" height="350px" className='rounded float-left' />
                </div>
                <div className="float-right">
                    <p>Lorem Ipsum is simply dummy text of the printing and
                        <br />typesetting industry. Lorem Ipsum has been the industry's standard
                        <br />dummy text ever since the 1500s, when an unknown printer took a
                        <br />galley of type and scrambled it to make a type specimen book.
                        <br />It has survived not only five centuries, but also the leap
                        <br />into electronic typesetting, remaining essentially unchanged.
                        <br />It was popularised in the 1960s with the release of
                        <br />Letraset sheets containing Lorem Ipsum passages, and more
                        <br />recently with desktop publishing software like Aldus
                        <br />PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="float-left">
                    <p>Lorem Ipsum is simply dummy text of the printing and
                        <br />typesetting industry. Lorem Ipsum has been the industry's standard
                        <br />dummy text ever since the 1500s, when an unknown printer took a
                        <br />galley of type and scrambled it to make a type specimen book.
                        <br />It has survived not only five centuries, but also the leap
                        <br />into electronic typesetting, remaining essentially unchanged.
                        <br />It was popularised in the 1960s with the release of
                        <br />Letraset sheets containing Lorem Ipsum passages, and more
                        <br />recently with desktop publishing software like Aldus
                        <br />PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className="float-right">
                    <img src="" width="400px" height="350px" className='rounded float-right' />
                </div>
            </div>
        </React.Fragment>
    );
};

export default DashboardPage;