import Hero from "../../components/Hero";
import WeeksSpecial from "../../components/WeeksSpecial";

const PageHome = () => {

    return (
        <section className={`page page-home`}>
            <Hero />
            <WeeksSpecial />
        </section>
    )
}

export default PageHome;
