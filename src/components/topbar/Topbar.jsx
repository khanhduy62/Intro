import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

import './topbar.scss'

const Topbar = ({menuOpen, setMenuOpen}) => (
  <div className={`topbar ${menuOpen && 'active'}`}>
    <div className="wrapper">
      <div className="left">
        <a href="#intro" className="logo">Info.</a>
        <div className="item-container">
          <PhoneIcon className="icon" />
          <span>0902 768 179</span>
        </div>
        <div className="item-container">
          <EmailIcon className="icon" />
          <span>lekhanhduyduy1201@gmail.com</span>
        </div>
      </div>
      <div className="right">
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="line1" ></span>
          <span className="line2" ></span>
          <span className="line3" ></span>
        </div>
      </div>
    </div>
  </div>
)

export default Topbar;
