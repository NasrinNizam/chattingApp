import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IoIosLogIn } from "react-icons/io";

export const Navbar = () => {
  return (
    <>
    <nav className="bg-[#074173] h-screen w-[200px] px-5 flex flex-col justify-between ">
      <div className="mt-5 ">
        <h1 className='text-white text-[35px] font-sevillana font-bold '>Chatify</h1>
      </div>
      <div className="main">
        <ul className="flex-col flex gap-4">
          <li><NavLink to="/" className={({ isActive }) => isActive ? " text-[18px] text-white font-medium bg-slate-400 px-3 py-1 rounded-lg " : " text-[18px] text-white font-normal "}> Profile</NavLink></li>
          <li><NavLink to="/friendPage" className={({ isActive }) => isActive ? " text-[18px] text-white font-medium bg-slate-400 px-3 py-1 rounded-lg " : " text-[18px] text-white font-normal "}>Friends</NavLink></li>
          <li><NavLink to="/chatPage" className={({ isActive }) => isActive ? " text-[18px] text-white font-medium bg-slate-400 px-3 py-1 rounded-lg " : " text-[18px] text-white font-normal "}>Massages</NavLink></li>
        </ul>
      </div>
      <div className="mb-5 flex flex-col gap-3 ">
        <div className="div">
          <div className="w-[80px] h-[80px] rounded-full ">
            <img className='w-full h-full rounded-full ' src="images/98.jpg" alt="photo" />
          </div>
          <h4 className="text-white  ">Nasrin Sultana</h4>
        </div>
        <Link to="#" className='text-white flex items-center gap-2' >Log Out <IoIosLogIn />        </Link>
      </div>
    </nav>
    </>
  )
}
