import React, { use } from "react";
import { assets } from "../assets/assets";
import { useContext } from "react";
import { AppContext } from "../context/Appcontext"; 

const Header = () => {
    const {userData} =useContext(AppContext);
    return (
        <div className="flex flex-col items-center mt-20 px-4 text-center text-gray-800">
            <img src={assets.header_img} alt="" className="w-36 h-36 rounded-full mb-6"/>

            <h1 className="flex items-center gap-2 text-xl sm:text-3xl font-medium mb-2">Hey &nbsp; {userData ? userData.name:'Developer'}  ! <img className="w-8 aspect-square" src={assets.hand_wave} alt="" /></h1>
            
            <h2 className="text-3xl sm:text-5xl font-semibold mb-4">Welcome to our app</h2>

            <p className="mb-8 max-w-md">Lets start with the quick product tour and we will have you up and running in no time!</p>
            
            <button className="border border-gray-500 text-gray-800 rounded-full px-8 py-2.5 hover:bg-gray-100 transition-all cursor-pointer">Get Started</button>

            </div>
        
    );
}       

export default Header;