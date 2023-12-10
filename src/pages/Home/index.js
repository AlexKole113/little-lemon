import Hero from "../../components/Hero";
import WeeksSpecial from "../../components/WeeksSpecial";
import Testimonials from "../../components/Testimonials";

const PageHome = ({cart, setCart}) => {

    return (
        <section className={`page page-home`}>
            <Hero />
            <WeeksSpecial cart={cart} setCart={setCart}  />
            <Testimonials />
        </section>
    )
}

export default PageHome;
