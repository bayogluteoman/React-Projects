import React from 'react';
import { connect } from 'react-redux';
import CartItem  from  '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';

import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer
} from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
      )}
    </CartItemsContainer>
    <CartDropdownButton
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CartDropdownButton>
  </CartDropdownContainer>
);
/*our cart dropdown component is not getting re-render when ever the state changes
 that unrelated to the card items.For example when you sign in/out our cart items
 in our cart dropdown as well as our cart items count is not changing.Beside cart
 icon component don't need to re-render which helps save us on performance*/
 
const mapStateToProps = createStructuredSelector({
   cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));

/* 
**************************************Özet olarak***************************************
|                                                                                       |
|  combineReducers({})                                                                  |
|  Reducerları bir araya toplayan metottur.                                             |
|                                                                                       |
|  middleware                                                                           |
|  Dispatch işlemlerinde action’ları süzgecinden geçiren ara katman.                    |
|                                                                                       |
|  mapStateToProps                                                                      |
|  Mapleme işlemi yaparak state’imizde o anda ne varsa onu component’iniz içerisinde    |
|  props olarak kullanmamızı sağlayan bir tanımdır.                                     |
|                                                                                       |
|  mapDispatchToProps                                                                   |
|  Uygulama durumunun değişmesine neden olabilecek eylemi göndermenize yarar.           |
|                                                                                       |
|  connect()()                                                                          | 
|  Store’u component’e bağlamak için kullanılan nesnedir. Provider’a ihtiyaç duyar.     |
|                                                                                       |
****************************************************************************************
*/