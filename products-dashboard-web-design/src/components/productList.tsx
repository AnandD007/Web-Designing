import React, { useState } from 'react';
import { AppContext } from "../App";
import { Table } from 'react-bootstrap';
import '../App.css';
import Sort from './sort';
import Search from './search';

type Product = {
    id: number;
    name: string;
    description: string;
    quantity: number;
    price: number;
  };
  

const ProductsList: React.FC = () => {
    const{sortedBy, handleSort, handleSearch, filteredItems, handleDeleteProduct} = React.useContext(AppContext);
    return (
        <>
            <div className="ml-4 mr-4 header-color rounded">
                <h2 className="mb-5 font-change">Product List</h2>
                <div className="row col-md-12 justify-content-center">
                    <Sort
                        sortedBy={sortedBy!}
                        handleSort={handleSort}
                    />
                    <div className="row col-md-7">
                        <div className='col-md-7 ml-5'>
                            <Search
                            handleSearch={handleSearch}
                            />
                        </div>
                        {/* <button className="btn mt-4 col-sm-3 rounded bg-primary search-btn float-right" onClick={handleSearch}>Search</button> */}
                        {/* <Button className="btn mt-4 col-sm-3 ml-5 rounded bg-primary float-right" variant="primary" onClick={handleShowModal}>
                            Add Product
                        </Button> */}
                    </div>
                </div>
                <hr />
            </div>
                <Table striped bordered hover className="container header-color bordered table-border">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Delete Items</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredItems.list.map((product: Product) => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>{product.quantity}</td>
                                <td>{product.price.toFixed(2)}</td>
                                <td><button
                                    className="btn btn-danger bg-danger"
                                    onClick={() => handleDeleteProduct(product.id)}
                                >
                                    Delete Item
                                </button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
        </>
    )
};
export default ProductsList;
