import './index.scss'
const TitlePage = ({text}) => (
    <section className="page-title main-title">
        <div className="container">
            <h1 className="page-title_title">{text}</h1>
        </div>
    </section>
)
export default TitlePage;
