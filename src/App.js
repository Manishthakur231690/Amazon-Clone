import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, } from "react-router-dom";
import Header from './Components/header';
import Home from './Components/Home';
import Footer from './Components/footer';

// ***  Products Page   **************//
  import Laptops from './Components/laptops';
  import Mobiles from './Components/mobiles'
  import Mens from './Components/Mens-Fashion';
  import Womens from './Components/Women\'s';
  import Kids from './Components/kids';
  import Accessories from './Components/accessories';
  import Shoes from './Components/Shoose';
  import Cart from './Components/cart';

// *** Single Product Page   **************//
  import Product_laptop from './Components/product_page(laptop)';
  import Product_men from './Components/product_page(men)';
  import Product_women from './Components/product_page(women)';
  import Product_kid from './Components/product_page(kid)';
  import Product_mobile from './Components/product_page(mobile)';
  import Product_shoes from './Components/product_page(shoes)';


function App() {


  return (
    <>
        <Router>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Mens' element={<Mens/>}/>
            <Route path='/Womens' element={<Womens/>}/>
            <Route path='/Kids' element={<Kids/>}/>
            <Route path='/Shoes' element={<Shoes />}/>
            <Route path='/Laptops' element={<Laptops/>}/>
            <Route path='/Mobiles' element={<Mobiles/>}/>
            <Route path='/Accessories' element={<Accessories/>}/>
            <Route path='/cart' element={<Cart/>}/>

          {/**********  Single  Product  Page **************/}
          
            <Route path='/Product(laptop)/:id' element={<Product_laptop/>}/>
            <Route path='/Product(Men)/:id' element={<Product_men/>}/>
            <Route path='/Product(women)/:id' element={<Product_women/>}/>
            <Route path='/Product(Kid)/:id' element={<Product_kid/>}/>
            <Route path='/Product(Shoes)/:id' element={<Product_shoes/>}/> 
            <Route path='/Product(Mobile)/:id' element={<Product_mobile/>}/>

          {/**********  Single  Product  Page **************/}
          

          </Routes>
          <Footer/>
        </Router>

    </>
  );
}

export default App;