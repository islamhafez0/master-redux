import React, { useState } from 'react'
import Cakes from './components/Cakes'
import CakesHooks from './components/cakesHooks'
import IcecreamsHooks from './components/IcecreamsHooks'
import Icecreams from './components/Icecreams'
import CookiesHooks from './components/CookiesHooks'
import Cookies from './components/Cookies'
import NewCake from './components/NewCake'
import Users from './components/Users'
const App = () => {
  return (
    <div className='app'>
      <div className='wrapper'>
        <Cakes />
        <CakesHooks />
        <NewCake />
      </div>
      <div className='wrapper'>
        <Icecreams />
        <IcecreamsHooks />
      </div>
      <div className='wrapper'>
        <Cookies />
        <CookiesHooks />
      </div>
      <div className="wrapper">
        <Users />
      </div>
    </div>
  )
}

export default App