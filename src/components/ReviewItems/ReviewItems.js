import React from 'react';
import './Review.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft, faTrash } from '@fortawesome/free-solid-svg-icons';

const ReviewItems = ({product,handleRemoveItems}) => {
    const {name,price,quantity,img,id} = product;
  
    return (
        <div className='container'>
                 <div className="img-container">
                    <img src={img} alt="" />  
                </div>
         
            <div className="review-details-container"> 
                 <div className="review-details"> 

                    <p>{product.name}</p>
                    <p> Price: $ {price}</p>
                    <p>Quantity: $ {quantity}</p>
                </div>
            

            <div className="delet-btn">
                <button onClick={()=>handleRemoveItems(id)}>
                              <FontAwesomeIcon className='deletIcon' icon={faTrash}></FontAwesomeIcon>       
                </button>

            </div>
            </div>
        </div>
    );
};

export default ReviewItems;