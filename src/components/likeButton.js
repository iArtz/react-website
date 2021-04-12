import React, { useState } from 'react'

const LikeButton = () => {
  const [count, setCount] = useState(0)

  const clickHandler = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <p>Your Like {count}</p>
      <button onClick={clickHandler}>Like!!! with JSX</button>
    </div>
  )
}

export default LikeButton
