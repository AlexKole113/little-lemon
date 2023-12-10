import './index.scss'
import BrandButton from "../BrandButton";

import cta1ImageMobile from "../CTA/assets/greek-salad-mobile.webp";
import cta1ImageDesktop from "../CTA/assets/greek-salad-desktop.webp";
import cta2ImageMobile from "../CTA/assets/restaurant-mobile.webp";
import cta2ImageDesktop from "../CTA/assets/restaurant-desktop.webp";

const CTA = () => (
    <section className={`cta`}>
        <div className="container">
            <div className="cta_group">
                <div className="hero_text">
                    <h1 className="cta_text_title main-title">Little Lemon</h1>
                    <h2 className="cta_text_sub-title sub-title">Chicago</h2>
                    <p className="cta_text_intro">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur commodi cum debitis doloribus fuga harum.
                    </p>
                    <div className="cta_text_btns">
                        <BrandButton text={'Reserve a table'} url={'/reservations'} />
                    </div>
                </div>
                <div className="cta_images-group">
                    <figure className={`cta_image`}>
                        <picture>
                            <source media="(max-width: 767px)" srcSet={cta1ImageMobile} />
                            <source media="(min-width: 768px)" srcSet={cta1ImageDesktop} />
                            <img src={cta1ImageMobile} alt="Little Lemon Food"/>
                        </picture>
                    </figure>
                    <figure className={`cta_image`}>
                        <picture>
                            <source media="(max-width: 767px)" srcSet={cta2ImageMobile} />
                            <source media="(min-width: 768px)" srcSet={cta2ImageDesktop} />
                            <img src={cta2ImageMobile} alt="Little Lemon Food"/>
                        </picture>
                    </figure>
                </div>


            </div>
        </div>
    </section>);

export default CTA;


