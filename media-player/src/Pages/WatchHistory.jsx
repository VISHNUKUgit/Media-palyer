import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getHistroy } from '../Services/allAPI'

function WatchHistory() {

  const [history, setHistory] = useState([])

  const getAllWatchHistory = async () => {

    // make api call
    const { data } = await getHistroy()

    setHistory(data)

  }
  useEffect(() => {
    getAllWatchHistory()

  }, [])


  return (
    <>
      <div className="container mt-5 mb-5 d-flex justify-content-between">
        <h1>Watch History</h1>
        <Link to={'/home'}>bakc to Home</Link>
      </div>
      <table className=" table container mt-5 mb-5 ">
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>URL</th>
            <th>Time Stam</th>
          </tr>
        </thead>
        <tbody>
          {
            history.map((item, index) => (

              <tr key={index}>
                <th>{index + 1}</th>
                <th>{item?.caption}</th>
                <a href={item?.embedlink} target="_blank">
                  {item?.embedlink}
                </a>
                <th>{item?.timeStamp}</th>
              </tr>

            ))
          }
        </tbody>
      </table>
    </>
  )
}

export default WatchHistory