import React from 'react'   
import Navuser from './Navuser'
import Logo from '../assets/img/icon.ico'
import {SiNike} from 'react-icons/si' 
import {SiAdidas} from 'react-icons/si'
import {SiPuma} from 'react-icons/si'
import {SiReebok} from 'react-icons/si' 


const Navigation = () => {
    return (
        <nav className='sticky top-0 z-50 bg-white text-earie '>
            <ul className='mx-4 p-2 flex flex-row justify-start gap-1 '>
                <div className='flex items-center mr-6'>
                    <a href="">
                        <img src={Logo} alt="Brand" />
                        <span className='font-semibold text-xl tracking-tight'>URFOLK</span>
                    </a>
                </div>
                <div className='mobile-menu flex lg:hidden mx-72' >
                <label className=" bg-white swap swap-rotate">
                <input type="checkbox" />
                <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="22" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
                <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
                <ul>
                    <li>
                        <a href="">test</a>
                    </li>
                </ul>
                </label>
            </div>
                <li className='p-3 hover:text-pink hidden sm:block md:block'>
                    <a href="">Home
                    </a>
                </li>
                <li className='p-3 hover:text-pink hidden sm:block md:block'>
                    <a href="">New Arrivals
                    </a>
                </li>
                <div className="p-3 dropdown dropdown-hover hidden sm:block md:block ">
                <label tabIndex={0} className="m-1 hover:text-pink ">Brands</label>
                <ul tabIndex={0} className="grid grid-cols-3 dropdown-content menu p-2 shadow bg-white w-96">
                    <li className='hover:text-pink p-4 items-center '><a><SiNike size={55}/></a></li>
                    <li className='hover:text-pink p-4 items-center'><a><SiAdidas size={55} /></a></li>
                    <li className='hover:text-pink p-4 items-center'><a><SiPuma size={55} /></a></li>
                    <li className='hover:text-pink p-4 items-center'><a><SiReebok size={55}/></a></li>
                </ul>
                </div>
                <div className="p-3 dropdown dropdown-hover hidden sm:block md:block ">
                <label tabIndex={0} className="m-1 hover:text-pink">Men's</label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-white w-52">
                    <li className='hover:text-pink'><a>Item 1</a></li>
                    <li className='hover:text-pink'><a>Item 2</a></li>
                </ul>
                </div>
                <div className="p-3 dropdown dropdown-hover hidden sm:block md:block ">
                <label tabIndex={0} className="m-1 hover:text-pink">Woman's</label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-white w-52">
                    <li className='hover:text-pink'><a>Item 1</a></li>
                    <li className='hover:text-pink'><a>Item 2</a></li>
                </ul>
                </div>
                <Navuser />
            </ul>
        </nav>
    )
}

export default Navigation