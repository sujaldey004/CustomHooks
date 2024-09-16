import React, { useEffect, useState } from 'react'
import axios from 'axios';

function useIsOnline(){
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);
  useEffect(()=>{
    window.addEventListener('online', ()=>setIsOnline(true));
    window.addEventListener('offline', ()=>setIsOnline(false));
  });

  return isOnline;
}

function App() {

  const isOnline = useIsOnline();
  if(isOnline){
    return "You are connected";
  }

  return "Disconnected, please connect to the internet"

  return (
    <>
      {
        loading ? <div>loading...</div> : allUsers.map(allUsers => <Track key={allUsers._id} allUsers={allUsers} />)
      }
    </>
  )
}

function Track({ allUsers }) {
  return <div>
    <div>
      username : <b>{allUsers.username}</b>
    </div>
    <div>
      password : {allUsers.password}
    </div>
  </div>
}

export default App

