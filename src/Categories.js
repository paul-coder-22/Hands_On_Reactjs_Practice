import React from 'react';

const Categories = ({ CategoriesItem, filterItem }) => {
    return (<div className="btn-container">
        {
            CategoriesItem.map((e, index) => {
                return <button
                    key={index}
                    type="button"
                    className="filter-btn"
                    onClick={() => filterItem(e)}>
                    {e}
                </button>
            })
        }
    </div>
    );
}

export default Categories;