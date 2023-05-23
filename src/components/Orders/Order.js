import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';
import {removeFromDb} from "../../utilities/fakedb"

const Order = () => {
    const {products,previousCart} = useLoaderData();
    const [cart, setCart] = useState(previousCart);
    const handleRemoveItems=(id)=>{
      const remainingProducts=cart.filter(product=>product.id !== id)
        setCart(remainingProducts);
        removeFromDb(id); 
        
    }
    return (
       
            <div className="shop-container">
                <div className="Orders-container">
                    {
                        cart.map(product=><ReviewItems key={product.id}
                        product={product}
                        handleRemoveItems={handleRemoveItems}></ReviewItems>)
                    }

                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>

                </div>

            </div>
     
    );
};

export default Order;