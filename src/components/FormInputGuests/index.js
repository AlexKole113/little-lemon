import {useState} from "react";
import mainActions from "../../actions/mainActions";


const FormInputGuests = ({guests, dispatch}) => {


    const [state, setState] = useState({ error: false, message: null });
    const guestNumberLimits = {
        min: 1,
        max: 10
    }

    const setGuestNumber = (payload) => dispatch({type: mainActions.userRequest.updateGuests.type, payload });
    const onChange = (e) => {
        e.preventDefault();
        const requestedNumberGuests = e.target.value;
        const { min, max } = guestNumberLimits;

        if ( requestedNumberGuests > max || requestedNumberGuests < min ) {
            setState((p)=> ({ error: true, message: `Possible number of guests ${min} - ${max}` }));
            return;
        }

        setState((p)=> ({ error: false, message: null }));
        setGuestNumber(requestedNumberGuests);
    }

    return(
        <div className="guest-group">
            { state.error && <span className="alert">{state.message}</span> }
            <input type={'number'} placeholder={'Number of guests'} min={guestNumberLimits.min} max={guestNumberLimits.max} value={guests} onChange={onChange}  />
        </div>
    )
}

export default FormInputGuests;
