import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Preloader from './Component/Preloader';

// Lazy-loaded pages
const Home = lazy(() => import('./Pages/Home'));
const About = lazy(() => import('./Pages/About'));
const Services = lazy(() => import('./Pages/Services')); // Ensure correct import
const OurWork = lazy(() => import('./Pages/OurWork'));
const Contact = lazy(() => import('./Pages/Contact'));
const Empowerment = lazy(() => import('./Programme/Empowerment'));
const Mobility = lazy(() => import('./Programme/Mobility'));

// ScrollToTop with smooth scroll
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
};

const App = () => {
  const location = useLocation();

  return (
    <div>
      <div className="mb-20">
        <Navbar />
      </div>

      <Suspense fallback={<Preloader />}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home key={location.key} />} />
          <Route path="/about" element={<About key={location.key} />} />
          <Route path="/services" element={<Services key={location.key} />} />
          <Route path="/our-work" element={<OurWork key={location.key} />} />
          <Route path="/contact" element={<Contact key={location.key} />} />
          <Route path="/empowerment" element={<Empowerment key={location.key} />} />
          <Route path="/mobility" element={<Mobility key={location.key} />} />
        </Routes>
      </Suspense>

      <Footer />
    </div>
  );
};

export default App;
