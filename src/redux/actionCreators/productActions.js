import { ADD_TO_CART, DECREASE_CART_QUANTITY, INCREASE_CART_QUANTITY, REMOVE_FROM_CART } from "../actionTypes/actionTypes"

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
        type : INCREASE_CART_QUANTITY,
        payload: product
    }
}
export const decreaseCartQantity = (product) => {
    return {
        type : DECREASE_CART_QUANTITY,
        payload: product
    }
}