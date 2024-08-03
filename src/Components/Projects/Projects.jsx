import React from 'react'
import ProjectsItems from './ProjectsItems'
import item1 from '../../assets/e41a19d7fc8dd60d0239d3ad17822e7f.jpg';
import item2 from '../../assets/45b5d9a605445658165b872e705676d1.jpg';
import item3 from '../../assets/ba6962ae2ed9eec26d77df8d5d47f8ef.jpg';
import item4 from '../../assets/4ee747a051e52fe0d8802dc0fd3109b8.jpg'


export default function Projects() {
    return <>
        <div id='projects' className=" max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1 >
            <p className=' text-center py-8'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Natus vel repellat cupiditate et harum,
                repudiandae vero ipsum ea rerum omnis nemo,
                deserunt quaerat, sapiente numquam cumque fugiat
                labore necessitatibus perferendis

            </p>
            <div className=" grid sm:grid-cols-2 gap-12">
                <ProjectsItems img={item1} title='Mode App' />
                <ProjectsItems img={item2} title='Brand App' />
                <ProjectsItems img={item3} title='Quality App' />
                <ProjectsItems img={item4} title='Food APP' />
            </div>
        </div>

    
    
    </>
}
