import { useDispatch, useSelector } from 'react-redux'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { drecrement, increment, incrementByAmount, reset } from './store/slices/counter';

function App() {

  const { counter } = useSelector( state => state.counter );
  const dispatch = useDispatch()

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>count is {counter}</h1>
      <div className="card">
        <button onClick={() => dispatch( increment() ) }>
          Increment
        </button>

        <button onClick={() => dispatch( drecrement() ) }>
          Decrement
        </button>

        <button onClick={() => dispatch( incrementByAmount(2) ) }>
          Incrementn by 2
        </button>
        <button onClick={() => dispatch( reset() ) }>
          reset
        </button>
      </div>
      
    </>
  )
}

export default App
