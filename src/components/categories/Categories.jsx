import React from 'react'
import './Categories.scss';
import book from '../../assets/images/book.svg';
import jadidAdabiyoti from '../../data/Object';
import listener from '../../assets/images/Frame (1).svg';
import { useState } from 'react';


export default function Categories() {
  let arr = [];
  const [category,setCategory] = useState('')

  console.log(category);

  let pushCategory = () => {
    jadidAdabiyoti.forEach(elem => {
      if(!arr.includes(elem.type)){
        arr.push(elem.type)
      }
    });
  }
  pushCategory();

  return (
    <div className='category'>
     <h2>Asosiy kategoriyalar</h2>

     <div>
        <ul className='category__nav'>
          {
            arr?.map((item,i) => (
              <li key={i} onClick={() => setCategory(item)}><button>{item}</button></li>
            ))
          }
        </ul>

        <ul className='category__list'>
            {
              jadidAdabiyoti?.filter(elem => category == elem.type).map((item,i) => (
                <li key={i}>
                  <img src={item.images} alt="" width={173}/>
                  <p>{item.name}</p>
                  <span>{item.year}</span>
                  <div className='books'><img src={book} alt="" />{item.books.length} <div><img src={listener} alt="" />{item.books.length -1}</div></div>
                </li>
              ))
            }
        </ul>
     </div>
    </div>
  )
}
