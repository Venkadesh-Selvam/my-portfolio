import React ,{ useRef } from 'react'
import './Contact.css';
import FacebookIcon from '../../assets/facebook-icon.png'
import InstagramIcon from '../../assets/instagram.png'
import TwitterIcon from '../../assets/twitter.png'
import YouTubeIcon from '../../assets/youtube.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_r1grzcv', 'template_nw7lf4g', form.current, '63tvBWoyDAXuIqpme')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('E-mail Sent Successfully!')
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <section id="contactMe">
        <h1 className="contactTitle">
            Connect Me
        </h1>
        <span className="contactDescription">
            Please Fill-Out the Form Below to Discuss About Work Opportunities 
        </span>
        <form className="contactForm" ref= {form} onSubmit={sendEmail}>
            <input type="text" className="name"  placeholder='Enter Your Name' name='from_name'/>
            <input type="email" className="email" placeholder='Enter Your email' name='from_email'/>
            <textarea name="message" rows="5" className="message" placeholder='Enter Your Message'></textarea>
            <button type='submit' value='send' className="contactBtn">
                Submit
            </button>
            <div className="contactLinks">
                <img src={FacebookIcon} alt="FacebookIcon" className="link" />
                <img src={InstagramIcon} alt="InstagramIcon" className="link" />
                <img src={TwitterIcon} alt="TwitterIcon" className="link" />
                <img src={YouTubeIcon} alt="YouTubeIcon" className="link" />
            </div>
        </form>
        
    </section>
  )
}

export default Contact
