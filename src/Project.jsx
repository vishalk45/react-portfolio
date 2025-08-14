import React from 'react'
import ProjectCard from './components/ProjectCard';


const Project = () => {
      const projects = [
    {
      name: "WanderMap - Travel Blog",
      image: "https://media.istockphoto.com/id/1971796553/photo/young-couple-is-standing-at-mountain-top-with-great-view.jpg?s=612x612&w=0&k=20&c=SRfYHbtg53JPuRiM9LP5bD5_BKB-V4z4ttLbZoaygjc=",
      link: "https://wander-map-with-react-js-4883.vercel.app/",
    },
    {
      name: "School Website",
      image: "https://media.istockphoto.com/id/1409722748/photo/students-raising-hands-while-teacher-asking-them-questions-in-classroom.jpg?s=612x612&w=0&k=20&c=NbVChOV9wIbQOhUD6BqpouZHHBbyQ2rkSjaVfIhpMv8=",
      link: "https://udayanpublicschool.org/",
    },
    {
      name: "SkillNation - Learning Platform",
      image: "/assets/skill.png",
      link: "https://skillsnation.in/",
    },
    {
      name: "Fashio E-Commerce",
      image: "https://cdn.pixabay.com/photo/2016/11/22/19/08/hangers-1850082_640.jpg",
      link: "https://vishalk45.github.io/fashion-design/",
    },
    {
      name: "SkyWings - flight travel agency",
      image: "https://cdn.pixabay.com/photo/2016/04/30/08/35/aircraft-1362586_640.jpg",
      link: "https://vishalk45.github.io/travel-website/",
    },
    {
      name: "Via-Tours - Travel Agency",
      image: "https://cdn.pixabay.com/photo/2019/03/30/16/51/via-della-conciliazione-4091516_640.jpg",
      link: "https://travel-web-react-38i8.vercel.app/",
    },
    {
      name: "Password Generator using React",
      image: "/assets/password-gen.png",
      link: "https://password-gen-react-iota.vercel.app/",
    },
    {
      name: "To-Do List App using React",
      image: "/assets/todo-list.png",
      link: "https://todo-list-react-js-olive.vercel.app/",
    },
    {
      name: "Portfolio Website",
      image: "https://cdn.pixabay.com/photo/2019/03/06/10/51/iphone-x-4038013_640.jpg",
      link: "https://react-portfolio-vgv8.vercel.app/",
    },

  ];
  return (
    <>
    
     <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div id='project-sec' className="w-[90%] mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-14 text-gray-800">
          🚀 My Creative Projects
        </h2>

        {/* Project Grid */}
        <div id='projectgrid' className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
    
    </>
  )
}

export default Project