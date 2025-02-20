import React from 'react'

const Button = ({ text = "  ", fontSize = "text-sm", color1 = "bg-[rgb(15,28,82)]", color2 = "bg-white" }) => {
  return (
    <button className={`group relative px-8 py-3 overflow-hidden ${color1}`}>
      <span className={`absolute inset-0 w-0 ${color2} transition-all duration-500 ease-out group-hover:w-full`}></span>
      <span className={`relative text-white group-hover:text-black ${fontSize} tracking-widest`}>
        {text}
      </span>
    </button>
  )
}

export default Button