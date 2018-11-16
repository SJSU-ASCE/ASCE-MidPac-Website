import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

const Sponsor = (props) => (
    <Layout>
        <Helmet>
            <title>Sponsor</title>
            <meta name="description" content="Why You Should Sponsor This Event" />
        </Helmet>

        <div id="main" className="">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Sponsor Today!</h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
                    <p>Due to the nature of the conference, the cost of our event quickly adds up to a price of nearly $100,000!  We are expecting more than 650 students to attend MidPac 2019 and this event will only continue to grow.</p>
                    <p>Being a sponsor for MidPac 2019 means your company will have a chance to show support to participants and students by providing financial support through your generous donation.</p>
                    <p>All companies who sponsor our event will have the opportunity to not only engage with students on the first day, but also advertise jobs and more!</p>
                    <p>Take a look at the sponsorship levels below. They will show you how you can get involved with the Mid-Pacific Conference and the benefits you will receive. Your sponsorship will be responsible for investing in the future generations of engineers.</p>
                    <p className="link"><a href="https://docs.google.com/document/d/1ITjvRbo5iax40Qp5paFHt-Il5Rl1fOTfXIwH39ugZf8/edit?usp=sharing">Sponsorship PDF</a></p>
                    <p>For those who would like to donate to this community event, please click <a href="power.sjsu.edu/midpac2019">here.</a></p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Sponsor