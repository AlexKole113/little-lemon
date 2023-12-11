import TitlePage from "../../components/TitlePage";
import Bill from "../../components/Bill";

const PageOrderOnline = ({cart,setCart, menu}) => (
    <section className={`page page-order-online`}>
        <TitlePage text={'Order Online'} />
        <Bill cart={cart} setCart={setCart} menu={menu} />
    </section>
)
export default PageOrderOnline;
