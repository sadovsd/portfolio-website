import React from 'react';
import PROJECTS from '../../data/projects';
import { Link } from 'react-router-dom';



// Make each project card 5 or 6 lines each. Its more beauty when they all have same 

// in website readmore, talk about my website design philosphy - tokyo font cuz japs are savages and make everything with a purpose and with
// craftmanship, and with thought. My website was constructed that way. 

// in website readmore, alos mention my one 'tato relative' (ask tato again) who was an absolute beast and smart af by copying
// the work of other masters to build his skills. Talk about it in my vid

// add that I build my portfolio website with the purpose of helping others learn - helping htem blast throught mental hurdles and procrastination.

// have a progress timeline thing for the major roadblocks I had to overcome for each project

// make new youtube channel where I post my project description vids. maybe make the banal ones like CPI viewer private. name:?? explainskyy haha

// relagate for future when I stumble upon more clarity- the popup effect is kinda wack and not 'mature/proffesional'

//website page 'goal': make a website that looks proffesional, sleek, etc



// This is an example of a component built using stateless functional components, contrasting to the Resume component
const Project = props => {

    const { id, title, date, tags, image, description, technologies, hasApp } = props.project;
    return (
        <div className=' relative flex flex-col items-center rounded-2xl w-[37rem] overflow-hidden shadow-md transition-all duration-100 transform-gpu hover:-translate-y-2 hover:shadow-lg'>
            <img className='h-[22rem] mt-4' src={image} alt='profile'></img>
            <div className='w-[33rem] mt-8 mb-28 text-left'>
                <h2>{title}</h2>


                <div className="mt-4 flex">
                    <div className="flex items-center mr-10">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            stroke-width="2" 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            class="feather feather-clock w-5 h-5">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        <span className="ml-2 leading-none">{date}</span>
                    </div>
                    <div 
                        class="flex items-center">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            stroke-width="2" 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            class="feather feather-tag w-5 h-5">
                            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                            <line x1="7" y1="7" x2="7.01" y2="7"></line>
                        </svg>
                        <span className="ml-2 leading-none">{tags}</span>
                    </div>
                </div>


                <p className="mt-8">{description}</p>

                <div className='mt-4 flex flex-wrap'>
                    <p className='font-semibold mr-2'>Technologies Used: </p>
                    {technologies.map((technology, index) => (
                        <span key={index} className=" bg-gray-200 not-italic rounded-full px-3 py-1 text-[12px] font-normal text-gray-800 mr-2 mb-2">
                            {technology}
                        </span>
                    ))}
                </div>
            </div>

            <Link to={`/projects/project${id}`} className={`absolute bottom-8 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg ${hasApp ? 'left-[95px]' : ''}`}>
                See More
            </Link>
            {hasApp ? 
            <button className="absolute bottom-8 right-[95px] bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg border border-gray-200">
                Use App
            </button> : ''}
        </div>
    )
}

// if a component has only a return and nothing outside of it, then we can use an 'inline' return as shown below
const Project4 = () =>  (
    <div className='container mt-20 mb-20'>
        <h1 className=''>Highlighted Projects</h1>
        <div className='flex mt-7 justify-center'>
            <h3 className='mr-2'>Just some projects I split my</h3>
            <h3 className='text-blue-500 mr-2'>scrotum</h3>
            <h3>on</h3>
        </div>
        <div className='mt-40 mx-10 grid grid-rows-2 items-start place-items-center grid-cols-3 gap-12'>
            {PROJECTS.map((project, id) => (
                <Project 
                    key={id} 
                    project={project} 
                />
            ))}
        </div>
    </div>
)


export default Project4;