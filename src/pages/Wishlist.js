import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';

const Wishlist = () => {
    const { wishlist } = useSelector(state => state)
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
                {wishlist.map(product => <ProductCard key={product._id} product={product} />)}
            </div>
        </div>
    );
};

export default Wishlist;