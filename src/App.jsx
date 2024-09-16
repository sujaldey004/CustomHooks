import React, { useEffect, useState } from 'react'
import axios from 'axios';

function useMousePointer() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => { setPosition({ x: e.clientX, y: e.clientY }) }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  });

  return position;
}

function App() {

  const mousePointer = useMousePointer();



  return (
    <>
      your mouse pointer is {mousePointer.x} {mousePointer.y}
    </>
  )
}

export default App

