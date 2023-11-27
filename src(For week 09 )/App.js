import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Component/Login';
import Home from './Component/Home';
import Order from './Component/Order';
import Product from './Component/Product';
import Cart from './Component/Cart';
import Help from './Component/Help';
import BuyPage from './Component/BuyPage';
import VendorHome from './Component/VendorHome';
import AdminHome from './Component/AdminHome';
import AddProduct from './Component/AddProduct';

import Welcome from './Component/Welcome';
import Register from './Component/Register';
import AdminAccount from './Component/AdminAccount';

import Vendors from './Component/Vendors';
import VendorAccount from './Component/VendorAccount';
import VendorRegister from './Component/VendorRegister';
import Requests from './Component/Requests';
//  edited in V-R and in route


function App() {
  return (
    <>
    <Routes>
       
        <Route path='/' element={<Welcome />} />
        <Route path='Register' element={<Register />} />
        <Route path='VendorRegister' element={<VendorRegister />}/>
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/order' element={<Order />} />
        <Route path='/Product' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/Help' element={<Help />} />
        <Route path='/BuyPage' element={<BuyPage />} />
        <Route path='/VendorHome' element={<VendorHome />} />
        <Route path='/AdminHome' element={<AdminHome/>}/>
        <Route path='/AddProduct' element={<AddProduct />} />
        <Route path='/AdminHome' element={<AdminHome/>}/>
        <Route path='/AdminAccount' element={<AdminAccount/>}/>
        <Route path='Requests' element={<Requests/>}/>
        <Route path='Vendors' element={<Vendors/>}/>
        <Route path='/VendorAccount' element={<VendorAccount />} />
    </Routes>
    </>
  );
}
 
export default App;