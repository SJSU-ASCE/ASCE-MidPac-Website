import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import BannerLanding from '../components/BannerLanding'
import Layout from '../components/layout'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

const Results = (props) => (
    <div>
        <Layout>
        <Helmet>
            <title>Results Page</title>
            <meta name="description" content="Payment Page" />
        </Helmet>
        <BannerLanding />
        
        <div id="main" className="spotlight">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Results</h1>
                    </header>
                </div>
            </section>
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
        </div>
        </Layout>
    </div>
)

export default Results