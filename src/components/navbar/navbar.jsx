import { Link, NavLink } from 'react-router-dom'
import CartWidget from '../cartWidget/cartWidget';
import Images from '../../assets/img/img.js';
import './navbarStyle.css';

const Navbar = (props) => {
  return (
  <nav className="appNavbar d-flex justify-content-between">
    <div className="navTitle container_title d-flex justify-content-start">
      <Link to={`/`}><image src={Images[0].img} alt="Logo"/></Link>
      <Link to={`/`}><h1> WeastBay Shoes </h1></Link>
    </div>
    <div className="navMenu dropdown">
      <ul className="navUl nav">  
        <li className="navLi nav-item btn"><Link to={`/`} className="a nav-link">Inicio</Link></li>
        <li className="navLi nav-item btn"><a className="a nav-link"  href="*">Calzado</a>
          <ul className="navUl d-none">
            <li className="navLi"><NavLink to={`/category/:categoryId`} className="a"  href="*">Hombre</NavLink></li>
            <li className="navLi"><NavLink to={`/category/:categoryId`} className="a"  href="*">Mujer</NavLink></li>
          </ul>
        </li>
        <li className="navLi nav-item btn"><a className="a nav-link" href="*"> Contacto </a></li>
        <li className="navLi nav-item btn"><Link to={`/cart`} className="a nav-link"> <CartWidget/> </Link></li>
      </ul>
    </div>
  </nav>
  )
};

export default Navbar