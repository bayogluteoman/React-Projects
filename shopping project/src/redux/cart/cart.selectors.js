import { createSelector } from 'reselect'

const selectCart = state => state.cart;           //pass the state in here, gets the cart object 

export const selectCartItems = createSelector(
    [selectCart],                      
    (cart) => cart.cartItems                      //which gets passed from line 3 which passes out the cart item  
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems  =>
    cartItems.reduce((accumulatedQuantity, cartItem)  => accumulatedQuantity + cartItem.quantity, 0)
);