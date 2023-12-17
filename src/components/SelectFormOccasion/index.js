import {useState} from "react";
import mainActions from "../../actions/mainActions";
import './styles.scss'
import isFieldValid from "../FormReservation/inc/formValidator";


const SelectFormOccasion = ({occasion, availableOccasion, dispatch, formState, setFormState}) => {


    const setOccasion    = (payload) => dispatch({type: mainActions.userRequest.updateOccasion.type, payload });
    const onChange          = (e) => {
        e.preventDefault();
        const [isValueValid, validatorMessage ] = isFieldValid( e.target.id, e.target.value, availableOccasion );

        if ( !isValueValid ) {
            setFormState( (prevState) => {
                const newState = {...prevState};
                newState.fields.occasion = { isValid: false, message: validatorMessage.join(', ') }
                return newState;
            });
            return;
        }
        setFormState( ( prevState ) => {
            const newState = {...prevState};
            newState.fields.occasion = { isValid: true, message: '' }
            return newState;
        });
        setOccasion(e.target.value);
    }

    return(
        <div className="occasion-group">
            <label htmlFor="select-occassion">Occasion</label>
            <div className="select-customization-appearance">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                <select id={`select-occassion`} className={ !formState.fields.occasion.isValid ? 'invalid' : '' } placeholder={`Occasion`} value={occasion} onChange={onChange} >
                    { availableOccasion.map( (value) => <option key={value} value={value}>{value}</option>) }
                </select>
            </div>
            { !formState.fields.occasion.isValid && <span className="alert">{formState.fields.occasion.message}</span> }
        </div>
    )
}

export default SelectFormOccasion;
