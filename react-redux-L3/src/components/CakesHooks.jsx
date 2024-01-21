import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { buyCake } from '../store/actions';

const CakesHooks = () => {
  const cakes = useSelector(state => state.cakes.numOfCakes);
  const dispatch = useDispatch()
  return (
    <div className='cakes'>
      <p>Using hooks</p>
      <h1>Number of cakes: {cakes}</h1>
      <button disabled={cakes <= 0} onClick={() => dispatch(buyCake())}>{cakes <= 0 ? "We have no cakes" : "Buy Cake"}</button>
    </div>
  )
}

export default CakesHooks;