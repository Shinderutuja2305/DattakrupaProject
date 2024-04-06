import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SellerLogin from './components/SellerLogin';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Auth from './components/Auth';
import DataProvider from './context/DataProvider';
import UserHome from './components/UserHome';
import Product from './components/Product';
import AddProduct from './components/AddProduct';
import DetailView from './components/CardView/DetailView';
import UpdateProduct from './components/CardView/UpdateProduct';
import ContactUs from './components/More/ContactUs';
import AboutUs from './components/More/AboutUs';
import AllUser from './components/UserView/AllUser';
import Allquery from './components/More/Allquery';
import ItemView from './components/Item/ItemView';
import DetailViews from './components/Detail/DetailViews';
import Cart from './components/Cart/Cart';
import Orders from './components/Order/Orders';
import ViewOrders from './components/Order/ViewOrders';
import ProductView from './components/NavBarProduct/ProductView';
import GetProduct from './components/Category/GetProduct';



function App() {

  return <React.Fragment>
      <main>
        <DataProvider>
          <>
          <Routes>
          <Route path="/" element={<Home/>}/>

          <Route path="/seller" element={<SellerLogin/>} />
          <Route path='/dashboard' element={<Dashboard/>}/>

          <Route path='/auth' element={<Auth/>}/>

          <Route path='/contact' element={<ContactUs/>}/>
          <Route path='/about' element={<AboutUs/>}/>

          <Route path='/add' element={<Product/>}/>
          <Route path='/addp' element={<AddProduct/>}/>
          <Route path='/details/:id' element={<DetailView/>}/>
          <Route path='/update/:id'  element={<UpdateProduct/>}/>

          <Route path='/viewuser' element={<AllUser/>}/>
          <Route path='/allquery' element={<Allquery/>}/>

          <Route path='/views/:id' element={<ItemView/>}/>
          
          <Route path='/home' element={<UserHome/>}/>
          <Route path='/current/:id' element={<DetailViews/>}/>
          <Route path='/cart' element={<Cart/>}/>

          <Route path='/getorder' element={<Orders/>}/>

          <Route path='/orders' element={<ViewOrders/>}/>

          <Route path='/getproduct' element={<ProductView/>}/>
          <Route path='/categoryproduct' element={<GetProduct/>}/>

          </Routes>
          </>
        </DataProvider>
      </main>
    </React.Fragment>

}
export default App;
