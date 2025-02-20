import React from 'react'

const Button = ({ text = "  ", fontSize = "text-sm", textColor = "text-white", color1 = "bg-[rgb(15,28,82)]", color2 = "bg-white" }) => {
  return (
    <button className={`border border-black relative px-8 py-3 ${color1} ${textColor} ${fontSize} tracking-widest border-2 border-transparent hover:border-current transition-all duration-300 before:absolute before:inset-0 before:border-current before:border-2 before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300 after:absolute after:inset-0 after:border-current after:border-2 after:scale-y-0 hover:after:scale-y-100 after:transition-transform after:duration-300`}>
      {text}
    </button>
  )
}

export default Button