import  './Footer.css'
import Github from '../../img/github1.png'
import Linkedin from '../../img/linkedin.png'
import Instagram from '../../img/instagram1.png'
import Logo from '../../img/logo.png'


const Footer = () => {
  return (
    <div className="Footer-container">
        <hr/>

        <div className="footer">
            <div className="social-links">
                <img src={Github} alt="" />
                <img src={Instagram} alt="" />
                <img src={Linkedin} alt="" />
            </div>
            <div className="logo-f">
                <img src={Logo} alt="" />
            </div>
        </div>
        <div className="blur footer-blur-1"></div>
        <div className="blur footer-blur-2"></div>
    </div>
  )
}

export default Footer