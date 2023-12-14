import './index.scss'
import mainActions from "../../actions/mainActions";
import {useEffect} from "react";
import FormInputDate from "../FormInputDate";
import FormSelectTime from "../FormSelectTime";
import FormInputGuests from "../FormInputGuests";
import FormSelectOccasion from "../FormSelectOccasion";

const FormReservation = ({availableValues, requestDetails, dispatch}) => {

    //request time for specific date
    useEffect(() => {
          console.log('API Request')
    },[requestDetails.date])

console.log(availableValues)

    const {availableTime, availableOccasion} = availableValues;

    return(
        <section className={`main-reservation-group`}>
            <div className="container">
                <div className="main-reservation-group_notification-box">

                </div>
                <form>
                    <FormInputDate date={requestDetails.date} dispatch={dispatch} />
                    <FormSelectTime availableTime={availableTime} selectedTime={requestDetails.time} dispatch={dispatch} />
                    <FormInputGuests guests={requestDetails.guests} dispatch={dispatch} />
                    <FormSelectOccasion availableOccasion={availableOccasion} occasion={requestDetails.occasion} dispatch={dispatch} />

                    <button type="submit" className={`brand-button`} >Reserve a table</button>
                </form>
            </div>
        </section>
    )
}

export default FormReservation;
