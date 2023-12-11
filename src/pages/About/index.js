import Testimonials from "../../components/Testimonials";
import TitlePage from "../../components/TitlePage";
import TextWithImage from "../../components/TextWithImage";

import firstBlockImageMobile from '../../components/TextWithImage/assets/restaurant-chef-mobile.webp';
import firstBlockImageDesktop from '../../components/TextWithImage/assets/restaurant-chef-desktop.webp';
import secondBlockImageMobile from '../../components/TextWithImage/assets/mario-and-adrian-mobile.webp';
import secondBlockImageDesktop from '../../components/TextWithImage/assets/mario-and-adrian-desktop.webp';

const PageAbout = () => (
    <section className={`page page-about`}>
        <TitlePage text={'About'} />
        <TextWithImage imageFirst={false} img={{ mobile:firstBlockImageMobile, desktop: firstBlockImageDesktop }}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab blanditiis harum libero nesciunt non placeat quo rerum sequi suscipit veniam. Consequuntur dolorem et fugiat laboriosam, nisi porro tempora vel voluptates.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi dignissimos excepturi, minus nostrum nulla quos. Alias beatae distinctio, dolorem earum eius facere fugiat, itaque laboriosam natus possimus quod, recusandae.Adipisci, alias aspernatur atque deleniti, dolore exercitationem facilis, id magni molestiae reiciendis rem sint voluptates voluptatum! Aspernatur corporis doloribus explicabo facere, harum illo pariatur quod, ratione sed tempore tenetur voluptates?</p>
        </TextWithImage>
        <TextWithImage imageFirst={true} img={{ mobile: secondBlockImageMobile, desktop: secondBlockImageDesktop }}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi dignissimos excepturi, minus nostrum nulla quos. Alias beatae distinctio, dolorem earum eius facere fugiat, itaque laboriosam natus possimus quod, recusandae.Adipisci, alias aspernatur atque deleniti, dolore exercitationem facilis, id magni molestiae reiciendis rem sint voluptates voluptatum! Aspernatur corporis doloribus explicabo facere, harum illo pariatur quod, ratione sed tempore tenetur voluptates?</p>
        </TextWithImage>
        <Testimonials />
    </section>
)

export default PageAbout;
