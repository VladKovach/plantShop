import React from 'react'
import './mainSection1.scss'
const MainSection1 = ({ needDropDowm, burgerActive }) => {
  return (
    <div className='main-section1__wrapper section1'>
      <img className='section1-overPage__img' src="images/plant-overPage.png" alt="" />
      <div className={burgerActive && needDropDowm ? 'section1-info down' : 'section1-info'}>
        <h1 className='section1-info__title'>
          <span className='whiten'>A</span> Community to Buy,
          <span className='whiten'> Sell</span>, & Discover the 
          <span className='whiten'> Magic</span> of Plants
        </h1>
        <p className='section1-info__subTitle'>
          Shop your favourite plants in your favorable factor, Veggies, Seeds, Citrus, Fruit Trees,
          Herbs and more...
        </p>
        <button className='section1-info__btn'>Explore Now</button>
      </div>
    </div>
  )
}

export default MainSection1
