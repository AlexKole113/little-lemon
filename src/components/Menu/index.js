import ProductCardGroup from "../ProductCardGroup";
import ProductCard from "../ProductCard";
import './index.scss';

const Menu = ({cart, setCart}) => {

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

        {
            id: '004',
            title: 'Greek salad',
            price: 12.99,
            img: { mobile: './assets/greek-salad-mobile.webp', desktop: './assets/greek-salad-desktop.webp' },
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur commodi cum debitis doloribus fuga harum.'
        },
        {
            id: '005',
            title: 'Bruchetta',
            price: 5.99,
            img: { mobile: './assets/bruchetta-mobile.webp', desktop: './assets/bruchetta-desktop.webp' },
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur commodi cum debitis doloribus fuga harum.'
        },
        {
            id: '006',
            title: 'Lemon Desert',
            price: 5.00,
            img: { mobile: './assets/lemon-dessert-mobile.webp', desktop: './assets/lemon-dessert-desktop.webp' },
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },

        {
            id: '007',
            title: 'Greek salad',
            price: 12.99,
            img: { mobile: './assets/greek-salad-mobile.webp', desktop: './assets/greek-salad-desktop.webp' },
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur commodi cum debitis doloribus fuga harum.'
        },
        {
            id: '008',
            title: 'Bruchetta',
            price: 5.99,
            img: { mobile: './assets/bruchetta-mobile.webp', desktop: './assets/bruchetta-desktop.webp' },
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur commodi cum debitis doloribus fuga harum.'
        },
        {
            id: '009',
            title: 'Lemon Desert',
            price: 5.00,
            img: { mobile: './assets/lemon-dessert-mobile.webp', desktop: './assets/lemon-dessert-desktop.webp' },
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
    ];

    return (
        <section className={`menu`}>
            <div className="container">
                <ProductCardGroup>
                    { weeksSpecial.map((props) => <ProductCard {...props} key={props.id} cart={cart} setCart={setCart} />) }
                </ProductCardGroup>
            </div>
        </section>
    )
}

export default Menu
