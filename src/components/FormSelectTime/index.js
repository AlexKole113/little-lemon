import mainActions from "../../actions/mainActions";
import {useState} from "react";

const FormSelectTime = ({selectedTime, availableTime, dispatch}) => {

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
            { state.error && <span className="alert">{state.message}</span> }
            <select placeholder={`Choose Time*`} value={selectedTime} onChange={onChange} >
                { availableTime.map( (time) => <option key={time} value={time}>{time}</option>) }
            </select>
        </div>
    )
}

export default FormSelectTime;
