import menuIcon from '../../../assets/menu-burger.png'
import logo from '../../../assets/logo.svg'
import './style.css'
import { useRef } from 'react'

const MobileHeaderMenu = () => {
    const mobileMenu=useRef()
    const openMenu=()=>{
        // const mobileMenu =document.getElementById('mobile-nav')
        mobileMenu.current.classList.toggle('open-menu')
    }
  return (
    <>
 
  <div className="mobile-menu-container">
    <img  src={logo} alt='' />
    <img  onClick={openMenu} src={menuIcon} alt='' />
  </div>
  <div ref={mobileMenu} className="mobile-nav">
    <a href="#">COMBARISON</a>
    <a href="#">BOND</a>
    <a href="#">TESTIMONIALS</a>
    <a href="#">CONTACT</a>
  </div>

    </>
  )
}

export default MobileHeaderMenu