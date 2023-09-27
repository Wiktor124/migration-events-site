const Default = ({ going, interested}) => {  
  
  return (
    <>
       <button
        className="going"
        onClick={going}
      >
        Going!
      </button>
      <button
        className="interested"
        onClick={interested}
      >
        Interested
      </button>
    </>
  )
}

export default Default;