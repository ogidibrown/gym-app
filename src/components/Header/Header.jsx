import './Header.css'
import Logo from '../../img/logo.png'
import Bar from '../../img/bar.png'
import { useState } from 'react'
import { Link } from 'react-scroll'


const Header = () => {
const [menuOpen, setMenuOpen] = useState(false)
  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <div className="header">
        <img src={Logo} alt="" className='logo'/>
        {(menuOpen ===false && mobile ===true )? (
          <div style={{background:'var(--appColor)', padding:'0.1rem',height:'2.5rem', marginBottom:'11.5rem'}} ><img src={Bar} alt="" style={{width:'2.5rem', height:'2.5rem'}} onClick={()=>setMenuOpen(true)} /></div>
       
         ): <ul className='header-menu'>
                <li> <Link onClick={()=>setMenuOpen(false)} to='home' span={true} smooth={true}>Home</Link> </li>
                <li> <Link onClick={()=>setMenuOpen(false)} to='programs' span={true} smooth={true}>Programs</Link> </li>
                <li> <Link onClick={()=>setMenuOpen(false)} to='reasons' span={true} smooth={true}>Why Us</Link> </li>
                <li> <Link onClick={()=>setMenuOpen(false)} to='plan' span={true} smooth={true}> Plans</Link></li>
                <li> <Link onClick={()=>setMenuOpen(false)} to='testimonials' span={true} smooth={true}>Testimonials</Link> </li>
            </ul>
        }
        
    </div>
  )
}

export default Header