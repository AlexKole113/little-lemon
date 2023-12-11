import './index.scss';

const Bill = ({cart,setCart, menu}) => {

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


    return (
        <section className="bill">
            <div className="container">
                <h2 className={'section-title'}>Your Order</h2>
                <ul>
                    { cart.map(({id,amount}) => <li key={id} >{ getProductTitleByID(id) } - {amount} - {`$${getProductPriceByID(id)}`}</li>) }
                </ul>

            </div>
        </section>
    )
}

export default Bill;
