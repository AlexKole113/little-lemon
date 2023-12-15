import {useState} from "react";
import mainActions from "../../actions/mainActions";
import './styles.scss'


const SelectFormOccasion = ({occasion, availableOccasion, dispatch}) => {

    const [state, setState] = useState({ error: false, message: null });
    const setOccasion    = (payload) => dispatch({type: mainActions.userRequest.updateOccasion.type, payload });

    const onChange          = (e) => {
        e.preventDefault();
        if ( !availableOccasion.includes(e.target.value) ) {
            setState((p) => ({ error: true, message: 'Please, choose correct value' }) )
            return;
        }

        setState((p)=> ({ error: false, message: null }));
        setOccasion(e.target.value);
    }

    return(
        <div className="occasion-group">
            { state.error && <span className="alert">{state.message}</span> }
            <div className="select-customization-appearance">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                <select className={ state.error ? 'invalid' : '' } placeholder={`Occasion`} value={occasion} onChange={onChange} >
                    { availableOccasion.map( (value) => <option key={value} value={value}>{value}</option>) }
                </select>
            </div>
        </div>
    )
}

export default SelectFormOccasion;
