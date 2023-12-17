import './index.scss'
import {useEffect, useState} from "react";
import InputFormDate from "../InputFormDate";
import SelectFormTime from "../SelectFormTime";
import InputFormGuests from "../InputFormGuests";
import SelectFormOccasion from "../SelectFormOccasion";
import {fetchAPI, submitAPI} from "../../__mocks__/apiMock";
import mainActions from "../../actions/mainActions";
import Loader from "../Loader";
import {formRequestSuccessState, formRequestLoadingState, formRequestErrorState, formCompleteState} from "./inc/formStateSetupers.js";
import FormSubmitSuccessMessage from "../FormSubmitSuccessMessage";

const FormReservation = ({availableValues, requestDetails, dispatch}) => {


    const [formState, setFormState]     = useState({
        isSent: false,
        state: { success: null, loading: true, error: false },
        fields: {
            date: { isValid: true, message: '' },
            time: { isValid: true, message: '' },
            guests: { isValid: true, message: '' },
            occasion: { isValid: true, message: '' }
        },
    });


    const updateAvailableTime = (payload) => {
        setFormState((prevState) => ({...prevState, state: formRequestSuccessState() }));
        dispatch({ type: mainActions.responseAPI.setAvailableTime.type, payload });
    }
    const setErrorFormMode    = () => {
        setFormState((prevState) => ({...prevState, state: formRequestErrorState() }));
        dispatch({ type: mainActions.responseAPI.setAvailableTime.type, payload: [] });
    }
    const isAllFieldsValid = () => {
        let isValid = true;
        for ( const field in formState.fields ) {
            if (formState.fields[field].isValid === false ) isValid = false;
        }
        return isValid;
    }


    const onSubmit = (e) => {
        e.preventDefault();

        if ( isAllFieldsValid() ) {
            setFormState(() => formRequestLoadingState() );
            submitAPI(new FormData(e.target))
                .then((response) => {
                    const { code } = response;
                    if ( 200 === code ) {
                        setFormState((prevState) => ({...prevState, isSent: true}) )
                    } else {
                        setErrorFormMode();
                    }
                })
                .catch((e)=>{
                    console.log(e)
                    setErrorFormMode();
                })
        }

    }

    useEffect(() => {
        setFormState((prevState) => ({...prevState, state: formRequestLoadingState() })  );
        fetchAPI( new Date(requestDetails.date) )
            .then(( response ) => {
                const {code,data} = response;
                if ( 200 === code ) {
                    updateAvailableTime(data);
                } else {
                    setErrorFormMode()
                }
            })
            .catch((e)=>{
                setErrorFormMode()
            })
    },[requestDetails.date])


    const {availableTime, availableOccasion} = availableValues;

    return(
        <section className={`main-reservation-group`}>
            <div className="container">
                {
                    formState.isSent ? <FormSubmitSuccessMessage /> : <div className="reservation-form-group">
                        <div className="reservation-form-group_notify">
                            { formState.state.error && <div className={`danger-notification`}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>
                                <p>Server Error</p>
                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>
                            </div>}
                        </div>
                        <form onSubmit={onSubmit} className={`reservation-form`}>
                            <div className="reservation-form_fields">
                                <InputFormDate date={requestDetails.date} dispatch={dispatch} formState={formState} setFormState={setFormState} />
                                <SelectFormTime availableTime={availableTime} selectedTime={requestDetails.time} dispatch={dispatch} formState={formState} setFormState={setFormState} />
                                <InputFormGuests guests={requestDetails.guests} dispatch={dispatch} formState={formState} setFormState={setFormState}  />
                                <SelectFormOccasion availableOccasion={availableOccasion} occasion={requestDetails.occasion} dispatch={dispatch} formState={formState} setFormState={setFormState} />
                            </div>
                            { isAllFieldsValid() ? <button type="submit" className={`brand-button`} >Reserve a table</button> : <div className="pseudo-button">Please fill in the field</div> }
                            { formState.state.loading && <Loader />}
                        </form>
                    </div>
                }
            </div>
        </section>
    )
}

export default FormReservation;
