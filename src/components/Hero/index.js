import heroImageDesktop from './assets/hero-desktop.webp'
import heroImageMobile from './assets/hero-mobile.webp'
import './index.scss'

const Hero = () => {

    return (
        <section className={`hero`}>
            <div className="container">
                <div className="hero_group">
                    <div className="hero_text">
                        <h1 className="hero_text_title main-title">Little Lemon</h1>
                        <h2 className="hero_text_sub-title sub-title">Chicago</h2>
                        <p className="hero_text_intro">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur commodi cum debitis doloribus fuga harum.
                        </p>
                        <div className="hero_text_btns">
                            <a href="/reservations" className="brand-button">Reserve a table</a>
                        </div>
                    </div>
                    <figure className={`hero_image`}>
                        <picture>
                            <source media="(max-width: 767px)" srcSet={heroImageMobile} />
                            <source media="(min-width: 768px)" srcSet={heroImageDesktop} />
                            <img src={heroImageMobile} alt="Little Lemon Food"/>
                        </picture>
                    </figure>

                </div>
            </div>
        </section>
    )
}
export default Hero;
