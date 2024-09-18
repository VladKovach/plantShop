import React from 'react'
import './theBestPlantSection.scss'
const TheBestPlantSection = () => {
  return (
    <div className='best-plant__section-wrapper section'>
      <div className='section-container'>
        <img src='/images/chinize-money-plant.png' className='section-plant__image'></img>
        <div className='section-info__wrapper info'>
          <h2 className='info-title'>Chinese Money Plant</h2>
          <p className='info-description'>
            Welcome the new season with the plants that are raring to go. We’ve worked out which
            plants go well together so you can just plant up in your garden for instant impact and
            grow fastly.
          </p>
          <div className='info-btns__section'>
            <button className='info-btns__section-seeAllBtn'>See All Collection</button>
            <button className='info-btns__section-learnMoreBtn'>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TheBestPlantSection
