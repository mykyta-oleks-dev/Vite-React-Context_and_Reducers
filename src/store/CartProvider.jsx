import CartContext from './cartContext';

const CartProvider = ({ children, value }) => {
	return (
		<CartContext.Provider value={value}>{children}</CartContext.Provider>
	);
};

export default CartProvider;
