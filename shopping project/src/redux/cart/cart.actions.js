import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item =>({
    type:CartActionTypes.ADD_ITEM,
    payload: item
});

/*  Action’lar gönderdikleri payload datasının sadece ne olacağını söylerler. Uygulamanın datayı nasıl değiştireceğini 
 ve ne yapacağını bilemezler. Reducerlar bu noktada store’a gelen action’a göre uygulamanın state’inin nasıl değiştireceğini
 belirler ve store’a gönderir. Kısacası reducer tek işi olan veri değişimini yapar ve store’u güncellemiş olur. Ardından 
 store bu yapılan güncellemeyi view’e yansıtır. */