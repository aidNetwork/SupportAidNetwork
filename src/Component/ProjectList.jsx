import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img from "../assets/children.jpg";
import img2 from "../assets/education.jpg";
import img3 from "../assets/foundation.jpg";
import img5 from "../assets/foundation2.jpg";
import img4 from "../assets/environment.jpg";
import img6 from "../assets/benefit.jpg";

const projects = [
  {
    id: 1,
    title: "Help to raise valuable donations for kids",
    category: "Charity",
    type: "Children",
    raised: 24000,
    goal: 50000,
    img: `${img}`,
  },
  {
    id: 2,
    title: "It is a long established fact that a reader",
    category: "Charity",
    type: "Education",
    raised: 18500,
    goal: 40000,
    img: `${img2}`,
  },
  {
    id: 3,
    title: "Smallest of donations can help change a life",
    category: "Charity",
    type: "Foundation",
    raised: 9500,
    goal: 30000,
    img: `${img3}`,
  },
  {
    id: 4,
    title: "The Shameful Story Of Airline Cabin Waste",
    category: "Charity",
    type: "Environment",
    raised: 1040,
    goal: 10000,
    img: `${img4}`,
  },
  {
    id: 5,
    title: "Benefits Earned From Charity Donations",
    category: "Charity",
    type: "Education",
    raised: 3200,
    goal: 15000,
    img: `${img6}`,
  },
  {
    id: 6,
    title: "Charity can help make smile of poor people",
    category: "Charity",
    type: "Foundation",
    raised: 4000,
    goal: 20000,
    img: `${img5}`,
  },
];

const ProjectList = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
      offset: 100,    
    });
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6" data-aos="fade-down">6 Projects Found</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="border rounded-lg overflow-hidden shadow-sm bg-white"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`} 
          >
            <img src={project.img} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="text-sm text-blue-600">{project.category} | {project.type}</div>
              <h3 className="font-bold text-lg text-blue-900 mb-2">{project.title}</h3>
              <div className="text-sm mb-2">Raised: ${project.raised} | Goal: ${project.goal}</div>
              <div className="w-full bg-blue-100 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${(project.raised / project.goal) * 100}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8 space-x-2" data-aos="zoom-in">
        <button className="w-8 h-8 bg-blue-500 text-white rounded">1</button>
        <button className="w-8 h-8 bg-blue-100 text-blue-700 rounded">2</button>
        <button className="w-8 h-8 bg-blue-100 text-blue-700 rounded">&gt;</button>
      </div>

      <div className="bg-blue-900 text-white mt-16 p-8 rounded-lg text-center" data-aos="fade-up">
        <h2 className="text-2xl font-bold mb-4">Don't miss our weekly updates about donations</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your Email Address..."
            className="p-2 rounded w-full text-black bg-white"
          />
          <button className="bg-yellow-400 text-black px-4 py-2 rounded w-full sm:w-auto">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
