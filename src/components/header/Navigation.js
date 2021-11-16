import NavigationLink from "./NavigationLink";

const Navigation = () => {
  const primaryLinks = [
    {
      name: 'Home',
      link: 'https://developer.mozilla.org',
      active: true
    },
    {
      name: 'Whites',
      link: 'https://developer.mozilla.org'
    },
    {
      name: 'Reds',
      link: 'https://developer.mozilla.org'
    },
    {
      name: 'Blends',
      link: 'https://developer.mozilla.org'
    }
  ];

  return (
    <nav className="navigation">
      <section className="primary-navigation">
        <h1>WineFlix</h1>
        <ul className="navigation-links">
          {
            primaryLinks.map((props) => (
              <NavigationLink key={props.name} {...props} />
            ))
          }
        </ul>
      </section>
      <section className="secondary-navigation">
        <span className="user-avatar">
          <a href="https://developer.mozilla.org">S</a>
        </span>
      </section>
    </nav>
  );
}

export default Navigation;