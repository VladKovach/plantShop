import React from 'react'
import './popularProducts.scss'
import GalleryItem from '../GalleryItem/GalleryItem'
import GetSvg from '../GetSvg/GetSvg'
const PopularProducts = () => {
  return (
    <div className='popular-products__wrapper popular'>
      <div className='popular-container'>
        <img src='images/plant-background.png' className='popular-background__image' />
        <div className='popular-header'>
          <h2 className='popular-header__title'>Our Popular Product</h2>
          <div className='popular-header__subTitle-section'>
            <p className='popular-header__subTitle-section__description'>
              Shop your favourite plants in your favorable factor, Veggies, Seeds, Citrus, Fruit
              Trees, Herbs and more...
            </p>
            <button className='popular-header__subTitle-section__btn'>See All</button>
          </div>
        </div>
        <div className='popular-gallery'>
          <GalleryItem name={'Azalea Plant'} price={'$150.00'} img={'images/plant1.jpg'} />
          <div className='popular-gallery__img-withIcons'>
            <GalleryItem name={'Indian Basil'} price={'$160.00'} img={'images/plant2.jpg'} />
            <div className='popular-gallery__img-withIcons__icons'>
              <GetSvg svg={'bag-white'} />
              <GetSvg svg={'search-white'} />
              <GetSvg svg={'heart-white'} />
              <GetSvg svg={'sort-white'} />
            </div>
          </div>
          <GalleryItem name={'Spider Plant'} price={'$140.00'} img={'images/plant3.jpg'} />
          <GalleryItem name={'Azalea Plant'} price={'$150.00'} img={'images/plant5.jpg'} />
          <GalleryItem name={'Indian Basil'} price={'$160.00'} img={'images/plant6.jpg'} />
          <GalleryItem name={'Spider Plant'} price={'$140.00'} img={'images/plant4.jpg'} />
        </div>
      </div>
      <img src='images/plant-backGround2.png' alt='' className='popular-backGround2__image' />
    </div>
  )
}

export default PopularProducts
