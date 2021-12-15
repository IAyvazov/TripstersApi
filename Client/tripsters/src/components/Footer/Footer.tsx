import './footer.css';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { ReactElement } from 'react';

const Footer = (): ReactElement => {

    var today = new Date();
    var date = today.getFullYear()

    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <h6>About</h6>
                        <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quae officia consequuntur nemo repudiandae fugiat fuga molestias ducimus quaerat assumenda voluptates quidem dolores, explicabo, consectetur reiciendis aspernatur? Saepe, officia temporibus.</p>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Categories</h6>
                        <ul className="footer-links">
                            <li><Link to="/sky">Sky</Link></li>
                            <li><Link to="/mountains">Mountains</Link></li>
                            <li><Link to="/water">Water</Link></li>
                        </ul>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Quick Links</h6>
                        <ul className="footer-links">
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-6 col-xs-12">
                        <p className="copyright-text">Copyright &copy; {date} All Rights Reserved by
                            <Link to="/"> Tripsters</Link>.
                        </p>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <ul className="social-icons">
                            <li><Link className="facebook" to="#"><FaFacebook /></Link></li>
                            <li><Link className="twitter" to="#"><FaTwitter /></Link></li>
                            <li><Link className="linkedin" to="#"><FaLinkedin /></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;