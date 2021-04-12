const LikeButtonX = () => {
  const [count, setCount] = React.useState(0)

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

ReactDOM.render(<LikeButtonX />, document.querySelector('#like_button'))
