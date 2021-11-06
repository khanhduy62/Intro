import './portfolio.scss';

const Portfolio = () => {
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
    {
      id: 'design',
      title: 'Design',
    },
    {
      id: 'content',
      title: 'Content',
    },
  ];

  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        <li className='active'>Featured</li>
        <li>Web App</li>
        <li>Mobile App</li>
        <li>Design</li>
        <li>Content</li>
      </ul>
      <div className='container'>
        <div className='item'>
          <img src='assets/app-1.png' alt='icon' />
          <h3>Ecommerce App</h3>
        </div>
        <div className='item'>
          <img src='assets/app-1.png' alt='icon' />
          <h3>Ecommerce App</h3>
        </div>
        <div className='item'>
          <img src='assets/app-1.png' alt='icon' />
          <h3>Ecommerce App</h3>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
