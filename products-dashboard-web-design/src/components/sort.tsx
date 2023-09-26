import '../App.css';
import 'react-bootstrap';

interface Products {
    sortedBy: string;
    handleSort: (sortBy: string) => void;
}

const Sort: React.FC<Products> = ({
    sortedBy,
    handleSort
}) => {
    return (
        <div className="sort-container float-left col-sm-5">
            <label htmlFor="sort-select" className="float-left set-label col-sm-4 mr-5">
                Sort by:
            </label>
            <select
                id="sort-select"
                value={sortedBy}
                onChange={(e) => handleSort(e.target.value)}
                className="form-select text-secondary float-right col-md-10"
            >
                <option value="nameAsc">Product Name [A to Z]</option>
                <option value="nameDesc">Product Name [Z to A]</option>
                <option value="priceAsc">Product Price [Low to High ]</option>
                <option value="priceDesc">Product Price [High to Low]</option>
            </select>
        </div>
    )
}

export default Sort;