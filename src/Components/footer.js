import React from 'react'
import logo from './logo.png';
import  './home&headerStyle.css';
const footer = () => {
  return (
    <>
        <div className="footer_container">
            <div className='footer_content'>
                <div>
                        <h2>Get to know Us</h2>
                        <p>Careers</p>
                        <p>Investor Relations</p>
                        <p>Amazon Devices</p>
                </div>
                <div>
                        <h2>Categories</h2>
                        <p>All</p>
                        <p>Men's Fashion</p>
                        <p>Women's Fashion</p>
                        <p>Kid's Fashion</p>
                        <p>Smartphones</p>
                        <p>Laptops</p>
                        <p>Sport Shoose</p>

                </div>
                <div>
                        <h2>Make Money with Us</h2>
                        <p>Sell on Amazon</p>
                        <p>Sell Your service on Amazon</p>
                        <p>Sell on Amazon Business</p>
                        <p>Sell your Apps on Amazon</p>
                        <p>Become an Affiliate</p>
                        <p>See all </p>
                </div>
                <div>
                        <h2>Let Us Help You</h2>
                        <p>Your Account</p>
                        <p>Your Order</p>
                        <p>Shipping Rates and Policies</p>
                        <p>Amazon Prime</p>
                        <p>Return and Replacememt</p>
                        <p>Help</p>
                </div>
            </div><br /><br />
                    <hr />
                    <img src={logo} id='logo' />
        </div>


    </>
  )
}

export default footer
