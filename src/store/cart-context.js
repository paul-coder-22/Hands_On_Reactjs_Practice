import React from "react";

const CarContext = React.createContext({

    items: [],
    totalAmount: 0,
    addItem: (item) => { },
    removeItem: (id) => { }
})


export default CarContext;