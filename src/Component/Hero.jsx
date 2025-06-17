import { useEffect, useState } from 'react';
import img1 from '../assets/hero.jpg';
import img2 from '../assets/hero1.jpg';
import img3 from '../assets/hero2.jpg';
import { Link, useNavigate } from 'react-router-dom';

const slides = [
  {
  title: "Empowering with",
  category: "Support Aid Network",
  type: "Non-Profit Organization",
  highlight: "COMPASSION",
  description: "We stand beside the forgotten and overlooked, offering hope, skills, and dignity to rebuild lives with purpose and pride. Together, we can create a world where every individual has the opportunity to thrive.",
  button: "Discover More",
  bg: `${img1}`,
},
{
  title: "Delivering",
  highlight: "LIFE-CHANGING SUPPORT",
  category: "Support Aid Network",
  type: "Community Outreach",
  description: "Through education, mobility, and empowerment, we help the less privileged break barriers and step into brighter futures. Join us in our mission to uplift lives and transform communities.",
  button: "Learn More",
  bg: `${img2}`,
},
{
  title: "Creating",
  highlight: "PATHWAYS TO FREEDOM",
  category: "Support Aid Network",
  type: "Empowerment Programs",
  description: "With every act of kindness and opportunity shared, we open doors to independence, inclusion, and a life worth dreaming about. Together, we can make a difference that lasts.",
  button: "Explore Now",
  bg: `${img3}`,
}

];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(false); 
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setAnimating(true); 
      }, 200); 
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const navigate = useNavigate()
  return (
    <div className="relative h-[90vh] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out transform ${
            i === current ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'
          }`}
          style={{
            backgroundImage: `url(${slide.bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-0" />

          {/* Animated Content */}
          <div
            className={`relative z-10 flex flex-col justify-center items-start h-full px-10 text-white transition-all duration-1000 ease-out
              ${i === current && animating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
          >
            <span className="text-sm font-semibold bg-white text-black px-3 py-1 rounded-full mb-4">
              {slide.category}  <span className="text-blue-600"> | {slide.type} </span>
            </span>
            <h1 className="text-5xl md:text-6xl font-light leading-tight">
              {slide.title}{' '}
              <span className="font-bold block">{slide.highlight}</span>
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/90">
              {slide.description}
            </p>
            <button onClick={() => navigate("/about")} className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-500 transition">
              <Link to={"/about"}>
              {slide.button}
              </Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
