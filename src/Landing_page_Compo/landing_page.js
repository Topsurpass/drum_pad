import React from 'react'
import './landing.css'
import { useState } from 'react';
import myPic from '../images/portfolio.jpg'
import card from '../images/Card.png'
import country from '../images/Country.png'
import drum from '../images/Drum.png'
import { useNavigate } from 'react-router-dom';
import shell from '../images/shell.png'
import { Form } from '../Form Compo/Form'
import axios from 'axios';


export const LandingPage = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [messg, setMessg] = useState('')
  
    // Control the email, name and message field from react
    const handleName = (event) => {
      setName(event.target.value);
    }
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handleMessage = (event) => {
        setMessg(event.target.value);
    }
    // Make a post request to the server
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            'name' : name,
            'email' : email,
            'message' : messg
        };
        axios.post('https://drumpad.temz.tech/api/v1/', data, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            alert(response.data);
            setName("");
            setEmail("");
            setMessg("");
        })
        .catch(err => {
            alert(err);
        })
    }
  
    const navigate = useNavigate();
    const visitLink = ()=> navigate('/drum_machine');
    const home = () =>navigate('/');

  return (
    <div className='contain'>
        <header>
            <div className='logo' id="home" onClick={home}>TEMZ</div>
            <nav className='nav_links'>
                <ul>
                    <a href='#home' onClick={home}><li>HOME</li></a>
                    <a href='#about'><li>ABOUT ME</li></a>
                    <a href="#portfolio"><li>PORTFOLIO</li></a>
                </ul>
                <button className='contact'><a href='#Contact_us' className='footCon'>CONTACT</a></button>
            </nav>          
        </header>
        <main>
            <section className='intro'>
                <p className='desc'>I'm a </p>
                <p className='job_title'>FULL STACK SOFTWARE<br/>ENGINEER .</p>
                <button className='contact'><a href='#portfolio'>Previous Projects</a></button>
            </section>

            <section className='about'>
                <div className='intro_pic'>
                    <img src={myPic} alt='TEMITOPE' className='profile_pic'/>
                </div>
                <div className='intro_text'>
                    <h3 id="about">ABOUT ME</h3>
                    <p>I am Olowosuyi Temitope, a current student of ALX software engineering program and
                        a dedicated Full Stack Software Engineer with a passion 
                        for creating innovative web applications and solutions. With my passion to be a Full Stack 
                         Software Engineer, I aim to integrate frontend and backend components seamlessly, developing 
                         RESTful APIs enpoints, managing databases, and ensuring efficient communication between the frontend and 
                         backend layers. The ability to be able to work across the entire stack is one thing that inspires me alot.     projects from concept to completion.
                    </p>
                </div>
            </section>

            <article>
                <section className='portfolio' id='portfolio'>
                    <h3>PORTFOLIO</h3>
                    <ul>
                        <li>Mobile</li>
                        <li> Website</li>
                        <li>Desktop</li>
                        <li>Others</li>
                    </ul>
                </section>

                <section className='projects'>
                    <div className='proj'>
                        <div className='pad'>
                            <h3>Drum machine</h3>
                            <p>The Mini Drum pad Application is a software project that aims 
                                to create a simple and interactive drum pad, allowing users to 
                                produce beats using designated keyboard keys. The application will 
                                provide an intuitive user interface, offering a fun and creative way 
                                for music enthusiasts to experiment with drum sounds.
                            </p>
                            <button id="visit" onClick={visitLink}>Play Drumpad</button>
                        </div>
                        <img src={drum} alt='Drum pad' className='drum_pad space'/>
                    </div>

                    <div className='proj'>
                        <div className='pad'>
                            <h3>Simple shell</h3>
                            <p>The simple shell is a simple form of the command-line interface (CLI) 
                                or text-based user interface provided by the Linux operating system. 
                                It is a program that allows users to interact with the Linux kernel 
                                and perform various tasks by entering text-based commands.
                            </p>
                            <button id="visit"><a href='https://github.com/Topsurpass/simple_shell' target='_blank' rel='noreferrer'> Install shell </a></button>
                        </div>
                        <img src={shell} alt='Simple shell' className='drum_pad space'/>                      
                    </div>

                    <div className='proj'>
                        <div className='pad'>
                            <h3>Credit Card</h3>
                            <p>This is a simple, single page UI of a credit card. This project aims to 
                                perfect data and form validation in reactjs. This is crucial in applications 
                                that requires valid inputs from users.
                            </p>
                            <button id="visit"><a href='https://createcard.netlify.app' target='_blank' rel='noreferrer'>Create Credit card</a></button>
                        </div>
                        <img src={card} alt='Credit card' className='drum_pad'/>
                    </div>

                    <div className='proj'>
                        <div className='pad'>
                            <h3>Anywhere in the world</h3>
                            <p>This is simple website that shows the map and brief information about a particular
                                country. It shows information such as the capital, currency, time zone, border countries e.t.c.
                                It does this by consuming api form another website.
                            </p>
                            <button id="visit"><a href='https://temzcountry.netlify.app' target='_blank' rel='noreferrer'>Check your country</a></button>
                        </div>
                        <img src={country} alt='WEBSITE' className='drum_pad'/>
                    </div>
                </section>
            </article>
            <footer className='contactForm' id='Contact_us'>
                <h3>CONTACT</h3>
                <div className='fillform'>
                    <div className='phone'>
                        <strong>Drop a message</strong><br/><br/>
                        <p>Kindly help me fill the form so I can get in touch with you and further 
                            discuss the service you need me to render for you.<br/>
                            You can also reach me via the below means:
                        </p>
                        <a href="tel:+2348107304148">Phone:  +2348107304148</a><br/>
                        <a href="mailto:temitopeabiodun685@gmail.com">Email:  temitopeabiodun685@gmail.com</a>
                        <p>Address: Lagos, Nigeria</p>

                    </div>
                    <Form myname  = {name} myemail = {email} mytext = {messg}
                        changeName = {handleName} changeEmail = {handleEmail}
                        changeMytext = {handleMessage} nowSubmit = {handleSubmit}/>
                </div>
            </footer>
        </main>
    </div>
  )
}
