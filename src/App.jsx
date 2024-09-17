import React, { useEffect, useState } from 'react'
import axios from 'axios';

function useDebouncedValue(value, timeout) {
  const [debouncevalue, setDebounceValue] = useState(value);
  useEffect(()=>{
    const timeoutValue = setTimeout(()=>{
      setDebounceValue(value)
    }, timeout);
    return ()=>{
      clearTimeout(timeoutValue);
    }
  },[value])
  return debouncevalue;
}

function App() {

  const [value,setValue] = useState(0);
  const debounceValue = useDebouncedValue(value, 500)

  return (
    <>

      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <br />
      Debounced value is {debounceValue}
    </>
  )
}

export default App

