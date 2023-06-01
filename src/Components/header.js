import React, {useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './logo.png';
import appLogo from './app-logo.png';
import  './home&headerStyle.css';


const Header = () => {

    const [openMenu, setOpenMenu] = useState(false);

  return (
    <> 
        <div className='header'>
            <Link to='/'><img src={logo} id='logo' /></Link>
            <div className='search'>
                <input type="search" placeholder='Search Amazon.in' />
                <i className="fa-solid fa-search"></i>
            </div>
            <div className='cart'>
                <select>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                        <option value="Australia">Australia</option>
                        <option value="Canada">Canada</option>
                        <option value="France">France</option>
                        <option value="Germany">Germany</option>
                        <option value="Poland">Poland</option>
                        <option value="Singapore">Singapore</option>
                        <option value="UAE">UAE</option>

                </select>
                <Link to='/cart' style={{color:'white',textDecoration:'none'}}><i className="fa-solid fa-cart-shopping"></i><span style={{marginLeft:'5px', fontWeight:'bold'}}>Cart</span></Link>
            </div>
        </div>
        <div className="category_container">
                <p>All</p>
                <Link to='/Mobiles' style={{color:'white',textDecoration:'none'}}><p onClick={()=> setOpenMenu(false)} >Mobiles</p></Link>
                <Link to='/Laptops' style={{color:'white',textDecoration:'none'}}><p onClick={()=> setOpenMenu(false)} >Laptops</p></Link>
                <Link to='/Mens' style={{color:'white',textDecoration:'none'}}><p onClick={()=> setOpenMenu(false)} >Men's Fashion</p></Link>
                <Link to='/Womens' style={{color:'white',textDecoration:'none'}}><p onClick={()=> setOpenMenu(false)} >Women's Fashion</p></Link>
                <Link to='/Kids' style={{color:'white',textDecoration:'none'}}><p onClick={()=> setOpenMenu(false)}>Kid's Fashion</p></Link>
                <Link to='/Shoes' style={{color:'white',textDecoration:'none'}}><p onClick={()=> setOpenMenu(false)} >Shoes</p></Link>
                <p>Mini TV</p>
                <p>Pay</p>
                <p>Prime</p>
                 
                 <div id='app-header'>
                    <img src={appLogo} style={{borderRadius:'5px',marginRight:'15px'}} height={30}/> <span>Shopping made easy | Download App</span>
                 </div>

                
        </div>

    <div className="humburger">
        <i className="fa-solid fa-bars" id='menuIcon' onClick={()=> setOpenMenu(true)}></i>
                <input type="search" placeholder='Search Amazon.in' />
                <i className="fa-solid fa-search" id='search_icon'></i>
                
            <div className = {openMenu ? 'menu_box_active' : 'menu_box'} >

                <i className="fa-solid fa-xmark" id='close_btn' onClick={()=> setOpenMenu(false)}></i>

                <div style={{backgroundColor: 'rgb(19, 26, 34)'}}>
                  <div className="ama_home">
                            <p>Amazon Home</p><i className="fa-solid fa-house-user"></i>
                  </div>
                  <div id='signIn'>
                      <p>Sign In </p><i className="fa-regular fa-user" style={{marginLeft:'5px'}}></i>
                  </div>
                </div>
                    <div className="category">
                        <h2>Top Categories For You</h2><hr />
                        <Link to='/Mobiles' style={{color:'white',textDecoration:'none'}}><p onClick={()=> setOpenMenu(false)} >Mobiles</p></Link>
                        <Link to='/Laptops' style={{color:'white',textDecoration:'none'}}><p onClick={()=> setOpenMenu(false)} >Laptops</p></Link>
                        <Link to='/Mens' style={{color:'white',textDecoration:'none'}}><p onClick={()=> setOpenMenu(false)} >Men's Fashion</p></Link>
                        <Link to='/Womens' style={{color:'white',textDecoration:'none'}}><p onClick={()=> setOpenMenu(false)} >Women's Fashion</p></Link>
                        <Link to='/Kids' style={{color:'white',textDecoration:'none'}}><p onClick={()=> setOpenMenu(false)}>Kid's Fashion</p></Link>
                        <Link to='/Shoes' style={{color:'white',textDecoration:'none'}}><p onClick={()=> setOpenMenu(false)} >Shoes</p></Link>
                        <p>See All categories</p>
                      
                        <h2>Programs and Features</h2><hr />
                        <p>Todays' Deal</p>
                        <p>Pay</p>
                        <p>Try Prime</p>
                        <p>Sell on Amazon</p>
                        <p>Log out</p>
                        <p>Best Sellers</p>
                        <p>Movers and Shakers</p>
                    </div>
                  <div style={{height:'5px', width:'100%', backgroundColor:'lightgray'}} ></div>

            </div>
    </div>



    </>
  )
}

export default Header
