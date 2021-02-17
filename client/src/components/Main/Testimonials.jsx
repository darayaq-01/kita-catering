import React, { useRef } from 'react';
import Glide from 'react-glidejs';

import { CardUno, CardDos, CardTres } from './CardClients/Card';

/*
 * import './caroussel-css/caroussel_transitions.css';
 * import './caroussel-css/caroussel.css';
 */

const Testimonials = () => {
    const gliderRef = useRef(null);

    return (
        <article className="flex flex-col justify-between px-6 py-2 bg-transparent">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">
                Our Clients
            </h2>
            {/* className here is for the display */}
            <Glide
                ref={gliderRef}
                throttle={0}
                type="slider"
                customSlideAnimation={{
                    timeout: 500,
                    classNames: 'fade',
                }}
                peek={{
                    before: 30,
                    after: 30,
                }}
                perView={1}
                startAt={1}
                slideClassName="max-w-full border-10 border-black"
                /* this className affect every frame but not the card.  */
                focusAt="center"
            >
                <CardUno />
                <CardDos />
                <CardTres />
                <CardUno />
            </Glide>
        </article>
    );
};

export default Testimonials;
