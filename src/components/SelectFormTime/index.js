import mainActions from "../../actions/mainActions";
import './index.scss'
import InputPlaceholder from "../InputPlaceholder";
import isFieldValid from "../FormReservation/inc/formValidator";


const SelectFormTime = ({availableTime, selectedTime, dispatch, formState, setFormState}) => {

    const setTime           = (payload) => dispatch({type: mainActions.userRequest.updateTime.type, payload });
    const onChange          = (e) => {
        e.preventDefault();
        const [isValueValid, validatorMessage ] = isFieldValid( e.target.id, e.target.value, availableTime );

        if ( !isValueValid ) {
            setFormState( (prevState) => {
                const newState = {...prevState};
                newState.fields.time = { isValid: false, message: validatorMessage.join(', ') }
                return newState;
            });
            return;
        }
        setFormState( (prevState) => {
            const newState = {...prevState};
            newState.fields.time = { isValid: true, message: '' }
            return newState;
        });
        setTime(e.target.value);
    }

    return(
        <div className="time-group">
            <label htmlFor="time-select">Choose time*</label>
            {
                availableTime.length ? <div className="select-customization-appearance">
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                    <select id={`time-select`} className={ !formState.fields.time.isValid ? 'invalid' : '' } placeholder={`Choose Time*`} value={selectedTime.time} onChange={onChange} >
                        { availableTime.map( (time) => <option key={time} value={time}>{time}</option>) }
                    </select>
                </div> : <InputPlaceholder message={'Timing not available.'} />
            }
            { !formState.fields.time.isValid && <span className="alert">{formState.fields.time.message}</span> }
        </div>
    )
}

export default SelectFormTime;
