import WineCard from './WineCard';

const WineList = ({ title, wines }) => {
  return (
    <section className="category">
      <h2>{title}</h2>
      <ul>
        {
          wines.map((props) => (
            <WineCard key={props.id} {...props} />
          ))
        }       
      </ul>
    </section>
  )
}

export default WineList;