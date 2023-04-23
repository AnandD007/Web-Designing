import '../App.css';
import React from "react";
import 'react-bootstrap';

function DashboardPage() {
    return (
        <React.Fragment>
            <h2 className='text-left'>Welcome back, User!</h2>
            <br />
            <h4 className='text-left'></h4>
            <hr />
            <div className="w-60">
                <img src="/images/gradientImage-1.jpg" className='rounded dashboard-banner-img img-thumbnail' />
            </div>
            <hr />
            <div className="row">
                <div className="col container text-left">
                    <h3><i className="fa fa-address-card" aria-hidden="true"></i> Personal Details</h3>
                    <div className='list-style'>
                        <br/>
                        <li><i className="fa fa-user" aria-hidden="true"></i> <strong>Name: </strong>Prasanna Kumar</li>
                        <br/>
                        <li><i className="fa fa-birthday-cake" aria-hidden="true"></i> <strong>Date Off Birth: </strong>Prasanna</li>
                        <br/>
                        <li><i className="fa fa-map-marker" aria-hidden="true"></i> <strong> Place: </strong>Pune, Maharashtra, India</li>
                        <br/>
                        <li><i className="fa fa-pagelines" aria-hidden="true"></i> <strong>Habits: </strong>Cricket, Yoga, Football, Reading, etc.,</li>
                    </div>
                </div>
                <div className="col-md-4">
                    <img src="/images/gradientImage-2.jpg" className='rounded img-thumbnail mr-5' />
                </div>
            </div>
            <hr/>
            <div className="container">
                <h5>Profile Summary</h5>
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
            <hr/>
            <div className="row">
                <div className='col-md-3'>
                    <div className='row dashboard-cards'>
                        <img src="/images/gradientImage-3.jpg" className='img-thumbnail' />
                        <div className="container">
                            <h5>Gradient Color Art 1 - My Paintings</h5>
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
                </div>
                <div className='col-md-3'>
                    <div className='row dashboard-cards'>
                        <img src="/images/gradientImage-4.jpg" className='img-thumbnail' />
                        <div className="container">
                            <h5>Gradient Color Art 2 - My Paintings</h5>
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
                </div>
                <div className='col-md-3'>
                    <div className='row dashboard-cards'>
                        <img src="/images/gradientImage-1.jpg" className='img-thumbnail' />
                        <div className="container">
                            <h5>Gradient Color Art 3 - My Paintings</h5>
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
                </div>
                <div className='col-md-3'>
                    <div className='row dashboard-cards'>
                        <img src="/images/gradientImage-5.jpg" className='img-thumbnail' />
                        <div className="container">
                            <h5>Gradient Color Art 4 - My Paintings</h5>
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
                </div>
                <div className='col'></div>
                <div className='col'></div>
            </div>
        </React.Fragment>
    );
};

export default DashboardPage;