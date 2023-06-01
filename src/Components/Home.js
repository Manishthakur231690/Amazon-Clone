import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import  './home&headerStyle.css'
import banner1 from './banner1.jpg'
import Mobile_banner from './Images/mobile_banner.jpg'
import Men_img from './Images/men.jpg'
import Women_img from './Images/women.jpg'
import Laptop_img from './Images/laptop1.jpg'
import Shoes_img from './Images/shoose1.png'
import Mobile_img from './Images/mobiles.jpg'
import Kid_img from './Images/kid.jpg'
import Boat_logo from './Images/Boat_Logo.webp'
import boat_head from './Images/boat-headphone.jpg';
import Accessories_img from './Images/accesories.png';
import star_fill from './Images/star-fill.png'
import star from './Images/star.png'

// -*******   Accessories Section    **************
import a1 from './Images/a1.jpg'
import a2 from './Images/a2.jpg'
import a3 from './Images/a3.jpg'
import a4 from './Images/a4.jpg'
import a5 from './Images/a5.jpg'
import a6 from './Images/a6.jpg'
import a7 from './Images/a7.jpg'
import a8 from './Images/a8.jpg'
import a9 from './Images/a9.jpg'
import a10 from './Images/a10.jpg'
import a11 from './Images/a11.jpg'
import a12 from './Images/a12.jpg'
import a13 from './Images/a13.jpg'
import a14 from './Images/a14.jpg'








const Home = () => {
        const { pathname } = useLocation();
        useEffect(() => {
          window.scrollTo(0, 0);
        }, [pathname]);
      

  return (
    <div style={{backgroundColor:'#e4e4e4'}}>
          <img src={banner1} id='banner'/>
          <img src={Mobile_banner} id='mobile_banner'/>

          <div className="category_home">
            <div className="fashion">
                <div className='category_item'>
                        <h2>Men's Fashion Upto 50% OFF</h2>
                        <Link to='/Mens'><img src={Men_img} /><br /></Link>
                </div>    

                 <div className='category_item'>
                        <h2>Kid's Fashion Upto 40% OFF</h2>
                        <Link to='/Kids'><img src={Kid_img} /><br /></Link>
                </div>  

                <div className='category_item'>
                        <h2>Women's Fashion Upto 60% OFF</h2>
                        <Link to='/Womens'><img src={Women_img} /><br /></Link>
                </div>

                <div className='category_item'>
                        <h2> Sports Shoes Upto 50% OFF</h2>
                        <Link to='/Shoes'><img src={Shoes_img} /><br /></Link>
                </div>      
              </div>

              <div className="electronics">
                <div className='category_item'>
                        <h2>Best Offers on Smartphones</h2>
                        <Link to='/Mobiles'><img src={Mobile_img} /><br /></Link>
                </div>    

                 <div className='category_item'>
                        <h2>Buy Laptops get Upto 40% OFF</h2>
                        <Link to='/Laptops'><img src={Laptop_img} /><br /></Link>
                </div>  

                <div className='category_item'>
                        <h2>Get Upto 60% OFF on Accessories</h2>
                        <Link to='/Accessories'><img src={Accessories_img} /><br /></Link>
                </div>
    
              </div>

          </div>


        <div className="accessories_sec">
                <p>Best Seller in Computer &#38; Accessories</p>
                <div className="container">
                        <img src={a1} />
                        <img src={a2} />
                        <img src={a3} />
                        <img src={a4} />
                        <img src={a5} />
                        <img src={a6} />
                        <img src={a7} />
                        <img src={a8} />
                        <img src={a9} />
                        <img src={a10} />
                        <img src={a11} />
                        <img src={a12} />
                        <img src={a13} />
                        <img src={a14} />
                </div>
        </div>



<br />
        <div className="boat_banner">
                <img src={Boat_logo} id='boat'/>
                <img src={boat_head}  id='boat-head'/>
                <div className="desc">
                        <p>boAt Nirvana 751 ANC Hybrid Noise Cancelling Bluetooth Wireless Over Ear Headphones with Up to..</p>
                        <img src={star_fill} height={20}/><img src={star_fill} height={20}/><img src={star_fill} height={20}/><img src={star_fill} height={20}/><img src={star} height={20}/>
                        <h2>₹ 2,999</h2>
                </div>                  
        </div>
<br />


        <div className="signup_page">
                <p>See Personalized recommendations</p>
                <a href="./signIn.html" target={'_blank'}><button>Sign in</button></a>
                <a href="./signUp.html" target={'_blank'}><p>New Customer ?<span style={{color:'maroon'}}>Start here</span></p></a>

        </div>






    </div>
  )
}

export default Home
