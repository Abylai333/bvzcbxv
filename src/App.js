import React from "react"
import { Routes, Route } from "react-router-dom";
import { Product } from './components/Product';
import { Layout } from "./Layout";
import {Cart} from './components/Cart'
import {Login} from './components/Login'
import { observer } from "mobx-react-lite";
import './App.css';
import { Home } from "./components/Home";



// Написать приложение используя mobx
// 1.Страница магазина в котором выводятся все товары
// 2.Корзина в layout в которой видно добавление товара в корзину при нажатий на него
// 3.Страница корзины где можно посмотреть массив товаров


const App = observer(() => {
  return (
  <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={
            <Home/> 
          }/>
        <Route path="app" element={
          <div className="wrapper">
            <section id='steezy'>
              <Cart />
            </section>
          </div>
        }/>
        <Route path="login" element={
            <div class="loginBlock">
             <Login/> 
            </div>
        }/>  
        <Route path="product/:id" element={
          <div class="cart_items">
            <Product />
          </div>
        }/> 
      </Route>
      <Route path="*" element={<>404</>} />
    </Routes>
  </>
  );
})

export default App;
