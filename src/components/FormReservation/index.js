import './index.scss'
import {useEffect} from "react";
import InputFormDate from "../InputFormDate";
import SelectFormTime from "../SelectFormTime";
import InputFormGuests from "../InputFormGuests";
import SelectFormOccasion from "../SelectFormOccasion";

const FormReservation = ({availableValues, requestDetails, dispatch}) => {

    //request time for specific date
    useEffect(() => {
          console.log('API Request')
    },[requestDetails.date])


    const {availableTime, availableOccasion} = availableValues;

    return(
        <section className={`main-reservation-group`}>
            <div className="container">

                <div className="reservation-form-group">
                    <div className="reservation-form-group_notify"></div>
                    <form className={`reservation-form`}>
                        <div className="reservation-form_fields">
                            <InputFormDate date={requestDetails.date} dispatch={dispatch} />
                            <SelectFormTime availableTime={availableTime} selectedTime={requestDetails.time} dispatch={dispatch} />
                            <InputFormGuests guests={requestDetails.guests} dispatch={dispatch} />
                            <SelectFormOccasion availableOccasion={availableOccasion} occasion={requestDetails.occasion} dispatch={dispatch} />
                        </div>

                        <button type="submit" className={`brand-button`} >Reserve a table</button>
                    </form>
                </div>


            </div>
        </section>
    )
}

export default FormReservation;
