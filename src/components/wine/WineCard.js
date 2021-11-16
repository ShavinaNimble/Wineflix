const WineCard = ({ label, imageUrl, isNew, progress }) => {
  return (
    <li>
      <div className="wine">
        <img src={imageUrl} alt={label} />
        {isNew ? (<span className="new-badge">New!</span>) : null}
        {progress
          ? (
            <div className="amount-consumed">
              <progress min="0" max="100" value={progress}></progress>
            </div>
          )
          : null
        }
      </div>
    </li>
  )
}

export default WineCard;