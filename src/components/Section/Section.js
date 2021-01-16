import React from 'react'
import './Section.scss'

const Section = ({color,Icon,selected,title}) => {
  return (
    <div className={`section ${selected && 'section--selected'}`}
      style={{
        borderBottom: `3px solid ${color}`,
        color: `${selected && color}`,
      }}
    >
    <Icon/>
    <h4>{title}</h4>

    </div>
  )
}

export default Section
