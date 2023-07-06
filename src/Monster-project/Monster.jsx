import React, { createElement, useState } from 'react'
import Searchbox from './Searchbox'
import './Monster.css'

export default function Monster() {
  const [searchfield , setSearchfield] = useState('');
  const [monster , setMonster] = useState([])
  console.log(searchfield);

  const onSearchChange = (event) => {
       const searchFieldStringe = event.target.value.toLocaleLowerCase();
       setSearchfield(searchFieldStringe)
  }

  return (
    <div className='monster_class'>
        <h1>
          Monster Rolodex
        </h1>

         <Searchbox
         placeholder={'search monster'}
         onchangehandler={onSearchChange}
        />
        
    </div>
  )
}

