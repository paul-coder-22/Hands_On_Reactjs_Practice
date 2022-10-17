import CarContext from "./cart-context"

const CartProvder = props => {

    const addItemCartHandler = item => { }

    const removeItemFromCartHandler = id => { }


    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return <CarContext.Provider value={cartContext}>
        {props.children}
    </CarContext.Provider>
}

export default CartProvder;