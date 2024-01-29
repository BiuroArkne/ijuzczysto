'use client';

import { register } from 'swiper/element/bundle';

register();

const SliderComponent = () => {
    return (
        <section className="w-[96%] mx-auto relative my-10 lg:mt-0">
            <swiper-container navigation-next-el=".sliderNextButton" navigation-prev-el=".sliderPrevButton" space-between="50" slides-per-view="1" loop="true" centered-slides="true">
                <swiper-slide>
                    <img className="object-cover rounded-3xl" src="https://arkne.pl/ijuzczysto2/images/slider.png" alt="" />
                </swiper-slide>

                <swiper-slide>
                    <img className="object-cover rounded-3xl" src="https://arkne.pl/ijuzczysto2/images/slider.png" alt="" />
                </swiper-slide>

                <swiper-slide>
                    <img className="object-cover rounded-3xl" src="https://arkne.pl/ijuzczysto2/images/slider.png" alt="" />
                </swiper-slide>

                <swiper-slide>
                    <img className="object-cover rounded-3xl" src="https://arkne.pl/ijuzczysto2/images/slider.png" alt="" />
                </swiper-slide>
            </swiper-container>

            <button className="absolute top-1/2 left-12 transform -translate-x-0 -translate-y-1/2 z-20 sliderPrevButton">
                <span className="w-12 h-12 flex items-center justify-center border-[1px] border-[#CEEAFF] stroke-[#30B7F3] hover:stroke-[#2BA4DA] rounded-full">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="arrow-left">
                            <path id="icon" d="M9.16666 5L4.16666 10M4.16666 10L9.16667 15M4.16666 10L15.8333 10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                    </svg>
                </span>
            </button>
                
            <button className="absolute top-1/2 right-12 transform -translate-x-0 -translate-y-1/2 z-20 sliderNextButton">
                <span className="w-12 h-12 flex items-center justify-center border-[1px] border-[#CEEAFF] stroke-[#30B7F3] hover:stroke-[#2BA4DA] rounded-full">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="arrow-right">
                            <path id="icon" d="M10.8333 5L15.8333 10M15.8333 10L10.8333 15M15.8333 10L4.16666 10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                    </svg>
                </span>
            </button>
        </section>
    )
}

export default SliderComponent;