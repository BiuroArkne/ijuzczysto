'use client';

import { register } from 'swiper/element/bundle';

register();

const PartnerComponent = () => {
    const breakpoints = {
        500: {
            slidesPerView: 4,
        },
        800: {
            slidesPerView: 6,
        },
        1200: {
            slidesPerView: 10,
        }
    }

    return (
        <>
            <hr className="border-[#F7F8F8]" />

            <section className="w-full mt-12">
                <swiper-container space-between="24" slides-per-view="2" breakpoints={JSON.stringify(breakpoints)} loop="true" centered-slides="true" centered-slides-bounds="true" round-lengths="true">
                    <swiper-slide>
                        <img src="https://arkne.pl/ijuzczysto2/images/partner4.png" alt="" />
                    </swiper-slide>

                    <swiper-slide>
                        <img src="https://arkne.pl/ijuzczysto2/images/partner4.png" alt="" />
                    </swiper-slide>

                    <swiper-slide>
                        <img src="https://arkne.pl/ijuzczysto2/images/partner4.png" alt="" />
                    </swiper-slide>

                    <swiper-slide>
                        <img src="https://arkne.pl/ijuzczysto2/images/partner4.png" alt="" />
                    </swiper-slide>

                    <swiper-slide>
                        <img src="https://arkne.pl/ijuzczysto2/images/partner4.png" alt="" />
                    </swiper-slide>

                    <swiper-slide>
                        <img src="https://arkne.pl/ijuzczysto2/images/partner4.png" alt="" />
                    </swiper-slide>

                    <swiper-slide>
                        <img src="https://arkne.pl/ijuzczysto2/images/partner4.png" alt="" />
                    </swiper-slide>

                    <swiper-slide>
                        <img src="https://arkne.pl/ijuzczysto2/images/partner4.png" alt="" />
                    </swiper-slide>

                    <swiper-slide>
                        <img src="https://arkne.pl/ijuzczysto2/images/partner4.png" alt="" />
                    </swiper-slide>

                    <swiper-slide>
                        <img src="https://arkne.pl/ijuzczysto2/images/partner4.png" alt="" />
                    </swiper-slide>

                    <swiper-slide>
                        <img src="https://arkne.pl/ijuzczysto2/images/partner4.png" alt="" />
                    </swiper-slide>

                    <swiper-slide>
                        <img src="https://arkne.pl/ijuzczysto2/images/partner4.png" alt="" />
                    </swiper-slide>

                    <swiper-slide>
                        <img src="https://arkne.pl/ijuzczysto2/images/partner4.png" alt="" />
                    </swiper-slide>

                    <swiper-slide>
                        <img src="https://arkne.pl/ijuzczysto2/images/partner4.png" alt="" />
                    </swiper-slide>

                    <swiper-slide>
                        <img src="https://arkne.pl/ijuzczysto2/images/partner4.png" alt="" />
                    </swiper-slide>

                    <swiper-slide>
                        <img src="https://arkne.pl/ijuzczysto2/images/partner4.png" alt="" />
                    </swiper-slide>
                </swiper-container>
            </section>
        </>
    )
}

export default PartnerComponent;