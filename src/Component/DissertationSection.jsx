import { useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import img from '../assets/hero.jpg';

const DissertationSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,          
      easing: 'ease-out',
      offset: 100,
      disable: false,       
    });

    AOS.refresh();
  }, []);

  return (
    <section className="px-4 py-16 md:px-20 bg-white text-gray-800 overflow-x-hidden">
      <div className="grid md:grid-cols-3 gap-12 items-stretch">
        {/* Left Side */}
        <div className="md:col-span-2 flex flex-col justify-between space-y-6" data-aos="fade-right">
          {/* Text Block */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Welcome to <br />
              <span className="text-blue-600">Support Aid Network</span>
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We are dedicated to providing essential support and resources to individuals in need across the
              United States. Our mission is to empower those facing challenges by offering mobility aids,
              scholarships, and community support. Join us in making a difference in the lives of many.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              We believe that everyone deserves access to the resources they need to thrive. The support we
              provide is just the beginning of our commitment to fostering a more inclusive society.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition">
              <Link to="/about">Learn More</Link>
              
            </button>
          </div>

          {/* Image Block */}
          <div className="flex-grow mt-6" data-aos="zoom-in">
            <img
              src={img}
              alt="Community support"
              className="w-full h-60 object-cover rounded-lg shadow-md"
              style={{ minHeight: '280px' }}
            />
          </div>
        </div>

        {/* Right Side - Program Info */}
        <div className="bg-blue-100 p-6 rounded-xl shadow-lg space-y-6 h-full" data-aos="fade-left">
          <h3 className="text-xl font-bold text-blue-800 mb-2">PROGRAM INFORMATION</h3>
          {[
            {
              title: 'Eligibility Criteria',
              items: [
                'U.S. citizen or eligible resident',
                'Individuals with disabilities or mobility limitations',
              ],
            },
            {
              title: 'How to Apply',
              items: [
                'Fill out our online application form',
                'Provide required documentation and information',
                'Wait for verification and approval',
              ],
            },
            {
              title: 'Benefits',
              items: [
                'Access to essential mobility aids',
                'Improved quality of life and independence',
                'Support from our dedicated team',
              ],
            },
          ].map((section, idx) => (
            <div key={idx} className="border-b border-blue-300 pb-4" data-aos="fade-up" data-aos-delay={idx * 100}>
              <h4 className="font-semibold text-lg text-blue-800 mb-2">{section.title}</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <FaCheckCircle className="text-blue-500 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Cards */}

<div className="mt-16 grid md:grid-cols-2 gap-8">
  {[
    {
      title: 'APPLY FOR MOBILITY AID',
      text: 'Are you or a loved one in need of mobility assistance? Our program provides free or low-cost mobility aids, such as wheelchairs, walkers, and prosthetic devices, to eligible individuals in the United States.',
      link: '/mobility', // Your route for Mobility Aid
    },
    {
      title: 'APPLY FOR SCHOLARSHIP',
      text: 'Are you a student in need of financial assistance? Our scholarship program offers support to eligible students pursuing higher education.',
      link: '/empowerment', // Your route for Scholarship (create this route if not yet done)
    },
  ].map((item, idx) => (
    <div
      key={idx}
      className="bg-blue-600 text-white p-8 rounded-xl space-y-4"
      data-aos="zoom-out"
      data-aos-delay={idx * 150}
    >
      <h4 className="text-xl font-bold">{item.title}</h4>
      <p className="text-sm">{item.text}</p>
      <Link
        to={item.link}
        className="inline-block bg-white text-blue-700 font-semibold px-5 py-2 rounded-full hover:bg-gray-100 transition"
      >
        Apply Now
      </Link>
    </div>
  ))}
</div>

    </section>
  );
};

export default DissertationSection;
