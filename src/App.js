import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import './app.css'
import Home from './components/pages/home/Home';
import UserList from './components/pages/userList/UserList';
import NewUser from './components/pages/newUser/NewUser';
import User from './components/pages/user/User';
import ProductList from './components/pages/productList/ProductList';
import NewProduct from './components/pages/newProduct/NewProduct';
import Product from './components/pages/product/Product';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Topbar />
        <div className='container'>
            <Sidebar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/users' element={<UserList />} />
                <Route path='/user/:userId' element={<User />} />
                <Route path='/newUser' element={<NewUser />} />
                <Route path='/products' element={<ProductList />} />
                <Route path='/product/:productId' element={<Product />} />
                <Route path='/newProduct' element={<NewProduct />} />
            </Routes>
        </div>
    </Router>
  );
}

export default App;
