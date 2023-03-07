import React from "react";

const Pagination = ( {prev, next, onPrevious, onNext} ) => {

    const handlePrevious = () => {
        onPrevious();
    }

    const handleNext = () => {
        onNext();
    }

    return (
        <nav className="my-5">
            <ul className="pagination justify-content-center">
                {prev ? 
                        <li className="page-item">
                            <button className="btn btn-info m-2 " onClick={handlePrevious}>
                                Previous
                            </button>
                        </li>
                     : null}
                {next ? 
                        <li className="page-item">
                            <button className="btn btn-info m-2" onClick={handleNext}>
                                Next
                            </button>
                        </li>
                     : null}
            </ul>
        </nav>
    )
};

export default Pagination;