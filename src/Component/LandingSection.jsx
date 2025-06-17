import React, { useEffect } from 'react';
import {
  FaHandsHelping,
  FaWheelchair,
  FaChalkboardTeacher,
  FaPeopleCarry,
  FaAccessibleIcon,
  FaLightbulb,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function LandingSection() {
  const stats = [
    { value: '1200+', label: 'Lives Positively Impacted' },
    { value: '15+', label: 'Years of Community Service' },
    { value: '85+', label: 'Mobility Aids Distributed Monthly' },
    { value: '300+', label: 'Active Volunteers Nationwide' },
  ];

  const services = [
    {
      title: 'Community NGO Support',
      icon: <FaHandsHelping size={30} />,
      description:
        "We collaborate with local NGOs to ensure resources reach those in need efficiently and transparently. Building strong community partnerships is at the heart of our work.",
    },
    {
      title: 'Disability & Mobility Aid',
      icon: <FaWheelchair size={30} />,
      description:
        "Providing essential mobility aids and support services to empower individuals with disabilities. Our mission is to enhance freedom and independence for all.",
    },
    {
      title: 'Youth Empowerment',
      icon: <FaChalkboardTeacher size={30} />,
      description:
        "Offering educational programs and skill-building workshops to prepare young people for a successful future. We believe in unlocking potential through knowledge.",
    },
    {
      title: 'Volunteer Programs',
      icon: <FaPeopleCarry size={30} />,
      description:
        "Engaging passionate volunteers in meaningful activities that create lasting impact. Join us to contribute your time and talents to the community.",
    },
    {
      title: 'Accessible Mobility',
      icon: <FaAccessibleIcon size={30} />,
      description:
        "Developing innovative solutions that improve accessibility for everyone. Our focus is on creating inclusive environments that break down barriers.",
    },
    {
      title: 'Skills & Innovation',
      icon: <FaLightbulb size={30} />,
      description:
        "Encouraging creativity and technical skills through workshops and innovation hubs. We foster an environment where ideas turn into real-world impact.",
    },
  ];

  useEffect(() => {
    function handleScroll() {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.85) {
          el.classList.add('opacity-100', 'translate-y-0');
          el.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }

    // Trigger once in case some elements are visible on load
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black text-white font-sans overflow-x-hidden">
      {/* Top Section */}
      <div className="grid md:grid-cols-2 bg-blue-600 text-white px-6 py-16 md:px-16 gap-10 max-w-screen-xl mx-auto">
        <div className="flex flex-col justify-center fade-in opacity-0 translate-y-10 transition duration-700 ease-out">
          <h2 className="text-4xl font-extrabold mb-4 leading-snug">
            15+ Years of Transforming Lives
          </h2>
          <p className="mb-6 text-lg leading-relaxed">
            Dedicated to empowering underserved communities through mobility support, skills development, and inclusive programs that create lasting impact.
          </p>
          <button className="bg-white text-blue-600 font-semibold px-6 py-2 w-fit rounded hover:bg-gray-200 transition">
            <Link to={"/contact"}>Join Our Mission</Link>
            
          </button>
        </div>
        <div className="grid grid-cols-2 gap-6 text-black fade-in opacity-0 translate-y-10 transition duration-700 ease-out">
          {stats.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold">{item.value}</h3>
              <p className="text-sm mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="px-6 md:px-16 py-20 text-center bg-white text-black max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-blue-600 fade-in opacity-0 translate-y-10 transition duration-700 ease-out">
          Our Core Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 hover:bg-blue-50 text-black rounded-xl p-6 shadow transition fade-in opacity-0 translate-y-10 duration-700 ease-out"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="mb-4 text-blue-600 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid md:grid-cols-2 bg-blue-600 text-white px-6 py-16 md:px-16 gap-10 max-w-screen-xl mx-auto">
        <div className="flex flex-col justify-center fade-in opacity-0 translate-y-10 transition duration-700 ease-out">
          <h3 className="text-xl font-bold mb-2 uppercase tracking-wider">Our Commitment</h3>
          <p className="text-3xl font-semibold mb-4 leading-snug">
            Empowering Lives, One Step at a Time
          </p>
          <p className="text-sm leading-relaxed">
            We are dedicated to creating accessible opportunities, supporting persons with disabilities, and driving social change through inclusive programs.
          </p>
          <button className="bg-white text-blue-600 px-6 py-2 mt-6 font-semibold w-fit rounded hover:bg-gray-200 transition">
            Get Involved
          </button>
        </div>
        <div className="bg-white text-black p-6 md:p-8 rounded-lg shadow-md fade-in opacity-0 translate-y-10 transition duration-700 ease-out">
          <h3 className="text-xl font-bold mb-4">Why Partner With Us</h3>
          <ul className="list-disc list-inside space-y-3 text-sm text-gray-700">
            <li>Community-Centered Programs</li>
            <li>Transparent Operations</li>
            <li>Inclusive Mobility Solutions</li>
            <li>Empowerment Through Skills</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
