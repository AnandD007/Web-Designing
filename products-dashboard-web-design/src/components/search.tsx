import React, { useState } from 'react';
import '../App.css';

interface Products {
    handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Products> = ({
    handleSearch
}) => {
    return (
        <div>
            <input
                type="text"
                onChange={handleSearch}
                placeholder='&#xF002;  Search Products...'
                className="form-control input-item set-icon"
                id="item-search-input"
            />
        </div>

    )
}

export default Search;