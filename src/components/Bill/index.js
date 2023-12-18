import './index.scss';
import mainActions from "../../actions/mainActions";
import {Link} from "react-router-dom";

const Bill = ({cart, dispatch, menu}) => {

    const getProductTitleByID = (id) => {
        const product =  menu.find( (elm) => elm.id === id);
        if ( product ) {
            return product.title;
        }
        return null;
    }

    const getProductPriceByID = (id) => {
        const product =  menu.find( (elm) => elm.id === id);
        if ( product ) {
            return product.price;
        }
        return null;
    }

    const removeProductFromCart = (productID) => {
        const payload = cart.filter( ({id}) => id !== productID );
        dispatch( { type: mainActions.cart.updateCart.type, payload } )
    }

    const updateProductQty = ( productID, qty ) => {

        if ( qty < 1 ) {
            removeProductFromCart(productID);
            return
        }

        const payload = ([... cart]).map((prod) => {
          if(prod.id === productID) prod.amount = qty;
          return prod;
        });


        dispatch( { type: mainActions.cart.updateCart.type, payload  } )
    }


    const increase = ( productID ) => {
        const product = cart.find(({id}) => id === productID )
        updateProductQty(productID, product.amount * 1 + 1)
    }

    const decrease = (productID) => {
        const product = cart.find(({id}) => id === productID )
        updateProductQty(productID, product.amount * 1 - 1)
    }



    return (
        <section className="bill">
            <div className="container">
                <h2 className={'section-title'}>Your Order</h2>
                {
                    cart.length ? <div className="checkout-group">
                        <ol className={`dishes`}>
                            { cart.map( ({id,amount}) =>
                                <li className={'dishes_item'} key={id} >
                                    <span className="dishes_item_wrapper">
                                        <span className="dishes_item_title">{ getProductTitleByID(id) }</span>
                                        <span className="dishes_item_controls" >
                                            <span className="item-qty-controls">
                                                <a className="item-qty-controls_increase" onClick={(e)=>{e.preventDefault(); increase(id)}} href="#">+</a>
                                                <input className="item-qty-controls_input" type="number" value={amount} onChange={(e)=>{ updateProductQty(id, e.target.value ) }} />
                                                <a className="item-qty-controls_decrease" onClick={(e)=>{e.preventDefault(); decrease(id)}} href="#">-</a>
                                            </span>
                                        <span className="dishes_item_controls_price">
                                            <span className="dishes_item_price">{`$${ (getProductPriceByID(id) * amount).toFixed(2) }`}</span>
                                                <a className="dishes_item_delete" onClick={(e)=>{e.preventDefault(); removeProductFromCart(id)}} href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                                                </a>
                                            </span>
                                         </span>
                                    </span>
                                </li> )
                            }
                        </ol>
                        <p className="total">
                            <span className="total_label">Total:</span>
                            <span className="total_amount">{ `$${( cart.reduce((total, item) => total + getProductPriceByID(item.id) * item.amount , 0 )).toFixed(2)}` }</span>
                        </p>
                        <div className="order-btns">
                            <button className="brand-button">ORDER</button>
                        </div>
                    </div> :
                        <p className={`cart-empty`}>
                            You haven't added anything to your cart yet. <br/> <Link to={`/menu`}>Our menu is here</Link>.
                        </p>
                }



            </div>
        </section>
    )
}

export default Bill;
