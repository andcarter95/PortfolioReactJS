import { Link } from 'react-router-dom';
import './sidebar.scss'

const Sidebar = () => {
    

    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'></Link>
        </div>
            
    )
};

export default Sidebar;