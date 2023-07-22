import React, { useEffect, useState } from "react";
import product1 from '../assets/img/product2.png'
import product2 from '../assets/img/product1.png'
import product3 from '../assets/img/product4.jpg'
import product4 from '../assets/img/product5.png'

const Products = () => {
    return(
        <div className="mt-6" >
        <h1 className="m-8 text-center text-earie font-bold text-2xl uppercase">Top Picks Sneakers</h1> 
        <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  mt-12 bg-white">
  <div
    class="relative overflow-hidden cursor-pointer m-4 duration-300 ease-in-out transition-transform transform hover:-translate-y-2">
    <img class="object-cover mx-auto h-80"
      src={product1}
      alt="Air Jordan" />
    <div class="items-center text-center m-3">
      <p class="text-sm font-bold text-earie">Air Jordan XXXVII Low PF</p>
      <p className="text-gray text-sm">Men's</p>
      <p className="text-sm text-earie">290 $</p>
    </div>
  </div>
  <div
    class="relative overflow-hidden cursor-pointer m-4 duration-300 ease-in-out transition-transform transform hover:-translate-y-2">
    <img class="object-cover mx-auto h-80"
      src={product2}
      alt="Air Jordan" />
    <div class="items-center text-center m-3">
      <p class="text-sm font-bold text-earie">Air Jordan 1 Mid SE</p>
      <p className="text-gray text-sm">Men's</p>
      <p className="text-sm text-earie">160$</p>
    </div>
  </div>
  <div
    class="relative overflow-hidden cursor-pointer m-4 duration-300 ease-in-out transition-transform transform hover:-translate-y-2">
    <img class="object-cover mx-auto h-80"
      src={product3}
      alt="Air Jordan" />
    <div class="items-center text-center m-3">
      <p class="text-sm font-bold text-earie">Balenciaga Graffity</p>
      <p className="text-gray text-sm">Men's</p>
      <p className="text-sm text-earie">180 $</p>
    </div>
  </div>
  <div
    class="relative overflow-hidden cursor-pointer m-4 duration-300 ease-in-out transition-transform transform hover:-translate-y-2">
    <img class="object-cover mx-auto h-80"
      src={product4}
      alt="Air Jordan" />
    <div class="items-center text-center m-3">
      <p class="text-sm font-bold text-earie">Adidas Ultraboost</p>
      <p className="text-gray text-sm">Women's</p>
      <p className="text-sm text-earie">180 $</p>
    </div>
  </div>
  </div>
</div>
    )
}

export default Products