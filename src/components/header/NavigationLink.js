const NavigationLink = ({ link, name, active }) => {
  return (
    <li className={active ? 'active' : ''}>
      <a href={link}>{name}</a>
    </li>
  );
}

export default NavigationLink;