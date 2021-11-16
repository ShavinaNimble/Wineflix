
import HeroContent from "./HeroContent";

const Header = ({ heroContent }) => {
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
    <header className="hero">
      <img className="hero-image" src="/wine-hero.webp" alt="Wine bottles" />
      <nav className="navigation">
        <section className="primary-navigation">
          <h1>WineFlix</h1>
          <ul className="navigation-links">
            <li className="active">
              <a href="https://developer.mozilla.org">Home</a>
            </li>
            <li>
              <a href="https://developer.mozilla.org">Whites</a>
            </li>
            <li>
              <a href="https://developer.mozilla.org">Reds</a>
            </li>
            <li>
              <a href="https://developer.mozilla.org">Blends</a>
            </li>
          </ul>
        </section>
        <section className="secondary-navigation">
          <span className="user-avatar">
            <a href="https://developer.mozilla.org">S</a>
          </span>
        </section>
      </nav>
      <HeroContent content={heroContent} />
    </header>
  );
}

export default Header;