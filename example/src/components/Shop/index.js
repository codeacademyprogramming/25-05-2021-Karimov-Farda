import React from 'react'
import Head from './head';
import '../../styling/index.scss'
import Products from "./Products";
import Pizza from './pizzas';
import Footer from './footer';
import Basket from './Basket'
import reducer from '../../redux/reducer/basketReducer';
export default function Shop() {
   
    return (
        <div className="page">
            <Head/>
           <Pizza />
           <div className="row">
                <div className="col-8">
                    <Products/>
                </div>
                <div className="col-4 mt-3">
                    <Basket/>
                </div>
            </div>
           <Footer />
           
        </div>
    )
}
