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
                                <h2>Results</h2>
                            </header>
                            <p>The members of the ASCE San Jose student chapter would like to express their gratitude and thanks to all students, faculty, engineering members, 
                                and supporting staff who have committed to making this event memorable for everyone involved.</p>
                                <br></br>
                            <p>Click the link below to see the results of the competition.</p>
                            <ul className="actions">
                                <li><Link to="/results" className="button next">Find Out Here</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>
               

            </Layout>
        )
    }
}

export default HomeIndex