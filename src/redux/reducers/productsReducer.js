import { ADD_TO_CART, ADD_TO_WISHLIST, DECREASE_CART_QUANTITY, INCREASE_CART_QUANTITY, REMOVE_FROM_CART, REMOVE_FROM_WISHLIST } from "../actionTypes/actionTypes";

const initialState = {
    cart: [],
    topRated: [],
    wishlist: [],
}

const productReducer = (state = initialState, action) => {
    const selectedProduct = state.cart.find(product => product._id === action.payload._id);
    //console.log(selectedProduct);
    switch (action.type) {
        case INCREASE_CART_QUANTITY:
        case ADD_TO_CART:
            if (selectedProduct) {
                const newCart = state.cart.filter(product => product._id !== selectedProduct._id);
                selectedProduct.quantity = selectedProduct.quantity + 1;

                return {
                    ...state,
                    cart: [...newCart, selectedProduct]
                }

            }
            return {
                ...state,
                cart: [...state.cart, { ...action.payload, quantity: 1 }]
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: [...state.cart.filter(product => product._id !== action.payload._id)]
            }
        case DECREASE_CART_QUANTITY:
            if (selectedProduct.quantity > 1) {
                const newCart = state.cart.filter(product => product._id !== selectedProduct._id);
                selectedProduct.quantity = selectedProduct.quantity - 1;

                return {
                    ...state,
                    cart: [...newCart, selectedProduct]
                }
            }
            return {
                ...state,
                cart: [...state.cart.filter(product => product._id !== action.payload._id)]
            }
        case ADD_TO_WISHLIST:
            const wishlistProduct = state.wishlist.find(product => product._id === action.payload._id);
            if (wishlistProduct) {
                return {
                    ...state,
                    wishlist: [...state.wishlist.filter(product => product._id !== action.payload._id), wishlistProduct]
                }
            }
            return {
                ...state,
                wishlist: [...state.wishlist, action.payload]
            }

        case REMOVE_FROM_WISHLIST:
            return {
                ...state,
                wishlist: [...state.wishlist.filter(product => product._id !== action.payload._id)]
            }

        default:
            return state;
    }
}

export default productReducer;