import React from 'react'
import { NavLink } from 'react-router-dom'

const Hero = () => {
    return (
        <div className="flex flex-col items-center text-center p-6">
            <img
                className="w-9/10 rounded-[50px] mx-auto"
                src="https://static.nike.com/a/images/f_auto/dpr_1.1,cs_srgb/h_2148,c_limit/24c4cdf6-9cdf-4aa6-8c9a-89dbd8b866d0/nike-just-do-it.jpg"
                alt="LeBron XXII 'The Limelight'"
            />
            <h1 className="h1-block pt-4 font-bold text-5xl md:text-7xl my-4 w-2/5 break-words">
                LEBRON XXII 'THE LIMELIGHT'
            </h1>
            <p className="para-block text-lg md:text-xl max-w-md">
                Bring the pressure no matter how large the stage in the latest colourway from the King.
            </p>
            <NavLink to='/collection'>
                <button className="mt-6 px-6 py-3 rounded-full bg-black text-white font-semibold text-lg flex items-center gap-3 hover:bg-gray-800 transition-all cursor-pointer">
                    <span>Shop</span>
                </button>
            </NavLink>
        </div>
    )
}

export default Hero