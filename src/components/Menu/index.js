import ProductCardGroup from "../ProductCardGroup";
import ProductCard from "../ProductCard";
import './index.scss';

const Menu = ({cart, dispatch, menu}) => {

    return (
        <section className={`menu`}>
            <div className="container">
                <ProductCardGroup>
                    { menu.map((props) => <ProductCard {...props} key={props.id} cart={cart} dispatch={dispatch} />) }
                </ProductCardGroup>
            </div>
        </section>
    )
}

export default Menu
