import React from 'react'
import  './home&headerStyle.css';
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import data from './kid_data.js';

const Kids = () => {

    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);


const listItems = data.map(
        (element) => {
            return (
                <>
               
                    <div className="product-container">
                        <div className="image">
                        <div id="rating">
                            <i class="fa-solid fa-star"></i><p>{element.rating}</p>
                        </div>
                            <img src={element.image} height='150px'/>
                        </div>
                        <div className="pro-detail">
                            <p id='name'>{element.name}</p>
                            <p id='cost'><span style={{fontSize:'15px',position:'relative',top:'-7px'}}>₹</span> {element.cost} <span className='cutCost'>₹{element.cutCost}</span></p>
                            <Link to={`/Product(kid)/${element.id}`}><button id='buy'>Buy Now</button></Link>
                            <button id='add_cart'>Add to cart</button>
                        </div>
                    </div>
                </>
            )
        }    
    )

return (
    <div className="products">
            {listItems}
    </div>
    )
}





export default Kids
