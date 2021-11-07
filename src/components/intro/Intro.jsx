import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

import './intro.scss';

const Intro = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      strings: ['React Native', 'ReactJS'],
    });
  }, []);

  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className='image-container'>
          <img src='assets/duy.png' alt='avatar' />
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2>Hi there, I'm</h2>
          <h1>Le Khanh Duy</h1>
          <h3>
            Developer: <span ref={textRef}></span>
          </h3>
        </div>
        <a href='#portfolio'>
          <KeyboardArrowDownIcon fontSize={'large'} className='arrow' />
        </a>
      </div>
    </div>
  );
};

export default Intro;
