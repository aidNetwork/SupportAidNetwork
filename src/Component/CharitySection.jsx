import React, { useEffect } from 'react';
import { FaWater, FaBook, FaUtensils, FaCheckCircle } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img from '../assets/water.jpg'; 
import img2 from '../assets/hero1.jpg';   
import img3 from '../assets/education.jpg';    
import { Link } from 'react-router-dom';

const CharitySection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
      disable: window.innerWidth < 640  
    });
  }, []);

  return (
    <div className="p-6 md:p-12 bg-gradient-to-br from-blue-50 to-white text-blue-900 space-y-16">
      
      {/* Top Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: 'Clean Water',
            text: 'Donation for Clean Water to the needy.',
            icon: <FaWater className="text-4xl text-blue-600" />,
            img: `${img}`
          },
          {
            title: 'Education',
            text: 'Donation to support education.',
            icon: <FaBook className="text-4xl text-blue-600" />,
            img: `${img3}`
          },
          {
            title: 'Healthy Food',
            text: 'Donation for Healthy Food for the poor.',
            icon: <FaUtensils className="text-4xl text-blue-600" />,
            img: `${img2}`
          },
        ].map((item, idx) => (
          <div 
            key={idx}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            data-aos="fade-up"
            data-aos-delay={idx * 200}
          >
            <img src={item.img} alt={item.title} className="w-full h-52 object-cover" />
            <div className="p-5 space-y-3">
              <div className="flex items-center gap-2">
                {item.icon}
                <h4 className="text-lg font-semibold">{item.title}</h4>
              </div>
              <p className="text-sm text-blue-700">{item.text}</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
                <Link to="/our-work">
                  Read More
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Main About Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left overlapping images */}
        <div 
          className="relative w-full flex justify-center items-center"
          data-aos="fade-up"
        >
          <div className="relative w-full max-w-sm md:max-w-full">
            <img
              src={img}
              alt="Charity 1"
              className="rounded-xl w-full shadow-lg"
            />
            <img
              src={img2}
              alt="Charity 2"
              className="rounded-xl w-2/3 shadow-xl absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 border-4 border-white"
            />
          </div>
        </div>

        {/* Right content */}
        <div data-aos="fade-up">
          <h3 className="text-sm font-bold text-blue-500 uppercase mb-2 tracking-wider">About Support Aid Network </h3>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-snug">
            Empowering Lives Through Compassionate Support
          </h2>
          <p className="text-base text-blue-700 mb-6">
            Support Aid Network (SAN) is a non-profit organization dedicated to providing essential support and resources to those in need. Our mission is to empower communities through education, healthcare, and sustainable development initiatives. We believe that every individual deserves access to basic necessities and opportunities for a better life. The support we provide is just the beginning of our commitment to fostering a more inclusive society. Join us in making a difference in the lives of many.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-sm">
            {[
              'Charity For Education',
              'Charity For Pets',
              'Charity For Medical Health',
              'Charity For Church',
              'Charity For Clean Water',
              'Charity For Children',
            ].map((point, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <FaCheckCircle className="text-blue-600" />
                <span>{point}</span>
              </div>
            ))}
          </div>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
            <Link to="/our-work">
              Learn More
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharitySection;
