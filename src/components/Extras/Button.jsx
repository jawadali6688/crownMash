import React from 'react'

function Button({children, className = ""}) {
  return (
      <button className={`flex gap-1 items-center justify-center py-2 text-gray-600 font-bold text-md rounded-lg px-6 hover:text-white hover:cursor-pointer duration-300 ${className}`}>
         {children}
            </button>
  )
}

export default Button
