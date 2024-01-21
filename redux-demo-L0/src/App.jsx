import { useDispatch, useSelector } from "react-redux"
import { increment, decrement } from './store'
function App() {

  const counter = useSelector(state => state);
  const dispatch = useDispatch();


  return (
    <div className="app">
      <h1>Counter: {counter}</h1>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button disabled={counter <= 0} onClick={() => dispatch(decrement())}>Decrement</button></div>
    </div>
  )
}

export default App
