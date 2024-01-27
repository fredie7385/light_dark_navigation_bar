import './Navbar.css';
import logo_light from './../../assets/logo-black.png';
import logo_dark from './../../assets/logo-white.png';
import search_light from './../../assets/search-w.png';
import search_dark from './../../assets/search-b.png';
import toggle_light from './../../assets/night.png';
import toggle_day from './../../assets/day.png';
function Navbar({theme, setTheme}) {

    const toggle_mode = () =>{
        theme == 'light' ? setTheme('dark') : setTheme('light');
    }
  return (
    <div className="navbar">
        <img src={theme == 'light' ? logo_light: logo_dark} alt="logo" className="logo" />
        <ul>
            <li>Home</li>
            <li>Products</li>
            <li>features</li>
            <li>About</li>
        </ul>
        <div className="search-box">
            <input type="text" placeholder='Search' />
            <img src={theme == 'light' ?search_light:search_dark} alt="search"/>
        </div>
        <img onClick={() =>{toggle_mode()}} src={theme == 'light' ? toggle_light: toggle_day} alt="" className="toggle-icon" />
    </div>
   
  )
}

export default Navbar