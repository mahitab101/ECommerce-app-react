
import { Route, Routes } from 'react-router-dom';
import About from './components/about/About';
import Cart from './components/cart/Cart';
import Login from './components/login/Login';
import ProductCat from './components/productCat/ProductCat';
import ProductDetails from './components/productDetails/ProductDetails';
import ProductsList from './components/productsList/ProductsList';
import Slider from './components/slider/Slider';
import Footer from './shared/footer/Footer';
import Navbar from './shared/navbar/Navbar';

function App() {
  return (
    <div className="App">
    {/* <div id="preloader">
        <div className="jumper">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>   */}
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
          {/* <Slider /> */}
          {/* <ProductCat /> */}
          <ProductsList />
        </>
        }>

        </Route>
        <Route path='about' element={<About /> }/>
        <Route path='login' element={<Login /> }/>
        <Route path='product/:productId' element={<ProductDetails /> }/>
        <Route path='cart' element={<Cart /> }/>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
