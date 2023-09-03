import React from 'react'
import './landing.css'
import myPic from '../images/portfolio.jpg'
import card from '../images/Card.png'
import country from '../images/Country.png'
import drum from '../images/Drum.png'
import { useNavigate } from 'react-router-dom';
import shell from '../images/shell.png'
import { Form } from '../Form Compo/Form'


export const LandingPage = () => {
    const navigate = useNavigate();
    const visitLink = ()=> navigate('/drum_machine');
    const home = () =>navigate('/');
  return (
    <div className='contain'>
        <header>
            <div className='logo' onClick={home}>TEMZ</div>
            <nav className='nav_links'>
                <ul>
                    <li>HOME</li>
                    <li>ABOUT ME</li>
                    <li>PORTFOLIO</li>
                </ul>
                <button className='contact'><a href='#Contact_us' className='footCon'>CONTACT</a></button>
            </nav>          
        </header>
        <main>
            <section className='intro'>
                <p className='desc'>I'm a </p>
                <p className='job_title'>FULL STACK SOFTWARE<br/>ENGINEER .</p>
                <button className='contact'><a href='#previous_project'>Previous Projects</a></button>
            </section>

            <section className='about'>
                <div className='intro_pic'>
                    <img src={myPic} alt='TEMITOPE' className='profile_pic'/>
                </div>
                <div className='intro_text'>
                    <h3>ABOUT ME</h3>
                    <p>I am Olowosuyi Temitope, a dedicated Full Stack Software Engineer with a passion 
                        for creating innovative web applications and solutions. My journey in the world
                         of software development has equipped me with a diverse skill set, enabling me 
                         to excel in both frontend and backend development. I am proficient in <strong>React</strong> and 
                         framework like <strong>Typscript</strong>, as well as backend technologies like Python 
                         and Node.js and their frameworks like <strong>Express.js and flask</strong>. Being a Full Stack 
                         Software Engineer, I am proficient in integrating 
                         frontend and backend components seamlessly. This includes developing RESTful APIs, 
                         managing databases, and ensuring efficient communication between the frontend and 
                         backend layers. My ability to work across the entire stack allows me to bring 
                         projects from concept to completion.
                    </p>
                </div>
            </section>

            <article>
                <section className='portfolio' id='previous_project'>
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
                        <img src={drum} alt='Drum pad' className='drum_pad'/>
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
                        <img src={shell} alt='Simple shell' className='drum_pad'/>                      
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
                        <a href='/hfgg'>Phone:  +2348107304148</a><br/>
                        <a href='/hyh'>Email:  temitopeabiodun685@gmail.com</a>
                        <p>Address: Lagos, Nigeria</p>

                    </div>
                    <Form/>
                </div>
            </footer>
        </main>
    </div>
  )
}
