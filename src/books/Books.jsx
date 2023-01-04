import React from 'react'
import './Books.scss';
import 'react-router-dom'
import book from '../data/BooksObj';


export default function Books() {
  
  return (
    <div className='container'>
      <ul className='books__nav'>
        <li><a href="/">Books</a></li>
      </ul>

      <ul className='books__list'>
      {
        book?.map((item,i) => (
          <li key={i}>
            <img src={item.img} alt="" width={173} height={150}/>
            <p>{item.nameBook}</p>
            <p>{item.name}</p>
            <span>{item.price}</span>
            {/* <div className='books'><img src={book} alt="" />{item.books.length} <div><img src={listener} alt="" />{item.books.length -1}</div></div> */}
          </li>
            ))
          }
      </ul>
    </div>
  )
}
