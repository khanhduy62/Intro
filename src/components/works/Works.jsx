import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import './works.scss';

const Works = () => (
  <div className='works' id='works'>
    <div className='slider'>
      <div className='container'>
        <div className='item'>
          <div className='left'>
            <div className='left-container'>
              <div className='img-container'>
                <PhoneIphoneIcon className='img' />
              </div>
              <h2>Title</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Commodi molestias dolorem quibusdam eligendi provident
                perspiciatis laborum amet reprehenderit voluptas.
              </p>
              <span>Projects</span>
            </div>
          </div>
          <div className='right'>
            <img
              src='https://99designs-blog.imgix.net/blog/wp-content/uploads/2020/09/remote_work_infographic_blog.png?auto=format&q=60&fit=max&w=930'
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
    <ChevronLeftIcon fontSize='large' className='arrow left' />
    <ChevronRightIcon fontSize='large' className='arrow right' />
  </div>
);

export default Works;
