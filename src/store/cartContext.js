import { createContext, useContext } from 'react';

const CartContext = createContext({
	items: [],
	addItemToCart: (id) => {},
});

export const useCart = () => useContext(CartContext);

export default CartContext;
