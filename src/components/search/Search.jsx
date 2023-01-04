import React from 'react'
import './Search.scss';
import Group from '../../assets/images/Group 2.png';
import Frame from '../../assets/images/Frame.svg';

export default function Search() {
  return (
    <>
    
   <div className='search container'>
   <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={Group} alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={Group} alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={Group} alt="Third slide" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only"></span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only"></span>
  </a>
</div>
    <form className='form' action="#">
      <p>Qidirish</p>
      <div className='input__btn'>
        <input type="text" placeholder='Adiblar, kitoblar, audiolar, maqolalar...' />
        <button><img src={Frame} alt="" /> Izlash</button>
      </div>
    </form>
    </div>
    </>
  )
}
