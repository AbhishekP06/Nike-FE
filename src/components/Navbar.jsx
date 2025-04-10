import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);

    return (
        <div className='flex items-center justify-between py-5 px-6 font-medium'>
            <NavLink to='/'><img className='w-24 pl-6' src="/nike-logo.png" alt="Nike Logo" /></NavLink>

            <ul className='list-block hidden sm:flex gap-7 text-sm text-black'>
                <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                    <p>New and Featured</p>
                </NavLink>
                <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                    <p>Men</p>
                </NavLink>
                <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                    <p>Women</p>
                </NavLink>
            </ul>

            <div className='flex flex-row items-center gap-8 p-8'>
                <NavLink to='/cart' className='relative pb-1'>
                    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" strokeWidth="1.5" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path></svg>
                    <p className='absolute right-[-1px] bottom-[-1px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{totalQuantity}</p>
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar
