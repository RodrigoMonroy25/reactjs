import { Link, NavLink } from 'react-router-dom'
import CartWidget from '../cartWidget/cartWidget';
import './navbarStyle.css';

const Navbar = () => {
  return (
  <nav className="appNavbar d-flex justify-content-between">
    <div className="navTitle container_title d-flex justify-content-start">
      <Link to={`/`}><image src="https://drive.google.com/file/d/1mPncQ8Ye1AA2FHbXJVqZsI_D48QQxqC4/view?usp=sharing" alt="Logo"/></Link>
      <Link to={`/`}><h1> WeastBay Shoes </h1></Link>
    </div>
    <div className="navMenu dropdown">
      <ul className="navUl nav">
        <li className="navLi nav-item btn"><a className="a nav-link"  href="*">Inicio</a></li>
        <li className="navLi nav-item btn"><a className="a nav-link"  href="*">Calzado</a>
          <ul className="navUl d-none">
            <li className="navLi"><NavLink to={`/category/:categoryId`} className="a"  href="*">Hombre</NavLink></li>
            <li className="navLi"><NavLink to={`/category/:categoryId`} className="a"  href="*">Mujer</NavLink></li>
          </ul>
        </li>
        <li className="navLi nav-item btn"><a className="a nav-link" href="*"> Contacto </a></li>
        <li className="navLi nav-item btn"><a className="a nav-link"  href="*"> <CartWidget/> </a></li>
      </ul>
    </div>
  </nav>
  )
};

export default Navbar