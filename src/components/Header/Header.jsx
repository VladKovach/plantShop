import React from 'react'
import GetSvg from '../GetSvg/GetSvg'
import './header.scss'
const Header = ({ burgerActive, setBurgerActive }) => {
  return (
    <header className='header-wrapper header'>
      <div className='header-container'>
        <div className='header-planty__logo '>
          <div className='header-planty__logo-picture '>
            <GetSvg svg={'planty-logo__plant'} />
          </div>

          <h1 className='header-planty__logo-name'>Planty</h1>
        </div>

        <div className={burgerActive ? 'header-nav__bar show' : 'header-nav__bar'}>
          <h2>Home</h2>
          <h2>Features</h2>
          <h2>Our Products</h2>
          <h2>Contact</h2>
        </div>

        <div
          onClick={() => {
            console.log('click')
            setBurgerActive(!burgerActive)
          }}
          className={
            burgerActive ? 'header-burger__menu burger active' : 'header-burger__menu burger'
          }
        >
          <span className='burger-line1'></span>
          <span className='burger-line2'></span>
          <span className='burger-line3'></span>
        </div>
        <div className='header-btns__section'>
          <div className='header-btns__section-search'>
            <GetSvg svg={'search'} />
          </div>
          <div className='header-btns__section-bascet'>
            <GetSvg svg={'bascet-shop'} />
          </div>
          <div className='header-btns__section-user'>
            <GetSvg svg={'user'} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
