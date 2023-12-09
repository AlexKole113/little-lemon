import './index.scss';
import BrandButton from "../BrandButton";
import ProductCard from "../ProductCard";
import ProductCardGroup from "../ProductCardGroup";
const WeeksSpecial = ({cart, setCart}) => {

    const weeksSpecial = [
        {
            id: '001',
            title: 'Greek salad',
            price: 12.99,
            img: { mobile: './assets/greek-salad-mobile.webp', desktop: './assets/greek-salad-desktop.webp' },
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur commodi cum debitis doloribus fuga harum.'
        },
        {
            id: '002',
            title: 'Bruchetta',
            price: 5.99,
            img: { mobile: './assets/bruchetta-mobile.webp', desktop: './assets/bruchetta-desktop.webp' },
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur commodi cum debitis doloribus fuga harum.'
        },
        {
            id: '003',
            title: 'Lemon Desert',
            price: 5.00,
            img: { mobile: './assets/lemon-dessert-mobile.webp', desktop: './assets/lemon-dessert-desktop.webp' },
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
    ];


    return(
        <section className={'weeks-special'}>
            <div className="container">
                <div className="weeks-special_title-btn">
                    <h2 className="weeks-special_title section-title">This weeks specials</h2>
                    <BrandButton url={'/menu'} text={'Online Menu'} />
                </div>
                <ProductCardGroup>
                    { weeksSpecial.map((props) => <ProductCard {...props} key={props.id} cart={cart} setCart={setCart} />) }
                </ProductCardGroup>
            </div>
        </section>
    )
}

export default WeeksSpecial;
