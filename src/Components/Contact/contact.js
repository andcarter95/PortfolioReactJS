import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Loader from 'react-loaders';
import './contact.scss'

const Contact = () => {
    const refForm = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_vr1qn3h', 'template_xso1ydc', refForm.current, 'RNkxP1tQXrhTZBAXB')
          .then((result) => {
              alert('Message successfully sent!');
          }, (error) => {
              alert('Failed to send the message, please try again');
          });
      };

    return (
        <div>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>GET IN TOUCH</h1>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required/>
                                </li> 
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required/>
                                </li>
                                <li>
                                    <input type='text' name='subject' placeholder='Subject' required/>
                                </li>
                                <li>
                                    <textarea name= 'message' placeholder='Message' required/>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value="SEND"/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type='cube-transition'/>
        </div>
    )
}

export default Contact;