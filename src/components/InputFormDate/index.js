import mainActions from "../../actions/mainActions";
import isFieldValid from "../FormReservation/inc/formValidator";
import './styles.scss';

const InputFormDate = ({ date, dispatch, formState, setFormState }) => {

    const setDate  = (payload) => dispatch({type: mainActions.userRequest.updateDate.type, payload });
    const onChange = (e) => {
        e.preventDefault();
        const [isValueValid, validatorMessage ] = isFieldValid( e.target.id, e.target.value );

        console.log(isValueValid)

        if ( !isValueValid ) {
            setFormState( (prevState) => {
             const newState = {...prevState};
             newState.fields.date = { isValid: false, message: validatorMessage.join(', ') }
             return newState;
            });
            return;
        }
        setFormState( (prevState) => {
            const newState = {...prevState};
            newState.fields.date = { isValid: true, message: '' }
            return newState;
        });
        setDate(e.target.value);
    }


    return(
        <div className="date-group">
            <label htmlFor="">Choose date*</label>
            <input id={`date-input`} className={ !formState.fields.date.isValid ? 'invalid' : '' } type={'date'} value={date} onChange={onChange} />
            { !formState.fields.date.isValid && <span className="alert">{formState.fields.date.message}</span> }
        </div>
    )
}
export default InputFormDate;
