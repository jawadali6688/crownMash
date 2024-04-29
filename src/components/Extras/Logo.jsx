import React from 'react';

function Logo({
    className = "text-2xl"
}) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="font-bold mr-1 text-pink-600">C</div>
      <div className="font-bold mr-1 text-pink-600">r</div>
      <div className="font-bold mr-1 text-pink-600">o</div>
      <div className="font-bold mr-1 text-pink-600">w</div>
      <div className="font-bold mr-1 text-pink-600">n</div>
      <div className="font-bold mr-1 text-yellow-500">M</div>
      <div className="font-bold mr-1 text-yellow-500">a</div>
      <div className="font-bold mr-1 text-yellow-500">s</div>
      <div className="font-bold mr-1 text-yellow-500">h</div>
    </div>
  );
}

export default Logo;
