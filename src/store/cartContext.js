import { createContext, useContext } from 'react';

const CartContext = createContext({
	items: [],
	addItemToCart: (id) => {},
	updateCartItemQuantity: (productId, amount) => {},
});

export const useCart = () => useContext(CartContext);

export default CartContext;
