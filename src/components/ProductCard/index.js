import AddToCartLink from "../AddToCartLink";
import './index.scss';

const ProductCard = ({title,price,img:{mobile,desktop}, description}) => {

    return(
        <div className={'card'}>
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
                    <span className="card_text_price">{`$${price}`}</span>
                </div>
                <div className="card_text_desc">
                    <p>{description}</p>
                </div>
                <div className="card_add-to-cart">
                    <AddToCartLink />
                </div>
            </div>
        </div>
    )
}

export default ProductCard;
