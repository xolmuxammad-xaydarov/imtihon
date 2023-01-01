import React from 'react'
import './Home.scss'
import logo from '../assets/images/Badiiyat.svg'
import personal from '../assets/images/personal.png'
import arrow from '../assets/images/Vector 1.svg'

export default function Home() {
  return (
    <div className='container'>
      <div className="header">
        <div className="logo">
          <a href="/"><img src={logo} alt="" /></a>
        </div>
        <div className="right__block">
          <nav>
          <ul className='nav__list'>
            <li><a href="/">Bosh sahifa</a></li>
            <li><a href="/">Nasr</a></li>
            <li><a href="/">Nazm</a></li>
            <li><a href="/">Maqolalar</a></li>
            <li><a href="/">Forum</a></li>
          </ul>
          </nav>

          <div className="personal">
            <img className='personal__img' src={personal} alt="" />
            <a href="/"><img src={arrow} alt="" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}
