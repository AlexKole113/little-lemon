import TitlePage from "../../components/TitlePage";
import FormReservation from "../../components/FormReservation";

const PageReservations = ({availableValues, requestDetails, dispatch}) => (
    <section className={`page page-reservations`}>
        <TitlePage text={'Reservations'} />
        <FormReservation availableValues={availableValues} requestDetails={requestDetails} dispatch={dispatch} />
    </section>
)
export default PageReservations;
