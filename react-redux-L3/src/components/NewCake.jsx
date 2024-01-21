import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../store/actions';
const NewCake = ({ buyCake }) => {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <input type="text" value={number} onChange={e => setNumber(e.target.value)} />
      <button onClick={() => buyCake(number)}>Buy {number} {number <= 1 ? "Cake" : "Cakes"}</button>
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
    buyCake: number => dispatch(buyCake(number))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCake);