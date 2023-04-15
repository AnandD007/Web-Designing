import '../App.css';
import React from "react";
import 'react-bootstrap';

function DashboardPage() {
    return (
        <React.Fragment>
            <h2>Welcome back, User!</h2>
            <br />
            <h4>Latest Products</h4>
            <hr />
            <div className="row container">
                <div className="col-md-5 ">
                    <img src="/images/gradientImage-1.jpg" className='rounded w-100 img-thumbnail' />
                </div>
                <div className="col-md-5 container">
                    <h5>Gradient Art Product - Singapore</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset
                        sheets containing Lorem Ipsum passages, and more
                        recently with desktop publishing software like Aldus
                        PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
            <hr />
            <div className="row container">
                <div className="col-md-5 container">
                    <h5>Traditional Art Product - India</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset
                        sheets containing Lorem Ipsum passages, and more
                        recently with desktop publishing software like Aldus
                        PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className="col-md-5">
                    <img src="/images/gradientImage-2.jpg" className='rounded w-100 img-thumbnail' />
                </div>
            </div>
        </React.Fragment>
    );
};

export default DashboardPage;