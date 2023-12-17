import mainActions from "../../actions/mainActions";
import './styles.scss'


const InputFormGuests = ({guests, dispatch, formMessage, formState, setFormState}) => {

    const guestNumberLimits = { min: 1, max: 10 }

    const setGuestNumber = (payload) => dispatch({type: mainActions.userRequest.updateGuests.type, payload });
    const onChange = (e) => {
        e.preventDefault();

        const { min , max } = guestNumberLimits;

        if ( e.target.value < min ) {
            setGuestNumber(min);
            setFormState( (prevState) => {
                const newState = {...prevState};
                newState.fields.guests = { isValid: true, message: '' }
                return newState;
            });
            return;
        }

        if ( e.target.value > max ) {
            setGuestNumber(max);
            setFormState( (prevState) => {
                const newState = {...prevState};
                newState.fields.guests = { isValid: true, message: '' }
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
