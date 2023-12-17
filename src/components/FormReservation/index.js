import './index.scss'
import {useEffect, useState} from "react";
import InputFormDate from "../InputFormDate";
import SelectFormTime from "../SelectFormTime";
import InputFormGuests from "../InputFormGuests";
import SelectFormOccasion from "../SelectFormOccasion";
import {fetchAPI, submitAPI} from "../../__mocks__/apiMock";
import mainActions from "../../actions/mainActions";
import Loader from "../Loader";
import {formRequestSuccessState, formRequestLoadingState, formRequestErrorState } from "./inc/formStateSetupers.js";
import FormSubmitSuccessMessage from "../FormSubmitSuccessMessage";
import Notification from "../Notification";

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
            setFormState((prevState) => ({...prevState, state: formRequestLoadingState() })  );
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
                    formState.isSent ? <FormSubmitSuccessMessage title={'Successfully sent!'} message={'Thank you for your reservation!'} /> : <div className="reservation-form-group">
                        <div className="reservation-form-group_notify">
                            { formState.state.error && <Notification type={'danger'} message={'Server Error'} />}
                        </div>
                        <form onSubmit={onSubmit} className={`reservation-form`}>
                            <div className="reservation-form_fields">
                                <InputFormDate date={requestDetails.date} dispatch={dispatch} formState={formState} setFormState={setFormState} />
                                <SelectFormTime availableTime={availableTime} selectedTime={requestDetails.time} dispatch={dispatch} formState={formState} setFormState={setFormState} />
                                <InputFormGuests guests={requestDetails.guests} dispatch={dispatch} formState={formState} setFormState={setFormState}  />
                                <SelectFormOccasion availableOccasion={availableOccasion} occasion={requestDetails.occasion} dispatch={dispatch} formState={formState} setFormState={setFormState} />
                            </div>
                            <div className="reservation-form_submit">
                                { isAllFieldsValid() ? <button type="submit" className={`brand-button`} >Reserve a table</button> : <Notification type={'warning'} message={'Please correct the values'} /> }
                            </div>
                            { formState.state.loading && <Loader />}
                        </form>
                    </div>
                }
            </div>
        </section>
    )
}

export default FormReservation;
