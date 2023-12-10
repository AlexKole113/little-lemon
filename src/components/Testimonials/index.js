import './index.scss'
import StarRating from "../StarRating";


const Testimonials = () => {

    const testimonials = [
        {
            id: '001',
            name: 'John Customer',
            img: { mobile: './assets/testimonial-1-mobile.webp', desktop: './assets/testimonial-1-desktop.webp' },
            rating: 1,
            text: '"Lorem ipsum dolor sit amet, consectetur adipisicing elit."'
        },
        {
            id: '002',
            name: 'Xavier',
            img: { mobile: './assets/testimonial-2-mobile.webp', desktop: './assets/testimonial-2-desktop.webp' },
            rating: 2,
            text: '"Lorem ipsum dolor sit amet."'
        },
        {
            id: '003',
            name: 'Andrew Debugger',
            img: { mobile: './assets/testimonial-3-mobile.webp', desktop: './assets/testimonial-3-desktop.webp' },
            rating: 5,
            text: '"Lorem ipsum."'
        },
        {
            id: '004',
            name: 'Mary Tester',
            img: { mobile: './assets/testimonial-4-mobile.webp', desktop: './assets/testimonial-4-desktop.webp' },
            rating: 5,
            text: '"Lorem ipsum dolor sit amet, consectetu."'
        },
    ]



    return(
        <section className="testimonials">
            <div className="container">
                <h2 className="testimonials_title section-title">Testimonials</h2>
                <div className="testimonials_group">
                    {
                        //In the future this may be a standalone component
                        testimonials.map( ({id, name, img:{mobile,desktop}, rating, text}) => (
                            <div key={id} className="testimonial-item">
                               <h5 className="testimonial-item_name">{name}</h5>
                                <figure className="testimonial-item_img">
                                    <picture>
                                        <source media="(max-width: 767px)" srcSet={mobile} />
                                        <source media="(min-width: 768px)" srcSet={desktop} />
                                        <img src={mobile} alt={name} />
                                    </picture>
                                </figure>
                                <StarRating rating={rating} />
                                <p className="testimonial-item_content">{text}</p>
                            </div>
                        ) )
                    }
                </div>
            </div>
        </section>
    )

}

export default Testimonials;
