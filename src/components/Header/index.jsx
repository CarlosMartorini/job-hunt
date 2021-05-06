import { Component } from "react";
import './styles.css';
import Logo from '../../assets/logo.png';

class Header extends Component {
    render() {
        return(
            <header className='header-container'>
                <img src={Logo} alt='logo'/>
            </header>
        )
    }
}

export default Header;