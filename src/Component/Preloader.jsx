import React from 'react';

const Preloader = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50 space-y-4">
      {/* Spinner */}
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

      {/* Pulsing Text */}
      <h2 className="text-xl font-semibold text-blue-500 animate-pulse">Loading...</h2>
    </div>
  );
};

export default Preloader;
