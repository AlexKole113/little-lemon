import './index.scss'
const FormSubmitSuccesMessage = () => (
    <div className={`success-report`}>
        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>
        <h3 className="success-report_title">Successfully sent!</h3>
        <p className="success-report_text">Thank you for your reservation!</p>
    </div>
)

export default FormSubmitSuccesMessage;
