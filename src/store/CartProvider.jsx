import { useMemo } from 'react';
import CartContext from './cartContext';
import useCartReducer, { ACTION_TYPES } from './cartReducer';

const CartProvider = ({ children }) => {
	const [state, dispatch] = useCartReducer();

	const addItemToCart = (id) => {
		dispatch({
			type: ACTION_TYPES.ADD_ITEM,
			payload: { id },
		});
	};

	const updateCartItemQuantity = (productId, amount) => {
		dispatch({
			type: ACTION_TYPES.UPDATE_ITEM,
			payload: {
				productId,
				amount,
			},
		});
	};

	const contextValue = useMemo(
		() => ({
			state,
			dispatch,
			addItemToCart,
			updateCartItemQuantity,
		}),
		[state, dispatch]
	);

	return (
		<CartContext.Provider value={contextValue}>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
