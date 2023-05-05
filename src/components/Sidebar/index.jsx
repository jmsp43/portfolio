import { Link, NavLink } from 'react-router-dom';
import './index.scss'
import LogoJ from '../../assets/images/logoJ.png'
import subLogoJ from '../../assets/images/subLogoJ.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faProjectDiagram } from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {

    return (
        <>
            <div className = 'navBar'>
                <Link className='logo' to= '/'>
                    <img src={LogoJ} alt='J logo' />
                    <img className = 'subLogo' src={subLogoJ} alt= 'jenna'/>
                </Link>
                <nav>
                    <NavLink exact = 'true' activeclassname = 'active' to = '/'>
                        <FontAwesomeIcon icon = {faHome} color= '#4d4d4e' />
                    </NavLink>

                    <NavLink exact = 'true' activeclassname = 'active' to = '/about' className='aboutLink'>
                        <FontAwesomeIcon icon = {faUser} color= '#4d4d4e' />
                    </NavLink>

                    <NavLink exact = 'true' activeclassname = 'active' to = '/projects' className='projectsLink'>
                        <FontAwesomeIcon icon = {faProjectDiagram} color= '#4d4d4e' />
                    </NavLink>

                    <NavLink exact = 'true' activeclassname = 'active' to = '/contact' className = 'contactLink'>
                        <FontAwesomeIcon icon = {faEnvelope} color= '#4d4d4e' />
                    </NavLink>
                </nav>

                <ul>
                    <li>
                        <a target= '_blank' rel='noreferrer' href = 'https://www.linkedin.com/in/jennamsperez/'>
                            <FontAwesomeIcon icon= {faLinkedin} color= '#4d4d4e'/>
                        </a>
                    </li>

                    <li>
                        <a target= '_blank' rel='noreferrer' href = 'https://github.com/jmsp43'>
                            <FontAwesomeIcon icon= {faGithub} color= '#4d4d4e'/>
                        </a>
                    </li>
                </ul>
            </div> 
        </>
    )
}

export default Sidebar;