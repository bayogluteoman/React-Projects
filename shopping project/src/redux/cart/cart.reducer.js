import CartActionTypes from './cart.types';
import { addItemToCart } from './cart.utils';

const INITIAL_STATE ={          //initial state belirledik 
    hidden:true,
    cartItems: []
};

const cartReducer = (state= INITIAL_STATE, action) =>{      //Reducer oluşturduk.Gelen action’lardan type’ı bu durumlardan hangisine uygunsa payload’da yazan değeri al ve benim initial state’imde belirlediğim değere ekle. 
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload )
            };
        default: 
            return state;
    }
};

export default cartReducer;

/*  Action’lar gönderdikleri payload datasının sadece ne olacağını söylerler. Uygulamanın datayı nasıl değiştireceğini 
 ve ne yapacağını bilemezler. Reducerlar bu noktada store’a gelen action’a göre uygulamanın state’inin nasıl değiştireceğini
 belirler ve store’a gönderir. Kısacası reducer tek işi olan veri değişimini yapar ve store’u güncellemiş olur. Ardından 
 store bu yapılan güncellemeyi view’e yansıtır.

Reducerlar pure fonksiyonlardır demiştim sadece return işlemi yaparlar ve gönderilen datayı güncelleyerek yerine yeni bir
state dönerler. Reducer state ve action iki adet parametre alır. Burada gönderilen action’un tipine bakıyor ve koşulu 
sağlıyorsa action’dan gönderilen payload neyse onu basıyor. Bu şekilde store güncellenmiş oluyor. */ 

