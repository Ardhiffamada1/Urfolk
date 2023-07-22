import React from "react"
import {HiOutlineShoppingBag} from 'react-icons/hi'
import { GrFavorite } from "react-icons/gr";
import {BiUserCircle} from 'react-icons/bi'

const Navuser = () => {
    return(
        
        <div className='p-3 hidden sm:block md:block'>
        <button className='absolute right-16 px-5 py-2'><GrFavorite size={22} /></button>
        <button className='absolute right-9 px-4 py-2'><HiOutlineShoppingBag size={24} /></button>
        <button className='absolute right-1 px-4 py-2'><BiUserCircle size={25} /></button>
       </div>
    ) 
}

export default Navuser