import React, { useState } from 'react';
import { Button, Form, Modal, Table } from 'react-bootstrap';
import './App.css';
import { Stepper } from 'react-form-stepper';
import Search from './components/search';
import Sort from './components/sort';

interface Product {
    id: number;
    name: string;
    description: string;
    quantity: number;
    price: number;
}


const ProductsList: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [sortedBy, setSortedBy] = useState<string>();

    const [currentProduct, setCurrentProduct] = useState<Product>({
        id: 0,
        name: '',
        description: '',
        quantity: 0,
        price: 0,
    });
    const [products, setProducts] = useState<Product[]>([]);

    const handleCloseModal = () => setShowModal(false);

    const handleShowModal = () => {
        setCurrentProduct({ id: 0, name: '', description: '', quantity: 0, price: 0 });
        setCurrentStep(1);
        setShowModal(true);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setCurrentProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
    };

    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setCurrentProduct((prevProduct) => ({ ...prevProduct, quantity: parseInt(value) }));
    };


    const [search, setSearch] = useState('');
    const filteredItems = {
        list: products.filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
        ),
    };

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    const handleSort = (sortBy: string) => {
        let sortedList: Product[] = [];

        if (sortBy === 'nameAsc') {
            sortedList = [...products].sort((a, b) => a.name.localeCompare(b.name));
        }
        else if (sortBy === 'nameDesc') {
            sortedList = [...products].sort((a, b) => b.name.localeCompare(a.name));
        }
        else if (sortBy === 'priceAsc') {
            sortedList = [...products].sort((a, b) => a.price - b.price);
        }
        else if (sortBy === 'priceDesc') {
            sortedList = [...products].sort((a, b) => b.price - a.price);
        }
        setProducts(sortedList);
        setSortedBy(sortBy);
    };

    const handleDeleteProduct = (id: number) => {
        const updatedList = products.filter((Product) => Product.id !== id);
        setProducts(updatedList);
    };

    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setCurrentProduct((prevProduct) => ({ ...prevProduct, price: parseFloat(value) }));
    };
    const handleStep1Submit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setCurrentStep(2);
    };

    const handleStep2Submit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newProduct = { ...currentProduct, id: products.length + 1 };
        setProducts((prevProducts) => [...prevProducts, newProduct]);
        setShowModal(false);
    };
    return (
        <>
            <div className="products-header header-color">
                <h1>Product List</h1>
                <div className="row col-md-12 justify-content-center">
                    <Sort
                        sortedBy={sortedBy!}
                        handleSort={handleSort}
                    />
                    <div className="row col-md-6 ml-5">
                        <div className='mt-4 col-md-5'>
                            <Search
                                search={search}
                                handleSearch={handleSearch}
                            />
                            <datalist id="items-list">
                                {products.map((item) => (
                                    <div key={item.id}>
                                        <option value={item.name}></option>
                                    </div>
                                ))}
                            </datalist>

                        </div>
                        {/* <button className="btn mt-4 col-sm-3 rounded bg-primary search-btn float-right" onClick={handleSearch}>Search</button> */}
                        <Button className="btn mt-4 col-sm-3 ml-5 rounded bg-primary float-right" variant="primary" onClick={handleShowModal}>
                            Add Product
                        </Button>
                    </div>
                </div>
                <hr />
            </div>
            <Table striped bordered hover className="header-color">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.quantity}</td>
                            <td>{product.price.toFixed(2)}</td>
                            <td><button
                                className="btn btn-danger"
                                onClick={() => handleDeleteProduct(product.id)}
                            >
                                Delete Item
                            </button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Modal show={showModal} onHide={handleCloseModal}>
                {currentStep === 1 ? (
                    <Form className="form-control" onSubmit={handleStep1Submit}>
                        <Stepper steps={[{ label: 'Step 1' }, { label: 'Step 2' }]}
                            activeStep={1}
                        />

                        <h5 className="modal-title" id="exampleModalLabel">Product Details</h5>
                        <Form.Group>
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={currentProduct.name}
                                className="form-field"
                                onChange={handleInputChange}
                                required
                            />

                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Product Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="description"
                                className="form-field"
                                value={currentProduct.description}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <div className="modal-footer">
                            <Button variant="secondary" onClick={handleCloseModal}>
                                Cancel
                            </Button>
                            <Button variant="primary" type="submit"  disabled = {currentProduct.name.length >= 30 || currentProduct.description.length <= 100 } >
                                Next
                            </Button>
                        </div>
                    </Form>
                ) : (
                    <Form className="form-control" onSubmit={handleStep2Submit}>
                        <Stepper steps={[{ label: 'Step 1' }, { label: 'Step 2' }]}
                            activeStep={2}
                        />

                        <h5 className="modal-title" id="exampleModalLabel">Product Details</h5>
                        <Form.Group>
                            <Form.Label>Quantity</Form.Label>
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
                            <Form.Label>Price</Form.Label>
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
                        <div className="modal-footer">
                            <Button variant="secondary" onClick={() => setCurrentStep(1)}>
                                Back
                            </Button>
                            <div>
                                <Button variant="primary" type="submit" disabled = {currentProduct.price == 0 || currentProduct.quantity == 0} >
                                    Add Product
                                </Button>
                            </div>
                        </div>
                    </Form>
                )}
            </Modal>
        </>
    )
};
export default ProductsList;
