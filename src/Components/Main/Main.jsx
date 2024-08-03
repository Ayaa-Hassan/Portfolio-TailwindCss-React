import React from 'react'
 import bg from '../../assets/person-traveling-enjoying-their-vacation.jpg'
import { TypeAnimation } from 'react-type-animation'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
export default function Main() {
    return <>
        <div id='main' className="">
            <img className=' w-full h-screen object-cover  object-left ' src={bg} alt="person traveling" />
            <div className="w-full h-screen absolute top-0 left-0 bg-white/40">
                <div className=" max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center ">
                    <h1 className=' sm:text-5xl text-4xl font-bold text-gray-800'>I'm John Adams</h1>
                    <h2 className=' sm:text-3xl text-2xl pt-4 text-gray-800'>I'm a
                        <TypeAnimation
                            sequence={[
                                
                                'Developer',
                                2000, 
                                'Coder',
                                2000,
                                'Tach Enthusiast',
                                2000,
                                
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '1em', paddingLeft:'5px' }}
                            repeat={Infinity}
                            cursor={true}
                        />

                    </h2>
                    <div className=" flex justify-between pt-6 max-w-[200px] w-full text-gray-900">
                        <FaFacebookF   className=' cursor-pointer' size={20}/>
                        <FaTwitter   className=' cursor-pointer' size={20}/>
                        <FaInstagram   className=' cursor-pointer' size={20}/>
                        <FaLinkedinIn  className=' cursor-pointer' size={20}/>
                    </div>
                </div>
            </div>
    </div>
    
    
    </>
}

