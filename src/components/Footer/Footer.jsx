import  './Footer.css'
import Github from '../../img/github1.png'
import Linkedin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Logo from '../../img/logo.png'


const Footer = () => {
  return (
    <div className="Footer-container">
        <hr/>
        <div className="footer">
            <img src={Github} alt="" />
            <img src={Instagram} alt="" />
            <img src={Linkedin} alt="" />
        </div>
        <div className="logo-footer">
            <img src={Logo} alt="" />
        </div>
    </div>
  )
}

export default Footer