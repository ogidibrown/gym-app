import './Header.css'
import Logo from '../../img/logo.png'
import Bar from '../../img/bar.png'
import { useState } from 'react'


const Header = () => {
const [menuOpen, setMenuOpen] = useState(false)
  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <div className="header">
        <img src={Logo} alt="" className='logo'/>
        {(menuOpen ===false && mobile ===true )? (
          <div style={{background:'var(--appColor)', padding:'0.1rem',height:'2.5rem', marginBottom:'11.5rem'}} ><img src={Bar} alt="" style={{width:'2.5rem', height:'2.5rem'}} onClick={()=>setMenuOpen(true)} /></div>
       
         ): <ul className='header-menu'>
                <li onClick={()=>setMenuOpen()}>Home</li>
                <li onClick={()=>setMenuOpen()}>Programs</li>
                <li onClick={()=>setMenuOpen()}>Why Us</li>
                <li onClick={()=>setMenuOpen()}>Plans</li>
                <li onClick={()=>setMenuOpen()}>Testimonials</li>
            </ul>
        }
        
    </div>
  )
}

export default Header