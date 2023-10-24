import React from 'react';
import './Intro.css';
import image from '../../assets/image.png';
import hireme from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContents'>
            <span className="hello">Hello,</span>
            <span className="introText">
                I'm  <span className="introName">Venkadesh<br /></span>Frontend Developer
            </span>
            <p className="introPara">
                 My passion lies in transforming design concepts <br /> into interactive, user-friendly digital realities
            </p>
            <Link>
                <button className="introBtn">
                    <img src={hireme} alt="" className="introBtnImg" />
                    Hire Me 
                </button>
            </Link>
        </div>
        <img src={image} alt='' className='introImg' />
    </section>
  )
}

export default Intro
