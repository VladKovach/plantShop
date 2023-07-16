import React from 'react'
import './galleryItem.scss'
const GalleryItem = ({ name, price, img }) => {
  return (
    <div className='gallery-item'>
      <img className='gallery-item__img' src={img} />
      <h4 className='gallery-item__name'>{name}</h4>
      <p className='gallery-item__description'>{price}</p>
    </div>
  )
}

export default GalleryItem
