import AddToCartLink from "../AddToCartLink";
import './index.scss';
import {Link} from "react-router-dom";

const ProductCard = ({id, title,price,img:{mobile,desktop}, description, cart, dispatch }) => {
    const isInCart       = () => cart.find( (elm) => elm.id === id)

    return(
        <div className={'card'}>
            { isInCart() && (<Link className="go-to-cart" to={`/order-online`}>
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512">
                    <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
                </svg>
            </Link>)
            }
            <div className="card_wrapper">
                <figure className="card_img">
                    <picture>
                        <source media="(max-width: 767px)" srcSet={mobile} />
                        <source media="(min-width: 768px)" srcSet={desktop} />
                        <img src={mobile} alt={title} />
                    </picture>
                </figure>
                <div className="card_text">
                    <div className="card_text_title-price">
                        <h3 className="card_text_title">{title}</h3>
                        <span className="card_text_price">{`$${price.toFixed(2)}`}</span>
                    </div>
                    <div className="card_text_desc">
                        <p>{description}</p>
                    </div>
                    <div className="card_add-to-cart">
                        <AddToCartLink id={id} dispatch={dispatch} isInCart={isInCart} cart={cart}  />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;
