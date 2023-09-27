const Interested = ({onDefault, going}) => {
  return (
    <>
      <div>
        <p>You&rsquo;re interested in going.</p>
        <button onClick={onDefault} className="button-link">Changed your mind?</button>
      </div>
      <button onClick={going} className="going">Going!</button>
    </>
  )
}

export default Interested;