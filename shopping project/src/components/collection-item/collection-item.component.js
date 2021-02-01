import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
  
    return (
      <CollectionItemContainer>
      <BackgroundImage className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}₺</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
    );
  };
  

const mapdDispatchToProps = dispatch =>({
    addItem: item => dispatch(addItem(item))
}); 

export default connect(null, mapdDispatchToProps)(CollectionItem);  

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
|  State’imizde o anda ne varsa onu component’iniz içerisinde                           |
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