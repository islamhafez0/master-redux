import React from 'react'
import { buyIcecream } from '../store/actions'
import { connect } from 'react-redux'
const Icecreams = ({ numOfIcecreams, buyIcecream }) => {
  return (
    <div className='cakes'>
      <p>Using connect</p>
      <h1>Number of icecreams: {numOfIcecreams}</h1>
      <button disabled={numOfIcecreams <= 0} onClick={buyIcecream}>{numOfIcecreams <= 0 ? "We have no Icecream" : "Buy Icecream"}</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    numOfIcecreams: state.iceCreams.numOfIcecreams
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyIcecream: () => dispatch(buyIcecream())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Icecreams)