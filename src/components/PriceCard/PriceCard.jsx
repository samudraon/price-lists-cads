import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({ price }) => {
    return (
        <div className='bg-indigo-400 mt-4 rounded-md p-4 flex flex-col'>
            <h1 className='text-center'>
                <span className='text-purple-700 text-5xl font-extrabold'>{price.price}$</span>
                <span className='text-2xl text-white font-bold'>/mon</span>
            </h1>
            <h5 className='text-2xl font-bold my-6 text-center'>{price.name}</h5>
            <p className='text-white underline font-semibold'>Features: </p>
            {
                price.features.map((feature, idx) => <Feature
                    key={idx}
                    feature={feature}
                ></Feature>)
            }
            <button className='w-full bg-green-500 hover:bg-green-700 rounded-md py-2 font-bold mt-auto'>Buy Now</button>
        </div >
    );
};

export default PriceCard;