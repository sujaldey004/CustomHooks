import React, { useEffect, useState } from 'react'
import axios from 'axios';

function useInterval(fn, timeout) {
  useEffect(() => {
    const value = setInterval(() => {
      fn();
    }, timeout);
    
    return ()=>{
      clearInterval(value);
    }
  }, [])
}

function App() {

  const [count, setCount] = useState(0);
  useInterval(() => {
    setCount(c => c + 1)
  }, 1000)

  return (
    <>
      Timer is at {count}
    </>
  )
}

export default App

