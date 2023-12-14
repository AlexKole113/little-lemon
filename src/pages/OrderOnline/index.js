import TitlePage from "../../components/TitlePage";
import Bill from "../../components/Bill";

const PageOrderOnline = ({cart,dispatch, menu}) => (
    <section className={`page page-order-online`}>
        <TitlePage text={'Order Online'} />
        <Bill cart={cart} dispatch={dispatch} menu={menu} />
    </section>
)
export default PageOrderOnline;
