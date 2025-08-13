import { createContext, useContext } from 'react';

const CartContext = createContext({
	state: { items: [] },
	addItemToCart: (id) => {},
	updateCartItemQuantity: (productId, amount) => {},
	dispatch: (action) => {},
});

export const useCart = () => useContext(CartContext);

export default CartContext;
