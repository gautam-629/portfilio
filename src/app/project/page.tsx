"use client"
import React, { useState } from 'react'
import ProjectNavbar from '../components/ProjectNavbar'
import { projects as  projectsData} from '@/data'
import { Category } from '@/types'
import ProjectCard from '../components/ProjectCards'
const Page = () => {
  const [projects,setProjects]=useState(projectsData);
  
const  handlerFilterCategory=(category: Category | "all")=>{
   console.log(category);
  if (category === "all") {
    setProjects(projectsData);
 
    return;
  }

    const newArray=projects.filter((project)=>
         project.category.includes(category)
    )
    console.log(newArray);
    setProjects(newArray);
  
}
  return (
    <>
      <div className='px-5 py-2 overflow-y-scroll'>
        <ProjectNavbar
         handlerFilterCategory={handlerFilterCategory}
        />
         <div className="relative grid grid-cols-12 gap-4 my-3">
        {projects.map((project) => (
          <div key={project.name} className=" text-text_color col-span-2 p-2 bg-tersory_background rounded-lg">
            <ProjectCard project={project} key={project.name} />
          </div>
        ))}
      </div>
      </div>
    </>
  )
}

export default Page