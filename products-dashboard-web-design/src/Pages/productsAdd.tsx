import "../App.css";
import { Form, Button } from "react-bootstrap";
import { AppContext } from "../App";
import { Stepper } from "react-form-stepper";
import React, { useEffect, useRef, useState } from "react";
import dynamic from 'next/dynamic';

const StepperComponent = dynamic(() => import('./productsAdd'), {
    ssr: false,
});

function ProductAddPage() {
    const { handleInputChange, handleStep1Submit, handleStep2Submit, formRef, setCurrentStep, handlePriceChange, handleQuantityChange, currentProduct, currentStep } = React.useContext(AppContext);
    const productNameRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (productNameRef.current) {
            productNameRef.current.focus();
        }
    }, []);


    return (
        <div>
            <h2>Add New Products</h2>
            <hr />
            <div>
                {currentStep === 1 && <>
                    <Form className="form-control" onSubmit={handleStep1Submit} ref={formRef}>
                        <Stepper steps={[{ label: 'Step 1' }, { label: 'Step 2' }]}
                            activeStep={1}
                        />
                        <h5 className="div-title" id="exampledivLabel">Product Details</h5>
                        <Form.Group>
                            <Form.Label>Product Name<span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={currentProduct.name}
                                className="form-field"
                                onChange={handleInputChange}
                                required
                            />
                            <p className="text-danger">The name field should be below maximum 30 characters</p>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Product Description<span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                as="textarea"
                                name="description"
                                className="form-field"
                                value={currentProduct.description}
                                onChange={handleInputChange}
                                required
                            />
                            <p className="text-danger">The description field should contain atleast 100 characters</p>
                        </Form.Group>
                        <div className="div-footer">
                            {/* <Button variant="secondary" onClick={handleClosediv} type="reset">
                                Cancel
                            </Button> */}
                            <Button variant="primary" type="submit" className="btn w-25" disabled={currentProduct.name.length >= 30 || currentProduct.description.length <= 100} >
                                Next
                            </Button>
                        </div>
                    </Form> </>}
                {currentStep === 2 && <>
                    <Form className="form-control" onSubmit={handleStep2Submit}>
                        <Stepper steps={[{ label: 'Step 1' }, { label: 'Step 2' }]}
                            activeStep={currentStep}
                        />
                        <h5 className="div-title" id="exampledivLabel">Product Details</h5>
                        <Form.Group >
                            <Form.Label>Quantity<span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="number"
                                name="quantity"
                                className="form-field"
                                value={currentProduct.quantity}
                                onChange={handleQuantityChange}
                                min={1}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Price<span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="number"
                                name="price"
                                className="form-field"
                                value={currentProduct.price}
                                onChange={handlePriceChange}
                                min={0}
                                step="0.01"
                                required
                            />
                        </Form.Group>
                        <div>
                            <Button variant="secondary" className="btn w-25 mt-4 mb-3" onClick={() => setCurrentStep(1)}>
                                Back
                            </Button>
                            <div>
                                <Button variant="primary" className="btn w-25 pl-2" type="submit" disabled={currentProduct.price == 0 || currentProduct.quantity == 0} >
                                    Add Product
                                </Button>
                            </div>
                        </div>
                    </Form>
                </>}
            </div>
        </div>
    );
};

export default ProductAddPage;