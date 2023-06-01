import React from 'react'                                                                                                           
import { useParams } from 'react-router-dom' 
import { useEffect } from "react";
import { useLocation } from "react-router-dom";   
import data from './laptop_data';
import  './home&headerStyle.css'
import star_fill from './star-fill.png'
import star from './star.png'

const Product = () => {                                                                                  

  const { pathname } = useLocation();
        useEffect(() => {
          window.scrollTo(0, 0);
        }, [pathname]);

  let {id} = useParams();
  const product = data.find((element) => element.id === id);
  const {name, image, cost, cutCost, rating, des} = product;


  return(
    <div>

            <div className="product_page">

              <div className='product_con'>
                    
                        <img src={product.image} id='Pimage'/>
                    
                    <div className="PDesc">
                      <h1>{name}</h1><br />
                      <p>{des}</p>
                      <img src={star_fill} /><img src={star_fill} /><img src={star_fill} /><img src={star_fill} />
                      <img src={star} />
                      <br />
                      <h2>₹{cost} <span> ₹{cutCost}</span></h2>
                
                      <button id='buy'>Buy Product</button>
                      <button id='cart'>Add to Cart</button>
                    </div>
              </div>

            </div>




    </div>     
  )                                                                                                  
}                                                                        
                        
export default Product                                                                                                       