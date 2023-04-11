import { faCss3, faGitAlt, faHtml5, faJsSquare, faNode, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './about.scss';
import Loader from 'react-loaders';

const About = () => {

    return (
        <div>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>About Me</h1>
                <hr/>
                <p>
                    I'm an ambitious and motivated software developer looking for an
                    opportunity to work on challenging projects for an established company.
                </p>
                <p>
                    I have spent the last year acquiring the skills required to be a
                    successful full stack developer at Kansas State University; using that time to learn various 
                    languages and platforms such as: HTML, CSS, React, JavaScript, PostgresSQL, 
                    MongoDB, NodeJS and Python. While spending my time outside of class taking courses 
                    on Udemy in React and JavaScript.
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faHtml5} color='#DD0031'/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faCss3} color='#F06529'/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faJsSquare} color='#28A4D9'/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faGitAlt} color='#EFD81D'/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faNode} color='#303030'/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type="cube-transition"/>
        </div>
    )
}

export default About;