import Testimonials from "../../components/Testimonials";
import TitlePage from "../../components/TitlePage";
import Menu from "../../components/Menu";


const PageMenu = ({cart, setCart, menu}) => (
    <section className={`page page-menu`}>
        <TitlePage text={'Menu'} />
        <Menu cart={cart} setCart={setCart} menu={menu} />
        <Testimonials />
    </section>
)

export default PageMenu;
