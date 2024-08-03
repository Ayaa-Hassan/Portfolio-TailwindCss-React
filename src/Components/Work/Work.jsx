import React from 'react'
import WorkItem from './WorkItem';



const workData = [
    {
        year: 2020,
        title: 'Contact Creator',
        duration: '3 Years',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quasi voluptatum non officiis perspiciatis, repellendus fuga cupiditate, aut dicta reprehenderit vitae similique maiores atque, optio minima? Quos explicabo aliquam quo.adipisicing elit. Recusandae, quia! '

    },
    {
        year: 2017,
        title: 'Google',
        duration: '3 Years',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quasi voluptatum non officiis perspiciatis, repellendus fuga cupiditate, aut dicta reprehenderit vitae similique maiores atque, optio minima? Quos explicabo aliquam quo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, quia! '

    },
    {
        year: 2015,
        title: 'Amazon',
        duration: '2 Years',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quasi voluptatum non officiis perspiciatis, repellendus fuga cupiditate, aut dicta reprehenderit vitae similique maiores atque, optio minima? Quos explicabo aliquam quo. '

    },
    {
        year: 2012,
        title: 'Facebook',
        duration: '3 Years',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quasi voluptatum non officiis perspiciatis, repellendus fuga cupiditate, aut dicta reprehenderit vitae similique maiores atque, optio minima? Quos explicabo aliquam quo. '

    },

];


const Work = () => {

    return <>
        <div id='work' className=" max-w-[1040px] m-auto md:pl-20 p-4 py-16 ">
            <h1 className=" text-4xl font-bold text-center text-[#001b5e]">Work </h1>
            {workData.map((item, idx) => (
                <WorkItem
                    key={idx}
                    year={item.year}
                    title={item.title}
                    duration={item.duration}
                    details={item.details}
                />

            ))}
        </div>
  
    </>
};

export default Work;




