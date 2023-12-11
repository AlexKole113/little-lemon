import './index.scss'

const TextWithImage = ({ imageFirst,children, img:{mobile,desktop} }) => (
    <section className="text-with-image">
        <div className="container">
            <article className="text-with-image_group">
                <div className="text-with-image_text">
                    { children }
                </div>
                <figure className={`text-with-image_img ${imageFirst ? 'image-first' : '' }`}>
                    <picture>
                        <source media="(max-width: 767px)" srcSet={mobile} />
                        <source media="(min-width: 768px)" srcSet={desktop} />
                        <img src={mobile} alt="Little Lemon Food"/>
                    </picture>
                </figure>
            </article>
        </div>
    </section>
)

export default TextWithImage;
