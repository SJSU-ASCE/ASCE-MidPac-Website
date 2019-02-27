import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="ASCE MidPac 2019"
                    meta={[
                        { name: 'description', content: 'Information about ASCE Mid-Pacific Conference' },
                        { name: 'keywords', content: 'ASCE, MidPac' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                {/*
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Aliquam</h3>
                                <p>Ipsum dolor sit amet</p>
                            </header>
                            <Link to="/events" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Tempus</h3>
                                <p>feugiat amet tempus</p>
                            </header>
                            <Link to="/events" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Magna</h3>
                                <p>Lorem etiam nullam</p>
                            </header>
                            <Link to="/events" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Ipsum</h3>
                                <p>Nisl sed aliquam</p>
                            </header>
                            <Link to="/events" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>Consequat</h3>
                                <p>Ipsum dolor sit amet</p>
                            </header>
                            <Link to="/events" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>Etiam</h3>
                                <p>Feugiat amet tempus</p>
                            </header>
                            <Link to="/events" className="link primary"></Link>
                        </article>
                    </section>
                    */}
                    <section id="two" className="spotlights">
                        <div className="inner">
                            <header className="major">
                                <h2>What is Mid-Pac?</h2>
                            </header>
                            <p>San Jose State University is proud to host the 2019 American Society of Civil Engineers Mid-Pacific Conference! Every year, ASCE hosts a conference to bring together students from all throughout each region from all of the ASCE student
						    chapters.  The Mid-Pacific Conference includes chapters from Fresno, California to Reno, Nevada. This also includes chapters in Canada
						    and China.  This event allows future civil engineers to gain valuable hands-on experience by competing in various building and design events.</p>
                            <p>The event will be hosted from April 18th to April 20th, 2019.</p>
                            <ul className="actions">
                                <li><Link to="/events" className="button next">Learn More</Link></li>
                            </ul>
                        </div>
                    
                        <div className="inner">
                            <header className="major">
                                <h2>What happened to the Steel Bridge Competition?</h2>
                            </header>
                            <p>ASCE and AISC are no longer partners in organizing the Steel Bridge Competition, as ASCE is no longer affiliated with this event. 
                                Steel Bridge Competition will be hosted at Cal Poly SLO from April 4th-6th, 2019, but only by AISC. For any teams still interested in participating,
                                please check out <a href = "https://www.aisc.org/modernsteel/news/2018/july/important-changes-to-the-student-steel-bridge-competition/">AISC.</a></p> 
                        </div>
                        <div className="inner">
                            <header className="major">
                                <h2>Where are the MidPac mailers?</h2>
                            </header>
                            <p>Mailer 1 can be found <a href = "https://drive.google.com/open?id=1digfp5odKV_5FwgAZ39E28Q3Bw0hUnZz">here</a> and Mailer 2 can be found <a href = "https://drive.google.com/open?id=1trhfuxvn2RDO6VYELzBxuN7E9JHL2joE">here.</a></p> 
                        </div>
                    </section>
                </div>
               

            </Layout>
        )
    }
}

export default HomeIndex