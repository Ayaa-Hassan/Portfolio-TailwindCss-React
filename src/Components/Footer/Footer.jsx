import React from 'react'
import { FaHeart } from "react-icons/fa";

export default function Footer() {
    return <>
        <div className=" max-w-[1040px] w-full py-8 m-auto border-t-4">
            <div className=" flex items-center m-auto justify-center">
            
                <FaHeart size={20} className=' text-[#001b5e] mr-2' />
                <h3 className=' text-xl font-bold text-gray-700'>John Adams</h3>
            </div>
        </div>

    </>
}


