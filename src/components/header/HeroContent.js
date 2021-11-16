import ButtonAction from '../global/ButtonAction'
import { faPlay, faInfoCircle } from "@fortawesome/free-solid-svg-icons"

const HeroContent = ({ title, subtitle, imageUrl, description }) => {
  return (
    <div className="hero-content">
      <h2>
        <img alt={title} src={imageUrl} />
      </h2>
      <h3>{subtitle}</h3>
      <p>{description}</p>
      <ul className="controls">
        <li>
          <ButtonAction classes="primary-action" icon={faPlay} text="Drink" />
        </li>
        <li>
          <ButtonAction classes="secondary-action" icon={faInfoCircle} text="More Info" />
        </li>
      </ul>
    </div>
  );
}

export default HeroContent;