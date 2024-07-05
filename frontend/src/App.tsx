import { useEffect, useRef, useState } from 'react'

import * as likesService from './services/likes.service'
import './App.css'

const REFRESH_INTERVAL = 5000

function App() {
  const [likes, setLikes] = useState<number>(0)
  const httpRequestRefreshTimeout = useRef<number>()

  useEffect(() => {
    likesService.getLikes().then(likesFetched => setLikes((likes: number) => likesFetched >= likes ? Number(likesFetched) : likes))
    httpRequestRefreshTimeout.current = window.setTimeout(getLikes, REFRESH_INTERVAL)

    return () => window.clearTimeout(httpRequestRefreshTimeout.current)
  }, [])

  async function getLikes() {
    try {
      const likesFetched = await likesService.getLikes()
      console.log(likesFetched)
      setLikes((likes: number) => likesFetched >= likes ? Number(likesFetched) : likes)
    } catch (e) {
      setLikes(-1)
    }
    
    httpRequestRefreshTimeout.current = window.setTimeout(getLikes, REFRESH_INTERVAL)
  }

  async function patchLikes() {
    setLikes(likes + 1)
    const jobCreation = await likesService.patchLikes()
    console.log(jobCreation)
  }

  return (
    <>
      <div className="card">
        <button onClick={patchLikes}>
          likes is {likes}
        </button>
      </div>
    </>
  )
}

export default App
