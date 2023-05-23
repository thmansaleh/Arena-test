import logo from '../../assets/logo.svg'
import phoneIcone from '../../assets/phone-call-icon (1).svg'
import PhoneIcone from './PhoneIcone'
import './style.css'

const Header = () => {
  return (
    <header>
    
  <img className="logo" src={logo} alt="img" />
  <nav>
    
    <a href>Combarison</a>
    <a href>bond</a>
    <a href>testimonials</a>
    <a href>contact</a>
  </nav>
  <a href>
    {/* <img src={phoneIcone} alt="phone" /> */}
    <PhoneIcone/>
    
    0501455918</a>
</header>

  )
}

export default Header