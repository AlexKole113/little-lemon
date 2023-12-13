import Hero from "../../components/Hero";
import WeeksSpecial from "../../components/WeeksSpecial";
import Testimonials from "../../components/Testimonials";
import CTA from "../../components/CTA";


const PageHome = ({cart, menu, dispatch}) => (


    <section className={`page page-home`}>
        <Hero />
        <WeeksSpecial cart={cart} dispatch={dispatch} menu={menu} />
        <Testimonials />
        <CTA />
    </section>
)

export default PageHome;
