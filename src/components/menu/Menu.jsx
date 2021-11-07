import './menu.scss';

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={`menu ${menuOpen && 'active'}`}>
      <ul>
        {DATA.map((el) => (
          <li key={el.href} onClick={() => setMenuOpen(false)}>
            <a href={el.href}>{el.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

const DATA = [
  {
    href: '#intro',
    name: 'HOME',
  },
  {
    href: '#portfolio',
    name: 'Portfolio',
  },
  {
    href: '#works',
    name: 'Works',
  },
  {
    href: '#contact',
    name: 'Contact',
  },
];
