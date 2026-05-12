import './navbar.css';
import logo from '../../assets/my-logo.png';
import button from '../../assets/button.png';

function Navbar(){
    return(
        <div className='navbar'>
            <div className='login'>
                <img className="logo" src={logo} ></img>
                <p className='logoname'>Donezo</p>
            </div>
              <div className='li'>
                <ul className='list'>
                    <li><a href="#home"/>Home</li>
                    <li><a href="#features"/>Features</li>
                    <li><a href="#About us"/>Blog</li>
                    <li><a href="#contact"/>Contact me</li>
                    <li><a href="#About us"/>Pricing</li>
                </ul>
            </div>
            <div className='buttons'>
                <button className="sign" type='button'>Sign in</button>
                <button className="get" type='button'>Get Started</button>
            </div>
        </div>
    )
}

export default Navbar;