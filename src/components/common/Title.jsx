import React from 'react'

const Title = ({ titleText }) => {

    if (!titleText || titleText.trim() === '') {
        return null; // Don't render anything if titleText is empty or not provided
      }
  return (
    <div className='title-container'>
        <p>&lt;&nbsp;{titleText}&nbsp;&#47;&gt;</p>
    </div>
  )
}

export default Title