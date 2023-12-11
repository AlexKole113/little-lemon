import Hero from "../../components/Hero";
import WeeksSpecial from "../../components/WeeksSpecial";
import Testimonials from "../../components/Testimonials";
import CTA from "../../components/CTA";


const PageHome = ({cart, setCart, menu}) => (
    <section className={`page page-home`}>
        <Hero />
        <WeeksSpecial cart={cart} setCart={setCart} menu={menu} />
        <Testimonials />
        <CTA />
    </section>
)

export default PageHome;
