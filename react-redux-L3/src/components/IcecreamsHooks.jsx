import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { buyIcecream } from '../store/actions'
const IcecreamsHooks = () => {
  const iceCream = useSelector(state => state.iceCreams.numOfIcecreams)
  const dispatch = useDispatch();
  return (
    <div className='cakes'>
      <p>Using hooks</p>
      <h1>Number of icecreams: {iceCream}</h1>
      <button disabled={iceCream <= 0} onClick={() => dispatch(buyIcecream())}>{iceCream <= 0 ? "We have no Icecream" : "Buy Icecream"}</button>
    </div>
  )
}

export default IcecreamsHooks