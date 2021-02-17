import React, { useRef } from 'react';
import Glide from 'react-glidejs';

import { CardUno, CardDos, CardTres } from './CardClients/CardUno';

/*
 * import './caroussel-css/caroussel_transitions.css';
 * import './caroussel-css/caroussel.css';
 */

const Testimonials = () => {
    const gliderRef = useRef(null);

    return (
        <div className="bg-transparent">
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
        </div>
    );
};

export default Testimonials;
