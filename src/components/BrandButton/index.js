import {Link} from "react-router-dom";
import './index.scss';

const BrandButton = ({url,text}) => {

    return(
        <Link className="brand-button" to={url}>{text}</Link>
    )
}

export default BrandButton;
