import React from 'react'
import './latestUpdates.scss'
const LatestUpdates = () => {
  return (
    <div className='latestUpdates-wrapper latestUpdates'>
      <div className='latestUpdates-container'>
        <h2 className='latestUpdates-header'>Our Lastest Updates</h2>
        <div className='latestUpdates-cards__section cards'>
          <div className='cards-card card-1'>
            <img src='images/latestUpdate-1.jpg' alt='' />
            <div className='cards-card__info'>
              <p className='cards-card__info-description'>
                Plants that suits your modern home interior & exterior
              </p>
              <a className='cards-card__info-link' children={'READ MORE'}></a>
            </div>
          </div>
          <div className='cards-card card-2'>
            <img src='images/latestUpdate-2.jpg' alt='' />
            <div className='cards-card__info'>
              <p className='cards-card__info-description'>
                Simple steps to keep your indoor plants alive for long time
              </p>
              <a className='cards-card__info-link' children={'READ MORE'}></a>
            </div>
          </div>
          <div className='cards-card card-3'>
            <img src='images/latestUpdate-3.jpg' alt='' />
            <div className='cards-card__info'>
              <p className='cards-card__info-description'>
                How to choose healthy plants for new biodynamic gardening
              </p>
              <a className='cards-card__info-link' children={'READ MORE'}></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LatestUpdates
