import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCookie } from '../store/actions'
const CookiesHooks = () => {
    const cookies = useSelector(state => state.cookies.numOfCookies)
    const dispatch = useDispatch();
  return (
    <div>
      <p>Using Hooks</p>
      <h1>Number of cookies: {cookies}</h1>
      <button disabled={cookies <= 0} onClick={() => dispatch(buyCookie())}>{cookies <= 0 ? "We have no cookies" : "Buy Cookie"}</button>
    </div>
  )
}

export default CookiesHooks;