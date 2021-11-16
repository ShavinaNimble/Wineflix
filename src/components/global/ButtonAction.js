import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ButtonAction = ({ classes, icon, text }) => {
  return (
    <button className={classes}>
      <FontAwesomeIcon icon={icon} />
      <span>{text}</span>
    </button>
  )
}

export default ButtonAction;