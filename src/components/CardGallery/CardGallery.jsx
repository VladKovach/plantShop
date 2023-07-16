import React, { useState } from 'react'
import './cardGallery.scss'
import GetSvg from '../GetSvg/GetSvg'
const CardGallery = ({ cards }) => {
  const [firstCardIndex, setFirstCardIndex] = useState(0)
  const [whichArrowClicked, setWhichArrowClicked] = useState(false)
  if (firstCardIndex === -1) setFirstCardIndex(5)
  const cardsGallery = cards.map((card) => (
    <div
      className={
        whichArrowClicked === 'right'
          ? 'featured-card__gallery-item right'
          : whichArrowClicked === 'left'
          ? 'featured-card__gallery-item left'
          : 'featured-card__gallery-item'
      }
    >
      {card}
    </div>
  ))

  return (
    <div className='featured-card__gallery'>
      <button
        onClick={() => {
          setFirstCardIndex(firstCardIndex - 1)
          setWhichArrowClicked('left')
          setTimeout(() => {
            setWhichArrowClicked(false)
          }, 400)
        }}
        className='featured-card__gallery-arrow left'
      >
        <GetSvg svg={'arrow-left'} />
      </button>
      <div className='featured-card__gallery-firstCard'> {cardsGallery[firstCardIndex % 6]}</div>
      <div className='featured-card__gallery-secondCard'>
        {cardsGallery[(firstCardIndex + 1) % 6]}
      </div>
      <div className='featured-card__gallery-thirdCard'>
        {cardsGallery[(firstCardIndex + 2) % 6]}
      </div>

      <button
        onClick={() => {
          setFirstCardIndex(firstCardIndex + 1)
          setWhichArrowClicked('right')
          setTimeout(() => {
            setWhichArrowClicked(false)
          }, 400)
        }}
        className='featured-card__gallery-arrow right'
      >
        <GetSvg svg={'arrow-right'} />
      </button>
    </div>
  )
}

export default CardGallery
