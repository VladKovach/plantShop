import React from 'react'
import './infoCardsAndFeaturedCards.scss'
import GetSvg from '../GetSvg/GetSvg'
import CardGallery from '../CardGallery/CardGallery'
const InfoCardsAndFeaturedCards = () => {
  return (
    <div className='info-cards__andFeatured-wrapper cards'>
      <div className='cards-container'>
        <div className='cards-info__cards'>
          <div className='cards-info__cards-container first'>
            <GetSvg svg={'quality'} />
            <h2 className='cards-info__cards-title'>Quality Products</h2>
            <p className='cards-info__cards-subTitle'>Offer you the biggest choice of plants</p>
            <p className='cards-info__cards-description'>
              Join us for one of our open days and find a plant and quality product that suit for
              your garden.
            </p>
          </div>

          <div className='cards-info__cards-container second'>
            <GetSvg svg={'fresh'} />
            <h2 className='cards-info__cards-title'>Always Fresh</h2>
            <p className='cards-info__cards-subTitle'>Add greebery to your indoor spaces</p>
            <p className='cards-info__cards-description'>
              Make your garden a place to sit back and enjoy by adding a comfortable garden bench
              for relaxing
            </p>
          </div>

          <div className='cards-info__cards-container third'>
            <GetSvg svg={'services'} />
            <h2 className='cards-info__cards-title'>Excellent Services </h2>
            <p className='cards-info__cards-subTitle'>Provide the best collection and service</p>
            <p className='cards-info__cards-description'>
              Our edited collection ranges from plant gifts to treats for the home, that help you
              find the ideal gift.
            </p>
          </div>
        </div>
        <div className='cards-featured__cards-wrapper featured'>
          <div className='featured-head__section'>
            <h2 className='featured-head__section-title'>Featured Product</h2>
            <div className='featured-head__section-subTitle__section'>
              <p className='featured-head__section-subTitle__section-description'>
                
                Shop your favourite plants in your favorable factor, Veggies, Seeds, Citrus, Fruit
                Trees, Herbs and more...
              </p>

              <button className='featured-head__section-subTitle__section-btn'>See All</button>
            </div>
          </div>
          <CardGallery
            cards={[
              <img src='/images/plant1.jpg' />,
              <img src='/images/plant2.jpg' />,
              <img src='/images/plant3.jpg' />,
              <img src='/images/plant4.jpg' />,
              <img src='/images/plant5.jpg' />,
              <img src='/images/plant6.jpg' />,
            ]}
          />
        </div>
      </div>
    </div>
  )
}

export default InfoCardsAndFeaturedCards
