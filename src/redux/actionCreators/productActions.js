import { ADD_TO_CART, ADD_TO_WISHLIST, DECREASE_CART_QUANTITY, INCREASE_CART_QUANTITY, REMOVE_FROM_CART, REMOVE_FROM_WISHLIST } from "../actionTypes/actionTypes"

export const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}
export const removeFromCart = (product) => {
    return {
        type: REMOVE_FROM_CART,
        payload: product
    }
}

export const increaseCartQantity = (product) => {
    return {
        type: INCREASE_CART_QUANTITY,
        payload: product
    }
}

export const decreaseCartQantity = (product) => {
    return {
        type: DECREASE_CART_QUANTITY,
        payload: product
    }
}

export const addToWishlist = (product) => {
    return {
        type: ADD_TO_WISHLIST,
        payload: product
    }
}
export const RemoveFromWishlist = (product) => {
    return {
        type: REMOVE_FROM_WISHLIST,
        payload: product
    }
}