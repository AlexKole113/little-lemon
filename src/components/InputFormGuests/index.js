import {useState} from "react";
import mainActions from "../../actions/mainActions";
import './styles.scss'
import isFieldValid from "../FormReservation/inc/formValidator";


const InputFormGuests = ({guests, dispatch, formMessage, formState, setFormState}) => {

    const guestNumberLimits = { min: 1, max: 10 }

    const setGuestNumber = (payload) => dispatch({type: mainActions.userRequest.updateGuests.type, payload });
    const onChange = (e) => {
        e.preventDefault();
        const [isValueValid, validatorMessage ] = isFieldValid( e.target.id, e.target.value, guestNumberLimits );

        if ( !isValueValid ) {
            setFormState( (prevState) => {
                const newState = {...prevState};
                newState.fields.guests = { isValid: false, message: validatorMessage.join(', ') }
                return newState;
            });
            return;
        }
        setFormState( (prevState) => {
            const newState = {...prevState};
            newState.fields.guests = { isValid: true, message: '' }
            return newState;
        });
        setGuestNumber(e.target.value);
    }

    return(
        <div className="guest-group">
            <label htmlFor="input-guests">Number of guests*</label>
            <input id={`input-guests`} className={ !formState.fields.guests.isValid ? 'invalid' : '' } type={'number'} placeholder={'Number of guests'} min={guestNumberLimits.min} max={guestNumberLimits.max} value={guests} onChange={onChange}  />
            { !formState.fields.guests.isValid && <span className="alert">{formState.fields.guests.message}</span> }
        </div>
    )
}

export default InputFormGuests;
