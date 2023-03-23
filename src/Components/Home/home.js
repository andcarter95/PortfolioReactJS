import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import './home.scss';

const Home = () => {

    return (
        <div>
            <div className='container home-page'>
                <div className='text-zone'>
                    <h1>Hi, <br/> I'm Andrew Carter
                        <br/> software developer
                    </h1>
                    <h2>
                        Javascript / React / HTML / CSS / SQL
                    </h2>
                    <Link to='/contact' className='flat-button'>CONTACT ME</Link>
                </div>
            </div>
            <Loader type='cube-transition'/>
        </div>
    )
}

export default Home;