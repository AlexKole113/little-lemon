import Hero from "../../components/Hero";
import WeeksSpecial from "../../components/WeeksSpecial";
import Testimonials from "../../components/Testimonials";
import CTA from "../../components/CTA";


const PageHome = ({cart, setCart}) => (
    <section className={`page page-home`}>
        <Hero />
        <WeeksSpecial cart={cart} setCart={setCart}  />
        <Testimonials />
        <CTA />
    </section>
)

export default PageHome;
