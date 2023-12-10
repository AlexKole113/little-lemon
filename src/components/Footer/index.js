import {Link, NavLink} from "react-router-dom";
import './index.scss';

const Footer = ({cart}) => {

    const socialIconsMap = new Map([
        [ 'facebook', <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg> ],
        [ 'twitter', <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg> ],
        [ 'instagram', <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg> ],

    ])

    const socialLinks = [
        {
            id: '001',
            icon: 'facebook' ,
            url: 'https://facebook.com'
        },
        {
            id: '002',
            icon: 'twitter',
            url: 'https://twitter.com'
        },
        {
            id: '003',
            icon: 'instagram',
            url: 'https://instagram.com'
        },
    ]

    const isActive = ({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""

    return(
     <footer className='footer'>
         <div className="container">
             <div className="footer_group">

                 <div className="footer_col">
                     <div className="footer-logo-group">
                         <figure className={'footer_logo'}>
                             <picture>
                                 <Link title={'Home'} to="/">
                                     <img src="./assets/Logo.svg" alt="logo" />
                                 </Link>
                             </picture>
                         </figure>
                         <div className="footer-logo-group_social">
                             {  socialLinks.map( ({id, icon, url}) => <Link key={id} title={`go to ${icon}`} to={url}>{ socialIconsMap.get(icon) }</Link>  ) }
                         </div>
                     </div>
                 </div>

                 <div className="footer_col">
                     <h5 className="footer_title section-title">Contact Info</h5>
                     <address className="footer_text">
                         Washington DC, <br/> 1-133 20008
                     </address>
                     <ul className="contacts">
                         <li className="contacts_item">
                             <a href="tel:+1234567890">
                                 <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                                 <span className="contacts_item_txt">
                                     +1234567890
                                 </span>
                             </a>
                         </li>
                     </ul>
                 </div>

                 <div className="footer_col">
                     <h5 className="footer_title section-title">Doormat Navigation</h5>
                     <nav className={ `footer_nav` }>
                         <ul>
                             <li>
                                 <NavLink to={'/'}  className={isActive} >HOME</NavLink>
                             </li>
                             <li>
                                 <NavLink to={'/about'} className={isActive} >ABOUT</NavLink>
                             </li>
                             <li>
                                 <NavLink to={'/menu'} className={isActive} >MENU</NavLink>
                             </li>
                             <li>
                                 <NavLink to={'/reservations'} className={isActive} >RESERVATIONS</NavLink>
                             </li>
                             <li>
                                 { cart.length ? <span className={`in-cart`}>{cart.length}</span> : '' }
                                 <NavLink to={'/order-online'} className={isActive} >ORDER ONLINE</NavLink>
                             </li>
                             <li>
                                 <NavLink to={'/login'} className={isActive} >LOGIN</NavLink>
                             </li>
                         </ul>
                     </nav>
                 </div>


             </div>
         </div>
     </footer>
    );
}
export default Footer;
