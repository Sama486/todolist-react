import React from 'react'

const Button = ({klasse, text, onClick}) => {
  return (
    <button
    onClick={onClick}
        style={{ whiteSpace:'nowrap'}}
        className={`${klasse} `}>
        {text}
    </button>
  )
}

export default Button