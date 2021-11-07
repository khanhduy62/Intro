import { useState } from 'react';
import PortfolioList from '../portfolioList/PortfolioList';
import './portfolio.scss';

const Portfolio = () => {
  const [selected, setSelected] = useState('featured');

  const list = [
    {
      id: 'featured',
      title: 'Featured',
    },
    {
      id: 'web',
      title: 'Web App',
    },
    {
      id: 'mobile',
      title: 'Mobile App',
    },
  ];

  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      {/* <ul>
        {list.map((item) => (
          <PortfolioList
            key={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul> */}
      <div className='container'>
        <div
          className='item'
          onClick={() =>
            window.open(
              'https://apps.apple.com/us/app/life-in-belgium-utilisateur/id1522459263',
              '_blank'
            )
          }
        >
          <img src='assets/app-1.png' alt='icon' />
          <h3>Ecommerce App</h3>
        </div>
        <div
          className='item'
          onClick={() =>
            window.open(
              'https://apps.apple.com/vn/app/apple-store/id1568235375',
              '_blank'
            )
          }
        >
          <img src='assets/app-2.png' alt='icon' />
          <h3>Medication App</h3>
        </div>
        <div
          className='item'
          onClick={() =>
            window.open('https://chat.hmsfirst.com:5001', '_blank')
          }
        >
          <img src='assets/app-3.png' alt='icon' />
          <h3>Chat App</h3>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
