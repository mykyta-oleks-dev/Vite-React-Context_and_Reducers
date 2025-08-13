import { useReducer } from 'react';
import { DUMMY_PRODUCTS } from '../dummy-products';

export const ACTION_TYPES = {
	ADD_ITEM: 'addItem',
	UPDATE_ITEM: 'updateItem',
};

function cartReducer(state, action) {
	let updatedItems;
	switch (action.type) {
		case ACTION_TYPES.ADD_ITEM:
			const { id } = action.payload;
			updatedItems = [...state.items];

			const existingCartItemIndex = updatedItems.findIndex(
				(cartItem) => cartItem.id === id
			);
			const existingCartItem = updatedItems[existingCartItemIndex];

			if (existingCartItem) {
				const updatedItem = {
					...existingCartItem,
					quantity: existingCartItem.quantity + 1,
				};
				updatedItems[existingCartItemIndex] = updatedItem;
			} else {
				const product = DUMMY_PRODUCTS.find(
					(product) => product.id === id
				);
				updatedItems.push({
					id: id,
					name: product.title,
					price: product.price,
					quantity: 1,
				});
			}

			return {
				...state,
				items: updatedItems,
			};

		case ACTION_TYPES.UPDATE_ITEM:
			const { productId, amount } = action.payload;
			updatedItems = [...state.items];
			const updatedItemIndex = updatedItems.findIndex(
				(item) => item.id === productId
			);

			const updatedItem = {
				...updatedItems[updatedItemIndex],
			};

			updatedItem.quantity += amount;

			if (updatedItem.quantity <= 0) {
				updatedItems.splice(updatedItemIndex, 1);
			} else {
				updatedItems[updatedItemIndex] = updatedItem;
			}

			return {
				...state,
				items: updatedItems,
			};
		default:
			return state;
	}
}

const useCartReducer = () =>
	useReducer(cartReducer, {
		items: [],
	});

export default useCartReducer;
