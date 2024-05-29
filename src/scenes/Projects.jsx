import React, { useState } from 'react';
import LineGradient from '../components/LineGradient';
import { motion } from 'framer-motion';

const projectsData = [

  {
    title: "Slack Clone",
    description: "Slack 2.0 ✨ with React, Redux, Cloud Firestore, classNamed Components, Firebase Hooks &amp;amp; React spinkit for loading animations allowing users to add channels and chat in realtime.",
    image: "https://i.pcmag.com/imagery/reviews/07td46ju7p6lLVb0QGwc5VF-6..v1569479844.jpg",
    link: "https://slack-clone-fd321.web.app/",
    category: "Full Stack",
    techstack:"React Redux Firebase / Tailwindcss"
  },
  
  {
    title: "Travel App",
    description: "Developed a React Native application with Firebase backend, incorporating user authentication, real-time database interactions, map functionality, and cloud storage. Implemented real-time chat functionality and utilized React Navigation for seamless navigation",
    image: "https://jaganportfolio.vercel.app/static/media/project5.f78aa3fd070fc4dd0bd1.jpg",
    link: "https://drive.google.com/file/d/1GxloKT5xCxgnCc9mlzshv_K-jX9Mn9_N/view",
    category: "Mobile App",
    techstack:"React Native Firebase / css"
  },
  {
    title: "Snap Chat Clone",
    description: "Snapchat clone using react-webcam 📸, react-countdown ⏰, cloud firestore, storage, and firebase authentication",
    image: "https://jagan-web.web.app/static/media/sanpchat.fbfb9aed.png",
    link: "https://snap-chat-clone-85f14.web.app/",
    category: "Front End",
    techstack:" React Firebase"
  },
  {
    title: "Filter Ecommerce",
    description: "This is a Filter e-commerce website where users can filter products by color, gender, price, and type.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=870&amp;q=80",
    link: "https://filter-ecommerce.vercel.app/",
    category: "Front End",
    techstack:"React Context Api / Tailwincd css"
  },
  {
    title: "Movie App",
    description: "Movie App with React, Context Api and filter options and animations with all Genres and Search Functionality and Filter movie",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1170&amp;q=80",
    link: "https://movieweb-ten-sepia.vercel.app/",
    category: "Front End",
    techstack:"React Axios / Tailwind css"
  },
  {
    title: "Full Stack Ecommerce",
    description: "Full Stack Ecommerce with Next Js, Redux, Node, Express, MongoDB Login and sign up and payment method",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1170&amp;q=80",
    link: "https://ecommerce-virid-beta.vercel.app/",
    category: "Full Stack",
    techstack:"Next Js Monogo db / Tailwind css"
  },
  {
    title: "Coming Soon",
    description: "Coming Soon",
    image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=802&amp;q=80",
    link: "#",
    category: "Block Chain"
  }
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filterProjects = () => {
    if (selectedCategory === "All") {
      return projectsData;
    }
    return projectsData.filter(project => project.category === selectedCategory);
  };

  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">PROJECTS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            Here are some of my favorite projects that I've worked on
          </p>
        </motion.div>
      </div>

      {/* FILTER BUTTONS */}
      <div className="w-full flex gap-2 flex-wrap mt-5 opacity: 1; transform: none;">
        {["Front End", "Full Stack", "Mobile App", "Block Chain", "All"].map(category => (
          <span
            key={category}
            className={`bg-gradient-rainblue cursor-pointer text-deep-blue rounded-lg px-3 py-1 font-semibold
              hover:bg-blue hover:text-white transition duration-500 ${selectedCategory === category ? "bg-blue text-white" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </span>
        ))}
      </div>

      {/* PROJECTS */}
      <div className="flex justify-around mb-4">
        <div>
          <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            {filterProjects().map((project, index) => (
              <div key={index} className="opacity: 1; transform: none;">
                <a className="block" href={project.link}>
                  <img className="object-cover w-full h-56 shadow-xl rounded-xl" src={project.image} alt={project.title} />
                  <div className="p-4">
                    <h5 className="text-xl font-bold text-white ">{project.title}</h5>
                    <p className="mt-2 text-white ">{project.description}</p>
                    <p className='mt-5 text-white'> Tech Stack :  <span className='  text-yellow  cursor-pointer '> {project.techstack}</span></p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
