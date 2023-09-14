import { useReducer } from "react";
import CartContext from "./CartContent";

const CartProvider = ({children}) => {

  const defaultCartState = {
    items: [],
    totalAmount: 0,
  }

  const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
      const updatedItems = state.items.concat(action.item);
      const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount
      }
    }
    return defaultCartState;
  }

  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemHandler = (item) => {
    dispatchCartAction({type: 'ADD', item: item})
  }

  const removeItemHandler = (id) => {
    dispatchCartAction({type: 'REMOVE', id: id})
  }

  const cartContext = {
    items: cartState.items, 
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler
  }
  return (
    <CartContext.Provider value={cartContext}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;