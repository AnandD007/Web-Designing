import React from "react";
import 'react-bootstrap';

const Loader: React.FC = () => {
    return (
        <div className="d-flex justify-content-center">
            {" "}
            <div className="spinner-border" role="status">
                {" "}
            </div>
            {" "}
        </div>
    );
};
export default Loader;
