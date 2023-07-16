import React from 'react'
import './discountSection.scss'
const DiscountSection = () => {
  return (
    <div className='discount-section__wrapper discount'>
      <div className='discount-container'>
        <div className='discount-header'>
          <h2 className='discount-header__title'>Join with me to get special discount!</h2>
          <p className='discount-header__description'>
            Shop your favourite plants in your favorable factor, Veggies, Seeds, Citrus, Fruit
            Trees, Herbs and more...
          </p>
        </div>
        <form className='discount-form'>
          <input
            placeholder='Enter your email address...'
            className='discount-form__input'
            type='text'
          />
          <button className='discount-form__btn'>Subscribe</button>
        </form>
      </div>
    </div>
  )
}

export default DiscountSection
