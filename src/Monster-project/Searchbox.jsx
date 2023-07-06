import React from 'react'
import './Searchbox.css'

export default function Searchbox(props) {
  return (
    <div className='search_boxdiv'>
        <input type="search" className="search_box" name="" id=""  placeholder={props.placeholder} onChange={props.onchangehandler}/>
    </div>
  )
}
