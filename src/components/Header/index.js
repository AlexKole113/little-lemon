import {Link, NavLink} from "react-router-dom";
import './index.scss'
import {useState} from "react";

const Header = () => {

    const [isMobileMenuActive, setMobileMenuActive] = useState(0)

    const isActive = ({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""


    return(
      <header className={`header`}>
          <div className="container">
              <div className="header_group">
                  <figure className={'header_logo'}>
                      <picture>
                          <Link title={'Home'} to="/">
                              <img src="./assets/Logo.svg" alt="logo" />
                          </Link>
                      </picture>
                  </figure>
                  <nav className={ `header_nav ${ isMobileMenuActive ? 'mobile-menu-active' : '' }`}>
                      <ul>
                          <li onClick={()=>setMobileMenuActive(0)}>
                              <NavLink to={'/'}  className={isActive} >HOME</NavLink>
                          </li>
                          <li onClick={()=>setMobileMenuActive(0)}>
                              <NavLink to={'/about'} className={isActive} >ABOUT</NavLink>
                          </li>
                          <li onClick={()=>setMobileMenuActive(0)}>
                              <NavLink to={'/menu'} className={isActive} >MENU</NavLink>
                          </li>
                          <li onClick={()=>setMobileMenuActive(0)}>
                              <NavLink to={'/reservations'} className={isActive} >RESERVATIONS</NavLink>
                          </li>
                          <li onClick={()=>setMobileMenuActive(0)}>
                              <NavLink to={'/order-online'} className={isActive} >ORDER ONLINE</NavLink>
                          </li>
                          <li onClick={()=>setMobileMenuActive(0)}>
                              <NavLink to={'/login'} className={isActive} >LOGIN</NavLink>
                          </li>
                      </ul>
                  </nav>

                  <button onClick={() => setMobileMenuActive((prevSt) => !prevSt) } className={`mobile-menu-toggler`}>
                      { isMobileMenuActive ? <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M61.1 224C45 224 32 211 32 194.9c0-1.9 .2-3.7 .6-5.6C37.9 168.3 78.8 32 256 32s218.1 136.3 223.4 157.3c.5 1.9 .6 3.7 .6 5.6c0 16.1-13 29.1-29.1 29.1H61.1zM144 128a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm240 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM272 96a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM16 304c0-26.5 21.5-48 48-48H448c26.5 0 48 21.5 48 48s-21.5 48-48 48H64c-26.5 0-48-21.5-48-48zm16 96c0-8.8 7.2-16 16-16H464c8.8 0 16 7.2 16 16v16c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V400z"/></svg> }
                  </button>
              </div>
          </div>
      </header>
    );
}
export default Header;
