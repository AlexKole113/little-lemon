import './index.scss';
import BrandButton from "../BrandButton";
import ProductCard from "../ProductCard";
import ProductCardGroup from "../ProductCardGroup";
const WeeksSpecial = ({cart, setCart, menu}) => {

    //data from api <id>[]
    const weeksSpecial = [ '001', '002', '003' ];

    const getWeekSpecialFromMenuByID = ( id ) => {
        const menuItem = menu.find( (elm) => elm.id === id);
        if (menuItem) {
            return (
                <ProductCard {...menuItem} key={id} cart={cart} setCart={setCart} />
            )
        }
        return null;
    }


    return(
        <section className={'weeks-special'}>
            <div className="container">
                <div className="weeks-special_title-btn">
                    <h2 className="weeks-special_title section-title">This weeks specials</h2>
                    <BrandButton url={'/menu'} text={'Online Menu'} />
                </div>
                <ProductCardGroup>
                    { weeksSpecial.map( getWeekSpecialFromMenuByID ) }
                </ProductCardGroup>
            </div>
        </section>
    )
}

export default WeeksSpecial;
