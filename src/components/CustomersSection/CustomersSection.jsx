import React, { useState } from 'react'
import './customersSection.scss'
import GetSvg from '../GetSvg/GetSvg'
import GetCustomersFotos from '../GetCustomersFotos/GetCustomersFotos'
import CircleSwither from '../CircleSwither/CircleSwither'
const CustomersSection = () => {
  const customersFotos = [
    ['images/first-user.png', 'images/second-user.png', 'images/third-user.png'],
    ['images/first-user.png', 'images/third-user.png', 'images/second-user.png'],
    ['images/third-user.png', 'images/second-user.png', 'images/first-user.png'],
    ['images/second-user.png', 'images/first-user.png', 'images/third-user.png'],
    ['images/second-user.png', 'images/third-user.png', 'images/first-user.png'],
    ['images/third-user.png', 'images/first-user.png', 'images/second-user.png'],
  ]
  const [circlesStatus, setCircleStatus] = useState([true, false, false, false, false, false])
  return (
    <div className='customers-section__wrapper customers'>
      <div className='customers-container'>
        <div className='customers-header__section header'>
          <h2 className='header-title'>Our Customers Speak</h2>
          <p className='header-description'>
            Shop your favourite plants in your favorable factor, Veggies, Seeds, Citrus, Fruit
            Trees, Herbs and more...
          </p>
        </div>
        <div className='customers-info__wrapper customersInfo'>
          <div className='customersInfo-fotos customers-fotos'>
            <GetCustomersFotos customersFotos={customersFotos} fotosStatus={circlesStatus} />

            <div className='customersInfo-fotos__switcher'>
              <CircleSwither setCircleStatus={setCircleStatus} circlesStatus={circlesStatus} />
            </div>
          </div>
          <div className='customersInfo-customers__quote-wrapper quote'>
            <GetSvg svg={'quote-up'} />
            <p className='quote-description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam purus vel quam sit
              sit. Facilisis curabitur ante egestas vitae. Mattis nisl commodo cursus pulvinar
              tristique in eleifend.
            </p>
            <h2 className='quote-authors__name'>Tanbir Ahmed Joy</h2>
            <p className='quote-authors__position'>UI/UX Designer</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomersSection
