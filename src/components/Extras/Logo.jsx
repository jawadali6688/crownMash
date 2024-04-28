import React from 'react';

function Logo({
    className = "text-2xl"
}) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="font-bold mr-2 text-pink-700">C</div>
      <div className="font-bold mr-2 text-pink-700">r</div>
      <div className="font-bold mr-2 text-pink-700">o</div>
      <div className="font-bold mr-2 text-pink-700">w</div>
      <div className="font-bold mr-2 text-pink-700">n</div>
      <div className="font-bold mr-2 text-yellow-400">M</div>
      <div className="font-bold mr-2 text-yellow-400">a</div>
      <div className="font-bold mr-2 text-yellow-400">s</div>
      <div className="font-bold mr-2 text-yellow-400">h</div>
    </div>
  );
}

export default Logo;
