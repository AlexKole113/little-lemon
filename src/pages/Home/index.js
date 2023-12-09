import Hero from "../../components/Hero";
import WeeksSpecial from "../../components/WeeksSpecial";

const PageHome = ({cart, setCart}) => {

    return (
        <section className={`page page-home`}>
            <Hero />
            <WeeksSpecial cart={cart} setCart={setCart}  />
        </section>
    )
}

export default PageHome;
