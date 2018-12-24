import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

const Payment = (props) => (
    <div>
        <Layout>
        <Helmet>
            <title>Payment Page</title>
            <meta name="description" content="Payment Page" />
        </Helmet>

        <div id="main" className="spotlight">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Payment</h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
                    <p>Pay by going to the link down below (credit card only).</p>
                    <br></br>
                    <a href="https://commerce.cashnet.com/ASCEsjsu">https://commerce.cashnet.com/ASCEsjsu</a>
                    <br></br><br></br><br></br>
                    <p>If you are paying by check, please send it to the email at the bottom of the screen.</p>
                </div>
            </section>
        </div>
        </Layout>
    </div>
)

export default Payment