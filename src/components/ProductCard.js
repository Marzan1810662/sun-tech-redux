import React from "react";
import { BiListPlus } from "react-icons/bi";
import { BsTrash } from "react-icons/bs"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../redux/actionTypes/actionTypes";
import { addToCart, decreaseCartQantity, increaseCartQantity, removeFromCart } from "../redux/actionCreators/productActions";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  return (
    <div
      className='shadow-lg rounded-3xl border  p-3 flex flex-col text-red-900'
      key={product._id}
    >
      <div className='h-52 w-52 mx-auto'>
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className='font-bold text-center'>{product.model}</h1>
      <p className='text-center font-semibold mb-3'>Rating: {product.rating}</p>
      <div className=' flex-1'>
        <ul className='space-y-2'>
          {product.keyFeature.map((feature, index) => {
            return <li className='text-sm' key={index}>{feature}</li>;
          })}
        </ul>
      </div>
      {pathname.includes('cart') && <div className='flex gap-2 mt-5 justify-around'>
        {(product.quantity > 1) && <button className='bg-red-500  py-1 px-2 rounded-full'
          onClick={() => dispatch(decreaseCartQantity(product))}>
          <AiOutlineMinus className='text-white' />
        </button>}
        <p className="mx-3">{product.quantity}</p>
        <button className='bg-red-500  py-1 px-2 rounded-full'
          onClick={() => dispatch(increaseCartQantity(product))}>
          <AiOutlinePlus className='text-white' />
        </button>
        <button className="flex gap-1 items-center bg-red-500 text-white rounded-full py-2 px-4" title="Remove from cart"
          onClick={() => dispatch(removeFromCart(product))}>
          <span>Remove</span> <BsTrash />
        </button>
      </div>}
      {!pathname.includes('cart') && <div className='flex gap-2 mt-5'>
        <button className='bg-red-500 rounded-full py-1 px-2 flex-1 text-white text-bold'
          onClick={() => dispatch(addToCart(product))}>
          Add to cart
        </button>
        <button
          title='Add to wishlist'
          className='bg-red-500  py-1 px-2 rounded-full'>
          <BiListPlus className='text-white' />
        </button>
      </div>}
    </div >
  );
};

export default ProductCard;
