import React, {useState} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import ErrorBoundary from "./ErrorBoundary";
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import PageHome from "../pages/Home";
import PageAbout from "../pages/About";
import PageMenu from "../pages/Menu";
import Page404 from "../pages/404";
import PageReservations from "../pages/Reservations";
import PageOrderOnline from "../pages/OrderOnline";
import PageLogin from "../pages/Login";


const App = () => {

  //data from api
  const menu = [
        {
            id: '001',
            title: 'Greek salad',
            price: 12.99,
            img: { mobile: './assets/greek-salad-mobile.webp', desktop: './assets/greek-salad-desktop.webp' },
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur commodi cum debitis doloribus fuga harum.'
        },
        {
            id: '002',
            title: 'Bruchetta',
            price: 5.99,
            img: { mobile: './assets/bruchetta-mobile.webp', desktop: './assets/bruchetta-desktop.webp' },
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur commodi cum debitis doloribus fuga harum.'
        },
        {
            id: '003',
            title: 'Lemon Desert',
            price: 5.00,
            img: { mobile: './assets/lemon-dessert-mobile.webp', desktop: './assets/lemon-dessert-desktop.webp' },
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },

        {
            id: '004',
            title: 'Greek salad',
            price: 12.99,
            img: { mobile: './assets/greek-salad-mobile.webp', desktop: './assets/greek-salad-desktop.webp' },
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur commodi cum debitis doloribus fuga harum.'
        },
        {
            id: '005',
            title: 'Bruchetta',
            price: 5.99,
            img: { mobile: './assets/bruchetta-mobile.webp', desktop: './assets/bruchetta-desktop.webp' },
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur commodi cum debitis doloribus fuga harum.'
        },
        {
            id: '006',
            title: 'Lemon Desert',
            price: 5.00,
            img: { mobile: './assets/lemon-dessert-mobile.webp', desktop: './assets/lemon-dessert-desktop.webp' },
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },

        {
            id: '007',
            title: 'Greek salad',
            price: 12.99,
            img: { mobile: './assets/greek-salad-mobile.webp', desktop: './assets/greek-salad-desktop.webp' },
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur commodi cum debitis doloribus fuga harum.'
        },
        {
            id: '008',
            title: 'Bruchetta',
            price: 5.99,
            img: { mobile: './assets/bruchetta-mobile.webp', desktop: './assets/bruchetta-desktop.webp' },
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur commodi cum debitis doloribus fuga harum.'
        },
        {
            id: '009',
            title: 'Lemon Desert',
            price: 5.00,
            img: { mobile: './assets/lemon-dessert-mobile.webp', desktop: './assets/lemon-dessert-desktop.webp' },
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
    ];

  // { id, amount }[]
  const [cart, setCart] = useState([]);



  return (
      <section className={`app`}>
          <Router>
            <Header cart={cart} />
              {/*<ErrorBoundary>*/}
                    <React.Suspense fallback={null}>
                        <Routes>
                            <Route path="/" element={<PageHome cart={cart} setCart={setCart} menu={menu} />}></Route>
                            <Route path="about" element={<PageAbout />}></Route>
                            <Route path="menu" element={<PageMenu cart={cart} setCart={setCart} menu={menu} />}></Route>
                            <Route path="reservations" element={<PageReservations />}></Route>
                            <Route path="order-online" element={<PageOrderOnline cart={cart} setCart={setCart} menu={menu} />}></Route>
                            <Route path="login" element={<PageLogin />}></Route>

                            <Route path="*" element={<Page404/>}></Route>
                        </Routes>
                    </React.Suspense>
              {/*</ErrorBoundary>*/}
            <Footer cart={cart} />
          </Router>
      </section>
  );
}

export default App;
