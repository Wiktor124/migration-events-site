const Going = ({ onDefault }) => {

  
  return (
    <>
      <span className="check">✔</span>

      <div>
        <p>You&rsquo;re going to this event!.</p>
        <button className="button-link" onClick={onDefault}>Changed your mind?</button>
      </div>
    </>
  )
}

export default Going;