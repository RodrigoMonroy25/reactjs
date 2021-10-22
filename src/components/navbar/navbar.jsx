import CartWidget from '../cartWidget/cartWidget';
import './navbarStyle.css';
import Logo from '../img/logo.png'


const Navbar = () => {
  return (
  <nav className="appNavbar d-flex justify-content-between">
    <div className="navTitle container_title d-flex justify-content-start">
      <h1> <image src={Logo} alt="Logo"/>WeastBay Shoes </h1>
    </div>
    <div className="navMenu">
      <ul className="navUl">
        <li className="navLi"><a className="a"  href="*">Inicio</a></li>
        <li className="navLi"><a className="a"  href="*">Calzado</a>
          <ul className="navUl d-none">
            <li className="navLi"><a className="a"  href="*">Hombre</a></li>
            <li className="navLi"><a className="a"  href="*">Mujer</a></li>
            <li className="navLi"><a className="a"  href="*">Niño</a></li>
            <li className="navLi"><a className="a"  href="*">Niña</a></li>
            <li className="navLi"><a className="a"  href="*">Unisex</a></li>
          </ul>
        </li>
        <li className="navLi"><a className="a" href="*"> Contacto </a></li>
        <li className="navLi"><a className="a"  href="*"> <CartWidget/> </a></li>
      </ul>
    </div>
  </nav>
  )
};

export default Navbar