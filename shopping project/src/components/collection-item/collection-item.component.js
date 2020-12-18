import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
  
    return (
      <div className='collection-item'>
        <div
          className='image'
          style={{
            backgroundImage: `url(${imageUrl})`
          }}
        />
        <div className='collection-footer'>
          <span className='name'>{name}</span>
          <span className='price'>{price}</span>
        </div>
        <CustomButton onClick={() => addItem(item)} inverted>
          Add to cart
        </CustomButton>
      </div>
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
|  State’imizde o anda ne varsa onu component’iniz içerisinde    |
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