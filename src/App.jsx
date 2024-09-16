import React, { useEffect, useState } from 'react'
import axios from 'axios';


function useAllUsers(n) {
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const value = setInterval(() => {
      axios.get("http://localhost:3000/api/v1/users").
        then(res => {
          setAllUsers(res.data.allUsers);
          setLoading(false);
          console.log("updated");
        })
    }, n * 1000)

    axios.get("http://localhost:3000/api/v1/users").
      then(res => {
        setAllUsers(res.data.allUsers);
        setLoading(false);
        console.log("updated");
      })

    return () => {
      clearInterval(value);
    }

  }, [n])

  return { allUsers, loading }
}

function App() {

  const { allUsers, loading } = useAllUsers(5);

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

