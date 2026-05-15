import './navbar.css';
import logo from '../../assets/my-logo.png';
import button from '../../assets/button.png';
import { useNavigate } from 'react-router-dom';

function Navbar(){

    const navigate = useNavigate();

    return(
        <div className='navbar'>
            <div className='logoin'>
                <img className="logo" src={logo} ></img>
                <p className='logoname'>Donezo</p>
            </div>
              <div className='liee'>
                <ul className='list'>
                    <li><a href="#home"/>Home</li>
                    <li><a href="#features"/>Features</li>
                    <li><a href="#About us"/>Blog</li>
                    <li><a href="#contact"/>Contact me</li>
                    <li><a href="#About us"/>Pricing</li>
                </ul>
            </div>
            <div className='buttons'>
                <button className="sign" onClick={()=>navigate('/login')}    type='button'>Sign in</button>
                <button className="get" onClick={()=>navigate('/signup')} type='button'>Get Started</button>
            </div>
        </div>
    )
}

export default Navbar;