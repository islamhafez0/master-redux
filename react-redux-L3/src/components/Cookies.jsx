import React from 'react';
import { buyCookie } from '../store/actions';
import { connect } from 'react-redux';

const Cookies = ({ numOfCookies: cookies , buyCookie }) => {
  return (
    <div>
      <p>Using connect</p>
      <h1>Number of cookies: {cookies}</h1>
      <button disabled={cookies <= 0} onClick={buyCookie}>{cookies <= 0 ? "We have no cookies" : "Buy Cookie"}</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    numOfCookies: state.cookies.numOfCookies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyCookie: () => dispatch(buyCookie())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cookies);