import './index.scss'
const ProductCardGroup = ({children}) => (
    <div data-test-id="menu-card-group" className="product-card-group">
        {children}
    </div>
)

export default ProductCardGroup;
