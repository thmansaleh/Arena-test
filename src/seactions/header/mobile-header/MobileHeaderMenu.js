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
  <div ref={mobileMenu} id="moblie-nav" className="mobile-nav">
    <a href="#">home</a>
    <a href="#">home</a>
    <a href="#">home</a>
    <a href="#">home</a>
  </div>

    </>
  )
}

export default MobileHeaderMenu