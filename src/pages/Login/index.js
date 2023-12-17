import TitlePage from "../../components/TitlePage";
import FormLogin from "../../components/FormLogin";

const PageLogin = () => (
    <section className={`page page-login`}>
        <TitlePage text={'Login'} />
        <FormLogin />
    </section>
)
export default PageLogin;
