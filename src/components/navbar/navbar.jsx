import './navbarStyle.css'

const Navbar = () => {
  return (
  <nav className="appNavbar">
    <div className="navTitle container_title container">
      <h1> Weast Bay Shoes </h1>
    </div>
    <div className="navMenu">
      <ul className="navUl container">
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
        <li className="navLi"><a className="a" href="*">Contacto</a></li>
        <li className="navLi"><a className="a"  href="*">Mi carrito</a></li>
      </ul>
    </div>
  </nav>
  )
};

export default Navbar