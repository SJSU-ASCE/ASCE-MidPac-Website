import React from 'react'

const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
            <ul className="icons">
                <li><a href="https://www.facebook.com/2019-ASCE-Mid-Pacific-Student-Conference-448518282236515/" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                <li><a href="#" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a href="#" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
                {/*<li><a href="#" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>*/}
            </ul>
            <ul className="copyright">
                {/*<li>&copy; Untitled</li>*/}<li>Created by David Tran</li>
            </ul>
        </div>
    </footer>
)

export default Footer
