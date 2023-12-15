import mainActions from "../../actions/mainActions";
import {useState} from "react";
import './styles.scss';


const InputFormDate = ({ date, dispatch }) => {

    const [state, setState] = useState({ error: false, message: null });


    const setDate  = (payload) => dispatch({type: mainActions.userRequest.updateDate.type, payload });
    const onChange = (e) => {
        e.preventDefault();
        const today         = new Date();
        const requestedDate = new Date( `${e.target.value} 23:59:59` )
        if ( requestedDate < today ) {
            setState((p)=> ({error: true, message: 'Doc hasn\'t invented a time machine yet' }));
            return;
        }

        setState((p)=> ({ error: false, message: null }));
        setDate(e.target.value);
    }


    return(
        <div className="date-group">
            { state.error && <span className="alert">{state.message}</span> }
            <input className={ state.error ? 'invalid' : '' } type={'date'}  placeholder={`Choose Date*`} value={date} onChange={onChange} />
        </div>
    )
}
export default InputFormDate;
