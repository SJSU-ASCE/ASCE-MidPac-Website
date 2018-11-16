import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.png'
import pic10 from '../assets/images/pic10.jpg'
import pic12 from '../assets/images/pic12.jpg'
import pic15 from '../assets/images/pic15.png'
import pic16 from '../assets/images/pic16.jpg'


const Events = (props) => (
    <Layout>
        <Helmet>
            <title>ASCE MidPac Conference 2019</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Competitions</h2>
                    </header>
                    <p>Read about our various competitve events down below! If available, click on the images for each event to see the rules.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <a href="https://www.asce.org/student_conferences" className="image">
                        <img src={pic08} alt="" />
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Sustainable Solution Competition: Dog House</h3>
                            </header>
                            <p>Students design and build a temporary shelter for a displaced dog during the aftermath of a disaster or emergency.</p>
                            <ul className="actions">
                                <li><a href="https://www.asce.org/student_conferences" className="button">Rules</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <a href="https://www.asce.org/rules-and-regulations" className="image">
                        <img src={pic09} alt="" />
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Concrete Canoe</h3>
                            </header>
                            <p>Students design, construct, and race a canoe made out of concrete. Arguably the most competitive civil engineering competition
                                in the world, schools fight to keep their national championship hopes from sinking.
                            </p>
                            <ul className="actions">
                                <li><a href="https://www.asce.org/rules-and-regulations" className="button">Rules</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <a href="https://docs.google.com/document/d/1LZ0rzwGhEQv8lbC5Roy-uEMCPf5F96swR1tpNGYxLEM/edit?usp=sharing" className="image">
                        <img src={pic10} alt="" />
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Water Treatment</h3>
                            </header>
                            <p>Students design a water filter to be construct on site, and test the efficiency of the assembled filter by treating contaminated water.
                                In this competition, teams are scored based on a design paper, construction efficiency, water test results, and a presentation.
                            </p>
                            <ul className="actions">
                                <li><a href="https://docs.google.com/document/d/1LZ0rzwGhEQv8lbC5Roy-uEMCPf5F96swR1tpNGYxLEM/edit?usp=sharing" className="button">Rules</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <a href="https://docs.google.com/document/d/1Zo8dATSO1rFnTchxC-mvoV3qi94aCgI5txmEIpApAbs/edit?usp=sharing" className="image">
                        <img src={pic12} alt="" />
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Geo-Challenge</h3>
                            </header>
                            <p>Students design, present, construct, and test to failure a Mechanically Stabilized Earthwall (MSE) using strips of paper. 
                                For this challenge, engineering teams are judged and scored based on their presentation poster and the efficiency and quality of their reinforcement design.
                            </p>
                            <p>The design poster rules can be found<a href="https://docs.google.com/document/d/1pjQfndIagWEXzNF2oE-K9MQ4BF_tI592t9EDEh4F0lQ/edit?usp=sharing">here.</a></p>
                            <p>The competition appendices, which includes the material specifications, judging/scoring rubrics, and safety appendix, can be found 
                                <a href="https://docs.google.com/document/d/19fMcwYqjWD7UeKV81E2UFnhJZljvYDCbbf36Du6hjkE/edit?usp=sharing">here.</a></p> 
                            <ul className="actions">
                                <li><a href="https://docs.google.com/document/d/1Zo8dATSO1rFnTchxC-mvoV3qi94aCgI5txmEIpApAbs/edit?usp=sharing" className="button">Rules</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <a href="https://docs.google.com/document/d/1aankYKlA84DO1tEE0adr1U1VjdgOAQILSLxuZStTeNw/edit?usp=sharing" className="image">
                        <img src={pic15} alt="" />
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Transportation Challenge</h3>
                            </header>
                            <p>Student design and present solutions related to transportation and traffic that help improve mobility and safety for transportation systems and help build smarter and better communities.
                            San Jose's city information can be found <a href="https://docs.google.com/document/d/1nqYp06eOrVJVOOeIEF-_CMhMiYqwr2EIB42dKZ6Ei2M/edit?usp=sharing">here.</a></p>
                            <ul className="actions">
                                <li><a href="https://docs.google.com/document/d/1aankYKlA84DO1tEE0adr1U1VjdgOAQILSLxuZStTeNw/edit?usp=sharing" className="button">Rules</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/404" className="image">
                        <img src={pic16} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Mystery Design Competition</h3>
                            </header>
                            <p>This is a special event hosted by Kiewit Construction. The details for this event will be posted. Stay tuned!
                            </p>
                            {/*<ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>*/}
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Events