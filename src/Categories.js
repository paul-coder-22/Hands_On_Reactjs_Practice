import React from 'react';

const Categories = ({ filterItem }) => {
    return (<div className="btn-container">
        <button className="filter-btn" onClick={() => filterItem('all')}>
            all
        </button>
        <button className="filter-btn" onClick={() => filterItem('breakfast')}>
            breakfast
        </button>
        <button className="filter-btn" onClick={() => filterItem('shakes')}>
            shakes
        </button>
        <button className="filter-btn" onClick={() => filterItem('lunch')}>
            lunch
        </button>
    </div>);
}

export default Categories;