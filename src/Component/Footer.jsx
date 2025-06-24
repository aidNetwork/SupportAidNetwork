import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGoogle } from 'react-icons/fa';
import { FiPhone, FiMail } from 'react-icons/fi';
import logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800">
      {/* Newsletter Section */}
      <div className="bg-blue-600 text-white rounded-xl mx-4 md:mx-20 mt-10 p-8 md:p-12 text-center shadow-lg">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Subscribe to our newsletter to get updates to our latest collections
            </h2>
            <p className="text-sm text-blue-100">
              Get 20% off on your first order just by subscribing to our newsletter
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 bg-white rounded-full text-black outline-none"
            />
            <button className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-full">
              Subscribe
            </button>
          </div>
        </div>
        <p className="text-xs text-blue-100 mt-4">
          You will be able to unsubscribe at any time. Read our privacy policy{' '}
          <Link to="/privacy-policy" className="underline cursor-pointer">here</Link>.
        </p>
      </div>

      {/* Footer Main Section */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 px-6 md:px-20 py-12">
        {/* Logo and Intro */}
        <div className="md:col-span-1">
          <img src={logo} alt="Logo" className="w-32 h-auto mb-4" />
          <p className="text-sm text-gray-600">
            Support Aid Network (SAN) does not discriminate on the basis of race, color, national origin, sex, religion, age, or disability in employment or provision of services.
          </p>
          <div className="flex gap-4 mt-4 text-gray-600 text-lg">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="cursor-pointer hover:text-blue-600" />
            </a>
            <a href="https://x.com/socialaidnetorg?s=20" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="cursor-pointer hover:text-blue-600" />
            </a>
            <a href="https://www.instagram.com/social_aid_network?igsh=MWJmeGN2aTBhdmN1ZA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="cursor-pointer hover:text-pink-500" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="cursor-pointer hover:text-blue-800" />
            </a>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
              <FaGoogle className="cursor-pointer hover:text-red-500" />
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-bold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/services" className="hover:underline">Services</Link></li>
            <li><Link to="/our-work" className="hover:underline">Our Work</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-bold mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a></li>
            <li><a href="https://x.com/socialaidnetorg?s=20" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a></li>
            <li><a href="https://www.instagram.com/social_aid_network?igsh=MWJmeGN2aTBhdmN1ZA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a></li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-bold mb-4">Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/mobility" className="hover:underline">Mobility Aid</Link></li>
            <li><Link to="/empowerment" className="hover:underline">Empowerment</Link></li>
            <li><Link to="/services" className="hover:underline">Service</Link></li>
            <li><Link to="/" className="hover:underline">Home</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FiPhone />+1 520-762-6638
            </li>
            <li className="flex items-center gap-2">
              <FiMail /> aidnetwork00@gmail.com
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t text-center py-4 text-sm text-gray-500">
        © Copyright by Support Aid Network. All rights reserved.
        <div className="mt-2 flex justify-center gap-4 text-xs flex-wrap">
          <Link to="/privacy-policy" className="cursor-pointer hover:text-black">Privacy Policy</Link>
          <Link to="/terms" className="cursor-pointer hover:text-black">Terms of Use</Link>
          <Link to="/legal" className="cursor-pointer hover:text-black">Legal</Link>
          <Link to="/sitemap" className="cursor-pointer hover:text-black">Site Map</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
