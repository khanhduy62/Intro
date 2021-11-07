import { useState } from 'react';

import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LanguageIcon from '@mui/icons-material/Language';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import './works.scss';

const Works = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      title: 'AxiaGram',
      icon: PhoneIphoneIcon,
      desc: 'AxiaGram is an AI enabled mobile companion to any EHR. With seamless end to end Encrypted chat features that include file sharing, Voice and Video calling.',
      img: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2020/09/remote_work_infographic_blog.png?auto=format&q=60&fit=max&w=930',
      link: 'https://apps.apple.com/vn/app/apple-store/id1568235375',
    },
    {
      title: 'Web Application',
      icon: LanguageIcon,
      desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi molestias dolorem quibusdam eligendi provident',
      img: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930',
      link: 'https://sessions.ecommerce.dev.syd.darkwing.io',
    },
    {
      title: 'Life In - Utilisateur',
      icon: PhoneIphoneIcon,
      desc: 'This application will offer you to find restaurants near you with the possibility of ordering online and having it delivered to your home.',
      img: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2021/10/image24.png?auto=format&q=60&fit=max&w=930',
      link: 'https://apps.apple.com/us/app/life-in-belgium-utilisateur/id1522459263',
    },
  ];

  const handleClick = (way) => {
    way === 'left'
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className='works' id='works'>
      <div
        className='slider'
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((el, index) => (
          <div key={index.toString()} className='container'>
            <div className='item'>
              <div className='left'>
                <div className='left-container'>
                  <div className='img-container'>
                    <el.icon className='img' />
                  </div>
                  <h2>{el.title}</h2>
                  <p>{el.desc}</p>
                  <span onClick={() => window.open(el.link, '_blank')}>
                    Project Link
                  </span>
                </div>
              </div>
              <div className='right'>
                <img src={el.img} alt='' />
              </div>
            </div>
          </div>
        ))}
      </div>
      <ChevronLeftIcon
        fontSize='large'
        className='arrow left'
        onClick={() => handleClick('left')}
      />
      <ChevronRightIcon
        fontSize='large'
        className='arrow right'
        onClick={() => handleClick()}
      />
    </div>
  );
};

export default Works;
