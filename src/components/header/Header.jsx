import React from 'react'
import './Header.scss';
import logo from '../../assets/images/Badiiyat.svg'
import personal from '../../assets/images/personal.png'
import arrow from '../../assets/images/Vector 1.svg'
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <div className="header container">
        <div className="logo">
          <a href="/"><img src={logo} alt="" /></a>
        </div>
        <div className="right__block">
          <nav>
          <ul className='nav__list'>
            <li className='active'><Link to="/">Bosh sahifa</Link></li>
            <li><Link to="/books">Nasr</Link></li>
            <li><Link to="/">Nazm</Link></li>
            <li><Link to="/">Maqolalar</Link></li>
            <li><Link to="/">Forum</Link></li>
          </ul>
          </nav>

          <div className="personal">
            <img className='personal__img' src={personal} alt="" />
            <a href="/"><img src={arrow} alt="" /></a>
          </div>
        </div>
      </div>
  )
}
