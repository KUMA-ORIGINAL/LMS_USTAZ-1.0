import React, { useRef } from 'react'

const Accordeon = ({ title, children, isOpen, handleClick }) => {
  const itemRef = useRef(null)
  return (
    <li className="questions__item">
      <div onClick={() => handleClick()} className="questions__top ">
        <span className="questions__what">{title}</span>
        <span className={`questions__icon ${isOpen ? 'active ' : ''}`}>
          {'❯'}
        </span>
      </div>
      <div
        style={
          isOpen ? { height: itemRef.current.scrollHeight } : { height: '0px' }
        }
        className="questions__bottom"
        ref={itemRef}
      >
        {children}
      </div>
    </li>
  )
}

export default Accordeon