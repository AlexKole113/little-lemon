import './index.scss'

const FormReservation = () => {



    return(
        <section className={`main-reservation-group`}>
            <div className="container">
                <div className="main-reservation-group_notification-box">

                </div>
                <form>
                    <input type={'date'}  placeholder={`Choose Date*`} />
                    <select placeholder={`Choose Time*`}>
                        <option>17:00</option>
                        <option>18:00</option>
                        <option>19:00</option>
                        <option>20:00</option>
                        <option>21:00</option>
                        <option>22:00</option>
                    </select>
                    <input type={'number'} placeholder={'Number of guests'} min={'1'} max={'10'}  />
                    <select placeholder={`Occasion`}>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                    <button type="submit" className={`brand-button`} >Reserve a table</button>
                </form>
            </div>
        </section>
    )
}

export default FormReservation;
