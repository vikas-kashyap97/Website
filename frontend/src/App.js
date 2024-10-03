import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/Girls Fashion' element={<ShopCategory banner={women_banner} category="Girls Fashion" />} />
        <Route path='/Boys Fashion' element={<ShopCategory banner={men_banner} category="Boys Fashion" />} />
        <Route path='/Boys Footwear' element={<ShopCategory banner={kid_banner} category="Boys Footwear" />} />
        <Route path='/Girls Footwear' element={<ShopCategory banner={kid_banner} category="Girls Footwear" />} />
        <Route path='/Toys' element={<ShopCategory category="Toys" />} />
        <Route path='/Essential' element={<ShopCategory category="Essential" />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/login' element={<LoginSignup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
