import {useState} from "react";
import mainActions from "../../actions/mainActions";


const FormSelectOccasion = ({occasion, availableOccasion, dispatch}) => {

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

            <select placeholder={`Occasion`} value={occasion} onChange={onChange} >
                { availableOccasion.map( (value) => <option key={value} value={value}>{value}</option>) }
            </select>
        </div>
    )
}

export default FormSelectOccasion;
