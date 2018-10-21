import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.png'
import pic10 from '../assets/images/pic10.jpg'
import pic12 from '../assets/images/pic12.jpg'
import pic14 from '../assets/images/pic14.png'
import pic15 from '../assets/images/pic15.png'


const Landing = (props) => (
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
                    <Link to="/404" className="image">
                        <img src={pic08} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Sustainable Solution Design</h3>
                            </header>
                            <p>Students design, fabricate, erect, and test a steel bridge that meets specifications
                                and optimizes performance and economy.<br></br>Note: This event will not be hosted for the 2019 competition until further notice.</p>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/404" className="image">
                        <img src={pic09} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Concrete Canoe</h3>
                            </header>
                            <p>Students design, construct, and race a canoe made out of concrete. Arguably the most competitive civil engineering competition
                                in the world, schools fight to keep their national championship hopes from sinking.
                            </p>
                            {/*<ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>*/}
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/404" className="image">
                        <img src={pic10} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Water Treatment</h3>
                            </header>
                            <p>Students design a water filter to be construct on site, and test the efficiency of the assembled filter by treating contaminated water.
                                In this competition, teams are scored based on a design paper, construction efficiency, water test results, and a presentation.
                            </p>
                            {/*<ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                        </ul>*/}
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/404" className="image">
                        <img src={pic12} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Geo-Challenge</h3>
                            </header>
                            <p>Students design, present, construct, and test to failure a Mechanically Stabilized Earthwall (MSE) using strips of paper. 
                                For this challenge, engineering teams are judged and scored based on their presentation poster and the efficiency and quality of their reinforcement design.
                            </p>
                            {/*<ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>*/}
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/404" className="image">
                        <img src={pic15} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Transportation Challenge</h3>
                            </header>
                            <p>Student design and present solutions related to transportation and traffic that help improve mobility and safety for transportation systems and help build smarter and better communities.
                            </p>
                            {/*<ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                        </ul>*/}
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/404" className="image">
                        <img src={pic14} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Mystery Design Competition</h3>
                            </header>
                            <p>This is a special event hosted by Kiewet Construction. The details for this event will be posted. Stay tuned!
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

export default Landing