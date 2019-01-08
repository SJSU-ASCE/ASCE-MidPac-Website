import React from 'react'
import kiewit from '../assets/images/kiewet-color.png'

const Contact = (props) => (
    <section id="contact">
        <div className="inner">{/*
            <section>
                <form name="contact" method="POST" action="../success" data-netlify="true" data-netlify-honeypot="bot-field" netlify>
                <input type="hidden" name="bot-field" />
                    <div className="field half first">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="6"></textarea>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Send Message" className="special" /></li>
                        <li><input type="reset" value="Clear" /></li>
                    </ul>
                </form>
            </section>*/}
            <section>
                <div className="contact-method">
                    <span className="icon alt fa-star"></span>
                    <h3>Thanks to Our Sponsors</h3>
                    <img className="sponsor-image"src={kiewit} alt="../assets/images/kiewet-color.png"></img>
                </div>
            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="mailto:midpac@sjsuasce.org">midpac@sjsuasce.org</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Address</h3>
                        <span>1 Washington Square<br/>
                        San Jose, California 95192<br/>
                        United States of America</span>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-calendar"></span>
                        <h3>Date</h3>
                        <span>From: April 18th, 2019<br/>
                        To: April 20th, 2019</span>
                    </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact
