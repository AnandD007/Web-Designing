interface Products {
    search: string;
    handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Products> = ({
    search,
    handleSearch
}) => {
    return (
        <input
            list="items-list"
            type="text"
            onChange={handleSearch}
            placeholder='&#xF002; Search Products...'
            className="form-control input-item set-icon"
            id="item-search-input"
        ></input>
    )
}

export default Search;