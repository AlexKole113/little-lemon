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

  const [cart, setCart] = useState([]);



  return (
      <section className={`app`}>
          <Router>
            <Header cart={cart} />
              {/*<ErrorBoundary>*/}
                    <React.Suspense fallback={null}>
                        <Routes>
                            <Route path="/" element={<PageHome cart={cart} setCart={setCart} />}></Route>
                            <Route path="about" element={<PageAbout />}></Route>
                            <Route path="menu" element={<PageMenu cart={cart} setCart={setCart} />}></Route>
                            <Route path="reservations" element={<PageReservations />}></Route>
                            <Route path="order-online" element={<PageOrderOnline />}></Route>
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
