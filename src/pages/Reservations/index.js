import TitlePage from "../../components/TitlePage";
import FormReservation from "../../components/FormReservation";

const PageReservations = () => (
    <section className={`page page-reservations`}>
        <TitlePage text={'Reservations'} />
        <FormReservation />
    </section>
)
export default PageReservations;
