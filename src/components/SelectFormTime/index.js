import mainActions from "../../actions/mainActions";
import {useState} from "react";
import './index.scss'
import InputPlaceholder from "../InputPlaceholder";


const SelectFormTime = ({availableTime, selectedTime, dispatch, formMessage}) => {


    const [state, setState] = useState({ error: false, message: null });
    const setTime           = (payload) => dispatch({type: mainActions.userRequest.updateTime.type, payload });
    const onChange          = (e) => {
        e.preventDefault();
        if ( !availableTime.includes(e.target.value) ) {
            setState((p) => ({ error: true, message: 'Please, choose correct time' }) )
            return;
        }

        setState((p)=> ({ error: false, message: null }));
        setTime(e.target.value);
    }

    return(
        <div className="time-group">
            <label htmlFor="time-select">Choose time*</label>
            {
                availableTime.length ? <div className="select-customization-appearance">

                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                    <select id={`time-select`} className={ state.error ? 'invalid' : '' } placeholder={`Choose Time*`} value={selectedTime.time} onChange={onChange} >
                        <option>Choose Time</option>
                        { availableTime.map( (time) => <option key={time} value={time}>{time}</option>) }
                    </select>
                </div> : <InputPlaceholder message={'Timing not available.'} />
            }
            { state.error && <span className="alert">{state.message}</span> }
            { formMessage &&  <span className="alert">{formMessage}</span> }
        </div>
    )
}

export default SelectFormTime;
