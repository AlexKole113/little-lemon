import Testimonials from "../../components/Testimonials";
import TitlePage from "../../components/TitlePage";
import Menu from "../../components/Menu";


const PageMenu = ({cart, dispatch, menu}) => (
    <section className={`page page-menu`}>
        <TitlePage text={'Menu'} />
        <Menu cart={cart} dispatch={dispatch} menu={menu} />
        <Testimonials />
    </section>
)

export default PageMenu;
