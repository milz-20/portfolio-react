import React from 'react';
import './About.css';
import theme_pattern from './../../assets/theme_pattern.svg';
import profile_pic from './../../assets/profile_pic.jpg';

const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt=''></img>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_pic} alt=''></img>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am interested in developing global applications with the right sense of pratices to enhance and amplify user experience</p>
                    <p>Looking forward to know more about me?</p>
                    <p className='spacing'>Check out my skills below !</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "50%"}}/></div>
                    <div className="about-skill"><p>ReactJS</p><hr style={{width: "70%"}}/></div>
                    <div className="about-skill"><p>Javascript</p><hr style={{width: "60%"}}/></div>
                    <div className="about-skill"><p>NextJS</p><hr style={{width: "50%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>2+</h1>
                <p>Years of experience</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>20+</h1>
                <p>Projects completed</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>15+</h1>
                <p>Happy clients</p>
            </div>
        </div>
    </div>
  )
}

export default About