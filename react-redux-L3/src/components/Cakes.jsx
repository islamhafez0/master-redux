import React from 'react'
import { buyCake } from '../store/actions';
import { connect } from 'react-redux'
const Cakes = ({ cakes, buyCake }) => {
  return (
    <div className='cakes'>
      <p>Using connect</p>
      <h1>Number of Cakes: {cakes}</h1>
      <button disabled={cakes <= 0} onClick={() => buyCake()}>{cakes.cakes <= 0 ? "We have no cakes" : "Buy Cake"}</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cakes: state.cakes.numOfCakes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cakes);