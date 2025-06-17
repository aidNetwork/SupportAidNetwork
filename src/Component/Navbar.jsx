import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programmeOpen, setProgrammeOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Our Work', path: '/our-work' },
    { name: 'Our Programme', dropdown: true },
    { name: 'Contact Us', path: '/contact' },
  ];

  const programmeLinks = [
  { name: 'Empowerment', path: '/empowerment' },
  { name: 'Mobility Support', path: '/mobility' },
];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.4s ease-out forwards;
          }
        `}
      </style>

      <nav className={`bg-gray-100 py-4 px-4 fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`}>
        <div className="container mx-auto flex items-center justify-between px-2 sm:px-4">
          <Link to="/" className="flex items-center justify-center">
            <img src={logo} alt="Logo" className="h-10 w-auto object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-6 relative">
            {navLinks.map((link) =>
              link.dropdown ? (
                <li key={link.name} className="relative group">
                  <button
                    className="flex items-center font-semibold text-2xl text-black hover:text-blue-800 transition"
                    onClick={() => setProgrammeOpen(!programmeOpen)}
                  >
                    {link.name}
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </button>
                  {programmeOpen && (
                    <ul className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-md w-56 py-2 z-50">
                      {programmeLinks.map((sublink) => (
                        <li key={sublink.name}>
                          <Link
                            to={sublink.path}
                            onClick={() => setProgrammeOpen(false)}
                            className="block px-4 py-2 hover:bg-gray-100 font-semibold text-2xl text-black"
                          >
                            {sublink.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className={`font-semibold text-2xl hover:text-blue-800 transition ${
                      location.pathname === link.path ? 'text-blue-600' : 'text-black'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              )
            )}
          </ul>

          <button
            onClick={() => navigate('/contact')}
            className="hidden lg:block border border-blue-600 text-[#232755] font-semibold px-6 py-2 rounded-full hover:bg-blue-50 transition"
          >
            Get in Touch
          </button>

          {/* Mobile menu icon */}
          <div className="lg:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Fullscreen */}
        <div
          className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-white z-40 px-6 py-10 transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <button className="absolute top-5 right-6" onClick={() => setMobileMenuOpen(false)}>
            <X size={24} />
          </button>

          <ul className="flex flex-col gap-6 mt-12">
            {navLinks.map((link, idx) =>
              link.dropdown ? (
                <li
                  key={link.name}
                  className="opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${idx * 100}ms`, animationFillMode: 'forwards' }}
                >
                  <div
                    onClick={() => setProgrammeOpen(!programmeOpen)}
                    className="flex items-center justify-between text-2xl font-semibold cursor-pointer text-black"
                  >
                    {link.name}
                    <ChevronDown className="ml-2 w-5 h-5" />
                  </div>
                  {programmeOpen && (
                    <ul className="mt-2 pl-4 flex flex-col gap-2">
                      {programmeLinks.map((sublink) => (
                        <li key={sublink.name}>
                          <Link
                            to={sublink.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-black font-semibold text-xl"
                          >
                            {sublink.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li
                  key={link.name}
                  className="opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${idx * 100}ms`, animationFillMode: 'forwards' }}
                >
                  <Link
                    to={link.path}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`font-semibold text-2xl ${
                      location.pathname === link.path ? 'text-blue-600' : 'text-black'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              )
            )}
            <li
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${navLinks.length * 100}ms`, animationFillMode: 'forwards' }}
            >
              <Search className="w-5 h-5 cursor-pointer" />
            </li>
          </ul>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              navigate('/contact');
            }}
            className="mt-6 w-full border border-blue-600 text-black font-semibold px-4 py-2 rounded-full hover:bg-blue-50 transition opacity-0 animate-fade-in-up"
            style={{ animationDelay: `${(navLinks.length + 1) * 100}ms`, animationFillMode: 'forwards' }}
          >
            Get in Touch
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
