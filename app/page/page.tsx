import PartnerComponent from "@/components/PartnerComponent";

const Page = () => {
    return (
        <>
            <section className="w-[96%] mx-auto mb-10 relative mt-10 lg:mt-0">
                <div className="relative">
                    <img className="object-cover rounded-3xl" src="./images/blog-big.png" alt="" />
                    <div className="bg-gradient-to-r from-[#102530] to-transparent opacity-75 absolute top-0 left-0 w-full h-full rounded-3xl"></div>

                    <div className="absolute top-12 left-20 hidden lg:block">
                        <ul className="flex flex-col md:flex-row items-center justify-start gap-2">
                            <li>
                                <a className="font-bold text-[#FFFFFF] hover:text-[#30B7F3] text-sm" href="" title="">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="chevron-right">
                                        <path id="icon" d="M4.5 2.5L7.29289 5.29289C7.68342 5.68342 7.68342 6.31658 7.29289 6.70711L4.5 9.5" stroke="#B1BABE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </g>
                                </svg>
                            </li>
                            <li>
                                <a className="bg-[#F2F9FF] hover:bg-[#CBD0D3] rounded-md px-2 py-1 font-bold text-[#258EBC] hover:text-[#485053] text-sm" href="" title="">
                                    Ekologiczne sprzątanie - jak wybrać bezpieczne środki czystości?
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="absolute bottom-10 left-10 right-10 lg:bottom-20 lg:left-20 lg:right-20">
                        <p className="font-semibold text-xl text-[#FFFFFF]">25 stycznia 2024</p>
                        <h2 className="font-bold text-2xl lg:text-5xl text-[#FFFFFF] mt-6">Ekologiczne sprzątanie - jak wybrać bezpieczne środki czystości?</h2>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4 mt-10 lg:my-20">
                <h5 className="text-[#485053] font-bold text-3xl my-5">W obecnych czasach coraz więcej z nas zdaje sobie sprawę z ważności ochrony środowiska.</h5>
                <p className="text-[#6E797D] font-medium text-lg">Przy wyborze środków czystości warto zwrócić uwagę na ich skład. Unikajmy produktów zawierających fosforany, parabeny, ftalany, czy chlor. Te chemiczne substancje mogą być szkodliwe nie tylko dla środowiska wodnego, ale także mogą negatywnie wpływać na nasze zdrowie.</p>

                <h5 className="text-[#485053] font-bold text-xl my-5">Składniki, których należy unikać</h5>
                <p className="text-[#6E797D] font-medium text-lg">Przy wyborze środków czystości warto zwrócić uwagę na ich skład. Unikajmy produktów zawierających fosforany, parabeny, ftalany, czy chlor. Te chemiczne substancje mogą być szkodliwe nie tylko dla środowiska wodnego, ale także mogą negatywnie wpływać na nasze zdrowie.</p>

                <h5 className="text-[#485053] font-bold text-xl my-5">Składniki, których należy unikać</h5>
                <p className="text-[#6E797D] font-medium text-lg">Przy wyborze środków czystości warto zwrócić uwagę na ich skład. Unikajmy produktów zawierających fosforany, parabeny, ftalany, czy chlor. Te chemiczne substancje mogą być szkodliwe nie tylko dla środowiska wodnego, ale także mogą negatywnie wpływać na nasze zdrowie.</p>

                <h5 className="text-[#485053] font-bold text-xl my-5">Składniki, których należy unikać</h5>
                <p className="text-[#6E797D] font-medium text-lg">Przy wyborze środków czystości warto zwrócić uwagę na ich skład. Unikajmy produktów zawierających fosforany, parabeny, ftalany, czy chlor. Te chemiczne substancje mogą być szkodliwe nie tylko dla środowiska wodnego, ale także mogą negatywnie wpływać na nasze zdrowie.</p>

                <h5 className="text-[#485053] font-bold text-xl my-5">Składniki, których należy unikać</h5>
                <p className="text-[#6E797D] font-medium text-lg">Przy wyborze środków czystości warto zwrócić uwagę na ich skład. Unikajmy produktów zawierających fosforany, parabeny, ftalany, czy chlor. Te chemiczne substancje mogą być szkodliwe nie tylko dla środowiska wodnego, ale także mogą negatywnie wpływać na nasze zdrowie.</p>
            </section>

            <hr className="border-[#F7F8F8]" />

            <section className="container mx-auto px-4 mt-10 lg:mt-20">
                <h3 className="text-[#161819] font-bold text-3xl">Produkty z artykułu</h3>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
                    <div className="group relative">
                        <div className="bg-[#F7F8F8] rounded-2xl h-[222px] flex items-center justify-center relative">
                            <img className="object-cover" src="./images/product.png" alt="" />

                            <div className="absolute bottom-2 right-2 gap-2 items-center hidden group-hover:flex">
                                <a className="bg-[#FFFFFF] hover:bg-[#2BA4DA] stroke-[rgb(48,183,243)] hover:stroke-[#FFFFFF] w-12 h-12 rounded-xl flex items-center justify-center" href="" title="">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="heart">
                                            <path id="icon" fillRule="evenodd" clipRule="evenodd" d="M4.00831 4.66009C5.61416 2.89105 8.21777 2.89105 9.82362 4.66009C9.91851 4.76463 10.0815 4.76463 10.1764 4.66009C11.7822 2.89105 14.3858 2.89105 15.9917 4.66009C19.6013 8.63649 16.1326 13.6008 11.8853 16.1069C11.4361 16.3719 11.2115 16.5044 10.6815 16.6164C10.3647 16.6834 9.63528 16.6834 9.31851 16.6164C8.78851 16.5044 8.56391 16.3719 8.11473 16.1069C3.86736 13.6008 0.398721 8.63648 4.00831 4.66009Z" strokeWidth="2"/>
                                        </g>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="mt-6 flex flex-col">
                            <a href="" title="" className="text-[#30B7F3] hover:text-[#2BA4DA] font-medium text-sm">Tabletki do zmywarki</a>
                            <a href="" title="" className="text-[#485053] hover:text-[#161819] font-semibold mt-1">Finish Quantum kapsułki do zmywarki 120 szt lemon</a>
                            <p className="text-[#161819] font-bold text-lg mt-4">99,99 zł</p>
                        </div>

                        <div className="absolute right-0 bottom-0 hidden group-hover:flex">
                            <a className="bg-[#30B7F3] hover:bg-[#2BA4DA] w-12 h-12 rounded-xl flex items-center justify-center" href="" title="">
                                <svg className="fill-[#FFFFFF]" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="shopping-cart">
                                        <path id="icon" d="M4.65213 11.0722L3.66375 11.2242L4.65213 11.0722ZM3.71795 5L2.72958 5.15206L3.71795 5ZM3.33333 2.5L4.32171 2.34794C4.24665 1.86011 3.8269 1.5 3.33333 1.5V2.5ZM16.9972 5.76804L16.0089 5.61598L16.0089 5.61598L16.9972 5.76804ZM16.1812 11.0722L15.1928 10.9201L15.1928 10.9201L16.1812 11.0722ZM2.5 1.5C1.94772 1.5 1.5 1.94772 1.5 2.5C1.5 3.05228 1.94772 3.5 2.5 3.5V1.5ZM17.019 5.26818L16.0847 5.62454L16.0847 5.62455L17.019 5.26818ZM16.8357 5.05446L17.33 4.18518L17.33 4.18517L16.8357 5.05446ZM5.74199 13.1848L6.15472 12.2739L6.15471 12.2739L5.74199 13.1848ZM5.03402 12.5774L5.87153 12.031L5.87153 12.031L5.03402 12.5774ZM15.0913 13.1848L14.6786 12.2739L14.6786 12.2739L15.0913 13.1848ZM15.7993 12.5774L16.6368 13.1238L16.6368 13.1238L15.7993 12.5774ZM13.5456 12.3333H7.28778V14.3333H13.5456V12.3333ZM5.6405 10.9201L4.70632 4.84794L2.72958 5.15206L3.66375 11.2242L5.6405 10.9201ZM4.70632 4.84794L4.32171 2.34794L2.34496 2.65206L2.72958 5.15206L4.70632 4.84794ZM16.0089 5.61598L15.1928 10.9201L17.1696 11.2242L17.9856 5.9201L16.0089 5.61598ZM3.71795 6H16.3383V4H3.71795V6ZM3.33333 1.5H2.5V3.5H3.33333V1.5ZM17.9856 5.9201C18.0033 5.80529 18.0271 5.65613 18.0359 5.52402C18.0453 5.38231 18.0471 5.15759 17.9534 4.9118L16.0847 5.62455C16.0577 5.55385 16.0467 5.49179 16.0425 5.44806C16.0386 5.40811 16.0407 5.38508 16.0403 5.39095C16.0399 5.39695 16.0383 5.41547 16.0326 5.45701C16.0269 5.49841 16.0194 5.54745 16.0089 5.61598L17.9856 5.9201ZM16.3383 6C16.4076 6 16.4573 6.00003 16.499 6.00072C16.541 6.00141 16.5595 6.00259 16.5655 6.00311C16.5714 6.00361 16.5483 6.00216 16.5094 5.99229C16.4668 5.9815 16.4071 5.96116 16.3414 5.92375L17.33 4.18517C17.1013 4.05514 16.8789 4.02272 16.7374 4.01051C16.6055 3.99913 16.4545 4 16.3383 4V6ZM17.9534 4.91181C17.8362 4.60459 17.6158 4.3477 17.33 4.18518L16.3414 5.92375C16.2237 5.85683 16.1329 5.75105 16.0847 5.62454L17.9534 4.91181ZM7.28778 12.3333C6.86667 12.3333 6.60653 12.3327 6.40927 12.3176C6.22453 12.3036 6.17023 12.2809 6.15472 12.2739L5.32926 14.0956C5.64164 14.2372 5.95427 14.2888 6.25747 14.3119C6.54816 14.334 6.89697 14.3333 7.28778 14.3333V12.3333ZM3.66375 11.2242C3.72318 11.6105 3.77556 11.9553 3.84163 12.2393C3.91054 12.5354 4.00912 12.8366 4.19652 13.1238L5.87153 12.031C5.86222 12.0167 5.83158 11.9665 5.78959 11.786C5.74475 11.5933 5.70453 11.3363 5.6405 10.9201L3.66375 11.2242ZM6.15471 12.2739C6.03912 12.2215 5.94087 12.1372 5.87153 12.031L4.19652 13.1238C4.4739 13.549 4.86688 13.8861 5.32926 14.0956L6.15471 12.2739ZM13.5456 14.3333C13.9364 14.3333 14.2852 14.334 14.5759 14.3119C14.8791 14.2888 15.1917 14.2372 15.5041 14.0956L14.6786 12.2739C14.6631 12.2809 14.6088 12.3036 14.4241 12.3176C14.2268 12.3327 13.9667 12.3333 13.5456 12.3333V14.3333ZM15.1928 10.9201C15.1288 11.3363 15.0886 11.5933 15.0437 11.786C15.0018 11.9665 14.9711 12.0167 14.9618 12.031L16.6368 13.1238C16.8242 12.8366 16.9228 12.5354 16.9917 12.2393C17.0578 11.9553 17.1102 11.6105 17.1696 11.2242L15.1928 10.9201ZM15.5041 14.0956C15.9665 13.8861 16.3594 13.549 16.6368 13.1238L14.9618 12.031C14.8925 12.1372 14.7942 12.2215 14.6786 12.2739L15.5041 14.0956ZM7.33333 16.6667C7.33333 16.5746 7.40795 16.5 7.5 16.5V18.5C8.51252 18.5 9.33333 17.6792 9.33333 16.6667H7.33333ZM7.5 16.5C7.59205 16.5 7.66667 16.5746 7.66667 16.6667H5.66667C5.66667 17.6792 6.48748 18.5 7.5 18.5V16.5ZM7.66667 16.6667C7.66667 16.7587 7.59205 16.8333 7.5 16.8333V14.8333C6.48748 14.8333 5.66667 15.6541 5.66667 16.6667H7.66667ZM7.5 16.8333C7.40795 16.8333 7.33333 16.7587 7.33333 16.6667H9.33333C9.33333 15.6541 8.51252 14.8333 7.5 14.8333V16.8333ZM13.1667 16.6667C13.1667 16.5746 13.2413 16.5 13.3333 16.5V18.5C14.3459 18.5 15.1667 17.6792 15.1667 16.6667H13.1667ZM13.3333 16.5C13.4254 16.5 13.5 16.5746 13.5 16.6667H11.5C11.5 17.6792 12.3208 18.5 13.3333 18.5V16.5ZM13.5 16.6667C13.5 16.7587 13.4254 16.8333 13.3333 16.8333V14.8333C12.3208 14.8333 11.5 15.6541 11.5 16.6667H13.5ZM13.3333 16.8333C13.2413 16.8333 13.1667 16.7587 13.1667 16.6667H15.1667C15.1667 15.6541 14.3459 14.8333 13.3333 14.8333V16.8333Z" />
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="group relative">
                        <div className="bg-[#F7F8F8] rounded-2xl h-[222px] flex items-center justify-center relative">
                            <img className="object-cover" src="./images/product2.png" alt="" />

                            <div className="absolute bottom-2 right-2 gap-2 items-center hidden group-hover:flex">
                                <a className="bg-[#FFFFFF] hover:bg-[#2BA4DA] stroke-[rgb(48,183,243)] hover:stroke-[#FFFFFF] w-12 h-12 rounded-xl flex items-center justify-center" href="" title="">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="heart">
                                            <path id="icon" fillRule="evenodd" clipRule="evenodd" d="M4.00831 4.66009C5.61416 2.89105 8.21777 2.89105 9.82362 4.66009C9.91851 4.76463 10.0815 4.76463 10.1764 4.66009C11.7822 2.89105 14.3858 2.89105 15.9917 4.66009C19.6013 8.63649 16.1326 13.6008 11.8853 16.1069C11.4361 16.3719 11.2115 16.5044 10.6815 16.6164C10.3647 16.6834 9.63528 16.6834 9.31851 16.6164C8.78851 16.5044 8.56391 16.3719 8.11473 16.1069C3.86736 13.6008 0.398721 8.63648 4.00831 4.66009Z" strokeWidth="2"/>
                                        </g>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="mt-6 flex flex-col">
                            <a href="" title="" className="text-[#30B7F3] hover:text-[#2BA4DA] font-medium text-sm">Tabletki do zmywarki</a>
                            <a href="" title="" className="text-[#485053] hover:text-[#161819] font-semibold mt-1">Finish Quantum kapsułki do zmywarki 120 szt lemon</a>
                            <p className="text-[#161819] font-bold text-lg mt-4">99,99 zł</p>
                        </div>

                        <div className="absolute right-0 bottom-0 hidden group-hover:flex">
                            <a className="bg-[#30B7F3] hover:bg-[#2BA4DA] w-12 h-12 rounded-xl flex items-center justify-center" href="" title="">
                                <svg className="fill-[#FFFFFF]" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="shopping-cart">
                                        <path id="icon" d="M4.65213 11.0722L3.66375 11.2242L4.65213 11.0722ZM3.71795 5L2.72958 5.15206L3.71795 5ZM3.33333 2.5L4.32171 2.34794C4.24665 1.86011 3.8269 1.5 3.33333 1.5V2.5ZM16.9972 5.76804L16.0089 5.61598L16.0089 5.61598L16.9972 5.76804ZM16.1812 11.0722L15.1928 10.9201L15.1928 10.9201L16.1812 11.0722ZM2.5 1.5C1.94772 1.5 1.5 1.94772 1.5 2.5C1.5 3.05228 1.94772 3.5 2.5 3.5V1.5ZM17.019 5.26818L16.0847 5.62454L16.0847 5.62455L17.019 5.26818ZM16.8357 5.05446L17.33 4.18518L17.33 4.18517L16.8357 5.05446ZM5.74199 13.1848L6.15472 12.2739L6.15471 12.2739L5.74199 13.1848ZM5.03402 12.5774L5.87153 12.031L5.87153 12.031L5.03402 12.5774ZM15.0913 13.1848L14.6786 12.2739L14.6786 12.2739L15.0913 13.1848ZM15.7993 12.5774L16.6368 13.1238L16.6368 13.1238L15.7993 12.5774ZM13.5456 12.3333H7.28778V14.3333H13.5456V12.3333ZM5.6405 10.9201L4.70632 4.84794L2.72958 5.15206L3.66375 11.2242L5.6405 10.9201ZM4.70632 4.84794L4.32171 2.34794L2.34496 2.65206L2.72958 5.15206L4.70632 4.84794ZM16.0089 5.61598L15.1928 10.9201L17.1696 11.2242L17.9856 5.9201L16.0089 5.61598ZM3.71795 6H16.3383V4H3.71795V6ZM3.33333 1.5H2.5V3.5H3.33333V1.5ZM17.9856 5.9201C18.0033 5.80529 18.0271 5.65613 18.0359 5.52402C18.0453 5.38231 18.0471 5.15759 17.9534 4.9118L16.0847 5.62455C16.0577 5.55385 16.0467 5.49179 16.0425 5.44806C16.0386 5.40811 16.0407 5.38508 16.0403 5.39095C16.0399 5.39695 16.0383 5.41547 16.0326 5.45701C16.0269 5.49841 16.0194 5.54745 16.0089 5.61598L17.9856 5.9201ZM16.3383 6C16.4076 6 16.4573 6.00003 16.499 6.00072C16.541 6.00141 16.5595 6.00259 16.5655 6.00311C16.5714 6.00361 16.5483 6.00216 16.5094 5.99229C16.4668 5.9815 16.4071 5.96116 16.3414 5.92375L17.33 4.18517C17.1013 4.05514 16.8789 4.02272 16.7374 4.01051C16.6055 3.99913 16.4545 4 16.3383 4V6ZM17.9534 4.91181C17.8362 4.60459 17.6158 4.3477 17.33 4.18518L16.3414 5.92375C16.2237 5.85683 16.1329 5.75105 16.0847 5.62454L17.9534 4.91181ZM7.28778 12.3333C6.86667 12.3333 6.60653 12.3327 6.40927 12.3176C6.22453 12.3036 6.17023 12.2809 6.15472 12.2739L5.32926 14.0956C5.64164 14.2372 5.95427 14.2888 6.25747 14.3119C6.54816 14.334 6.89697 14.3333 7.28778 14.3333V12.3333ZM3.66375 11.2242C3.72318 11.6105 3.77556 11.9553 3.84163 12.2393C3.91054 12.5354 4.00912 12.8366 4.19652 13.1238L5.87153 12.031C5.86222 12.0167 5.83158 11.9665 5.78959 11.786C5.74475 11.5933 5.70453 11.3363 5.6405 10.9201L3.66375 11.2242ZM6.15471 12.2739C6.03912 12.2215 5.94087 12.1372 5.87153 12.031L4.19652 13.1238C4.4739 13.549 4.86688 13.8861 5.32926 14.0956L6.15471 12.2739ZM13.5456 14.3333C13.9364 14.3333 14.2852 14.334 14.5759 14.3119C14.8791 14.2888 15.1917 14.2372 15.5041 14.0956L14.6786 12.2739C14.6631 12.2809 14.6088 12.3036 14.4241 12.3176C14.2268 12.3327 13.9667 12.3333 13.5456 12.3333V14.3333ZM15.1928 10.9201C15.1288 11.3363 15.0886 11.5933 15.0437 11.786C15.0018 11.9665 14.9711 12.0167 14.9618 12.031L16.6368 13.1238C16.8242 12.8366 16.9228 12.5354 16.9917 12.2393C17.0578 11.9553 17.1102 11.6105 17.1696 11.2242L15.1928 10.9201ZM15.5041 14.0956C15.9665 13.8861 16.3594 13.549 16.6368 13.1238L14.9618 12.031C14.8925 12.1372 14.7942 12.2215 14.6786 12.2739L15.5041 14.0956ZM7.33333 16.6667C7.33333 16.5746 7.40795 16.5 7.5 16.5V18.5C8.51252 18.5 9.33333 17.6792 9.33333 16.6667H7.33333ZM7.5 16.5C7.59205 16.5 7.66667 16.5746 7.66667 16.6667H5.66667C5.66667 17.6792 6.48748 18.5 7.5 18.5V16.5ZM7.66667 16.6667C7.66667 16.7587 7.59205 16.8333 7.5 16.8333V14.8333C6.48748 14.8333 5.66667 15.6541 5.66667 16.6667H7.66667ZM7.5 16.8333C7.40795 16.8333 7.33333 16.7587 7.33333 16.6667H9.33333C9.33333 15.6541 8.51252 14.8333 7.5 14.8333V16.8333ZM13.1667 16.6667C13.1667 16.5746 13.2413 16.5 13.3333 16.5V18.5C14.3459 18.5 15.1667 17.6792 15.1667 16.6667H13.1667ZM13.3333 16.5C13.4254 16.5 13.5 16.5746 13.5 16.6667H11.5C11.5 17.6792 12.3208 18.5 13.3333 18.5V16.5ZM13.5 16.6667C13.5 16.7587 13.4254 16.8333 13.3333 16.8333V14.8333C12.3208 14.8333 11.5 15.6541 11.5 16.6667H13.5ZM13.3333 16.8333C13.2413 16.8333 13.1667 16.7587 13.1667 16.6667H15.1667C15.1667 15.6541 14.3459 14.8333 13.3333 14.8333V16.8333Z" />
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="group relative">
                        <div className="bg-[#F7F8F8] rounded-2xl h-[222px] flex items-center justify-center relative">
                            <img className="object-cover" src="./images/product3.png" alt="" />

                            <div className="absolute bottom-2 right-2 gap-2 items-center hidden group-hover:flex">
                                <a className="bg-[#FFFFFF] hover:bg-[#2BA4DA] stroke-[rgb(48,183,243)] hover:stroke-[#FFFFFF] w-12 h-12 rounded-xl flex items-center justify-center" href="" title="">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="heart">
                                            <path id="icon" fillRule="evenodd" clipRule="evenodd" d="M4.00831 4.66009C5.61416 2.89105 8.21777 2.89105 9.82362 4.66009C9.91851 4.76463 10.0815 4.76463 10.1764 4.66009C11.7822 2.89105 14.3858 2.89105 15.9917 4.66009C19.6013 8.63649 16.1326 13.6008 11.8853 16.1069C11.4361 16.3719 11.2115 16.5044 10.6815 16.6164C10.3647 16.6834 9.63528 16.6834 9.31851 16.6164C8.78851 16.5044 8.56391 16.3719 8.11473 16.1069C3.86736 13.6008 0.398721 8.63648 4.00831 4.66009Z" strokeWidth="2"/>
                                        </g>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="mt-6 flex flex-col">
                            <a href="" title="" className="text-[#30B7F3] hover:text-[#2BA4DA] font-medium text-sm">Tabletki do zmywarki</a>
                            <a href="" title="" className="text-[#485053] hover:text-[#161819] font-semibold mt-1">Finish Quantum kapsułki do zmywarki 120 szt lemon</a>
                            <p className="text-[#161819] font-bold text-lg mt-4">99,99 zł</p>
                        </div>

                        <div className="absolute right-0 bottom-0 hidden group-hover:flex">
                            <a className="bg-[#30B7F3] hover:bg-[#2BA4DA] w-12 h-12 rounded-xl flex items-center justify-center" href="" title="">
                                <svg className="fill-[#FFFFFF]" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="shopping-cart">
                                        <path id="icon" d="M4.65213 11.0722L3.66375 11.2242L4.65213 11.0722ZM3.71795 5L2.72958 5.15206L3.71795 5ZM3.33333 2.5L4.32171 2.34794C4.24665 1.86011 3.8269 1.5 3.33333 1.5V2.5ZM16.9972 5.76804L16.0089 5.61598L16.0089 5.61598L16.9972 5.76804ZM16.1812 11.0722L15.1928 10.9201L15.1928 10.9201L16.1812 11.0722ZM2.5 1.5C1.94772 1.5 1.5 1.94772 1.5 2.5C1.5 3.05228 1.94772 3.5 2.5 3.5V1.5ZM17.019 5.26818L16.0847 5.62454L16.0847 5.62455L17.019 5.26818ZM16.8357 5.05446L17.33 4.18518L17.33 4.18517L16.8357 5.05446ZM5.74199 13.1848L6.15472 12.2739L6.15471 12.2739L5.74199 13.1848ZM5.03402 12.5774L5.87153 12.031L5.87153 12.031L5.03402 12.5774ZM15.0913 13.1848L14.6786 12.2739L14.6786 12.2739L15.0913 13.1848ZM15.7993 12.5774L16.6368 13.1238L16.6368 13.1238L15.7993 12.5774ZM13.5456 12.3333H7.28778V14.3333H13.5456V12.3333ZM5.6405 10.9201L4.70632 4.84794L2.72958 5.15206L3.66375 11.2242L5.6405 10.9201ZM4.70632 4.84794L4.32171 2.34794L2.34496 2.65206L2.72958 5.15206L4.70632 4.84794ZM16.0089 5.61598L15.1928 10.9201L17.1696 11.2242L17.9856 5.9201L16.0089 5.61598ZM3.71795 6H16.3383V4H3.71795V6ZM3.33333 1.5H2.5V3.5H3.33333V1.5ZM17.9856 5.9201C18.0033 5.80529 18.0271 5.65613 18.0359 5.52402C18.0453 5.38231 18.0471 5.15759 17.9534 4.9118L16.0847 5.62455C16.0577 5.55385 16.0467 5.49179 16.0425 5.44806C16.0386 5.40811 16.0407 5.38508 16.0403 5.39095C16.0399 5.39695 16.0383 5.41547 16.0326 5.45701C16.0269 5.49841 16.0194 5.54745 16.0089 5.61598L17.9856 5.9201ZM16.3383 6C16.4076 6 16.4573 6.00003 16.499 6.00072C16.541 6.00141 16.5595 6.00259 16.5655 6.00311C16.5714 6.00361 16.5483 6.00216 16.5094 5.99229C16.4668 5.9815 16.4071 5.96116 16.3414 5.92375L17.33 4.18517C17.1013 4.05514 16.8789 4.02272 16.7374 4.01051C16.6055 3.99913 16.4545 4 16.3383 4V6ZM17.9534 4.91181C17.8362 4.60459 17.6158 4.3477 17.33 4.18518L16.3414 5.92375C16.2237 5.85683 16.1329 5.75105 16.0847 5.62454L17.9534 4.91181ZM7.28778 12.3333C6.86667 12.3333 6.60653 12.3327 6.40927 12.3176C6.22453 12.3036 6.17023 12.2809 6.15472 12.2739L5.32926 14.0956C5.64164 14.2372 5.95427 14.2888 6.25747 14.3119C6.54816 14.334 6.89697 14.3333 7.28778 14.3333V12.3333ZM3.66375 11.2242C3.72318 11.6105 3.77556 11.9553 3.84163 12.2393C3.91054 12.5354 4.00912 12.8366 4.19652 13.1238L5.87153 12.031C5.86222 12.0167 5.83158 11.9665 5.78959 11.786C5.74475 11.5933 5.70453 11.3363 5.6405 10.9201L3.66375 11.2242ZM6.15471 12.2739C6.03912 12.2215 5.94087 12.1372 5.87153 12.031L4.19652 13.1238C4.4739 13.549 4.86688 13.8861 5.32926 14.0956L6.15471 12.2739ZM13.5456 14.3333C13.9364 14.3333 14.2852 14.334 14.5759 14.3119C14.8791 14.2888 15.1917 14.2372 15.5041 14.0956L14.6786 12.2739C14.6631 12.2809 14.6088 12.3036 14.4241 12.3176C14.2268 12.3327 13.9667 12.3333 13.5456 12.3333V14.3333ZM15.1928 10.9201C15.1288 11.3363 15.0886 11.5933 15.0437 11.786C15.0018 11.9665 14.9711 12.0167 14.9618 12.031L16.6368 13.1238C16.8242 12.8366 16.9228 12.5354 16.9917 12.2393C17.0578 11.9553 17.1102 11.6105 17.1696 11.2242L15.1928 10.9201ZM15.5041 14.0956C15.9665 13.8861 16.3594 13.549 16.6368 13.1238L14.9618 12.031C14.8925 12.1372 14.7942 12.2215 14.6786 12.2739L15.5041 14.0956ZM7.33333 16.6667C7.33333 16.5746 7.40795 16.5 7.5 16.5V18.5C8.51252 18.5 9.33333 17.6792 9.33333 16.6667H7.33333ZM7.5 16.5C7.59205 16.5 7.66667 16.5746 7.66667 16.6667H5.66667C5.66667 17.6792 6.48748 18.5 7.5 18.5V16.5ZM7.66667 16.6667C7.66667 16.7587 7.59205 16.8333 7.5 16.8333V14.8333C6.48748 14.8333 5.66667 15.6541 5.66667 16.6667H7.66667ZM7.5 16.8333C7.40795 16.8333 7.33333 16.7587 7.33333 16.6667H9.33333C9.33333 15.6541 8.51252 14.8333 7.5 14.8333V16.8333ZM13.1667 16.6667C13.1667 16.5746 13.2413 16.5 13.3333 16.5V18.5C14.3459 18.5 15.1667 17.6792 15.1667 16.6667H13.1667ZM13.3333 16.5C13.4254 16.5 13.5 16.5746 13.5 16.6667H11.5C11.5 17.6792 12.3208 18.5 13.3333 18.5V16.5ZM13.5 16.6667C13.5 16.7587 13.4254 16.8333 13.3333 16.8333V14.8333C12.3208 14.8333 11.5 15.6541 11.5 16.6667H13.5ZM13.3333 16.8333C13.2413 16.8333 13.1667 16.7587 13.1667 16.6667H15.1667C15.1667 15.6541 14.3459 14.8333 13.3333 14.8333V16.8333Z" />
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="group relative">
                        <div className="bg-[#F7F8F8] rounded-2xl h-[222px] flex items-center justify-center relative">
                            <img className="object-cover" src="./images/product4.png" alt="" />

                            <div className="absolute bottom-2 right-2 gap-2 items-center hidden group-hover:flex">
                                <a className="bg-[#FFFFFF] hover:bg-[#2BA4DA] stroke-[rgb(48,183,243)] hover:stroke-[#FFFFFF] w-12 h-12 rounded-xl flex items-center justify-center" href="" title="">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="heart">
                                            <path id="icon" fillRule="evenodd" clipRule="evenodd" d="M4.00831 4.66009C5.61416 2.89105 8.21777 2.89105 9.82362 4.66009C9.91851 4.76463 10.0815 4.76463 10.1764 4.66009C11.7822 2.89105 14.3858 2.89105 15.9917 4.66009C19.6013 8.63649 16.1326 13.6008 11.8853 16.1069C11.4361 16.3719 11.2115 16.5044 10.6815 16.6164C10.3647 16.6834 9.63528 16.6834 9.31851 16.6164C8.78851 16.5044 8.56391 16.3719 8.11473 16.1069C3.86736 13.6008 0.398721 8.63648 4.00831 4.66009Z" strokeWidth="2"/>
                                        </g>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="mt-6 flex flex-col">
                            <a href="" title="" className="text-[#30B7F3] hover:text-[#2BA4DA] font-medium text-sm">Tabletki do zmywarki</a>
                            <a href="" title="" className="text-[#485053] hover:text-[#161819] font-semibold mt-1">Finish Quantum kapsułki do zmywarki 120 szt lemon</a>
                            <p className="text-[#161819] font-bold text-lg mt-4">99,99 zł</p>
                        </div>

                        <div className="absolute right-0 bottom-0 hidden group-hover:flex">
                            <a className="bg-[#30B7F3] hover:bg-[#2BA4DA] w-12 h-12 rounded-xl flex items-center justify-center" href="" title="">
                                <svg className="fill-[#FFFFFF]" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="shopping-cart">
                                        <path id="icon" d="M4.65213 11.0722L3.66375 11.2242L4.65213 11.0722ZM3.71795 5L2.72958 5.15206L3.71795 5ZM3.33333 2.5L4.32171 2.34794C4.24665 1.86011 3.8269 1.5 3.33333 1.5V2.5ZM16.9972 5.76804L16.0089 5.61598L16.0089 5.61598L16.9972 5.76804ZM16.1812 11.0722L15.1928 10.9201L15.1928 10.9201L16.1812 11.0722ZM2.5 1.5C1.94772 1.5 1.5 1.94772 1.5 2.5C1.5 3.05228 1.94772 3.5 2.5 3.5V1.5ZM17.019 5.26818L16.0847 5.62454L16.0847 5.62455L17.019 5.26818ZM16.8357 5.05446L17.33 4.18518L17.33 4.18517L16.8357 5.05446ZM5.74199 13.1848L6.15472 12.2739L6.15471 12.2739L5.74199 13.1848ZM5.03402 12.5774L5.87153 12.031L5.87153 12.031L5.03402 12.5774ZM15.0913 13.1848L14.6786 12.2739L14.6786 12.2739L15.0913 13.1848ZM15.7993 12.5774L16.6368 13.1238L16.6368 13.1238L15.7993 12.5774ZM13.5456 12.3333H7.28778V14.3333H13.5456V12.3333ZM5.6405 10.9201L4.70632 4.84794L2.72958 5.15206L3.66375 11.2242L5.6405 10.9201ZM4.70632 4.84794L4.32171 2.34794L2.34496 2.65206L2.72958 5.15206L4.70632 4.84794ZM16.0089 5.61598L15.1928 10.9201L17.1696 11.2242L17.9856 5.9201L16.0089 5.61598ZM3.71795 6H16.3383V4H3.71795V6ZM3.33333 1.5H2.5V3.5H3.33333V1.5ZM17.9856 5.9201C18.0033 5.80529 18.0271 5.65613 18.0359 5.52402C18.0453 5.38231 18.0471 5.15759 17.9534 4.9118L16.0847 5.62455C16.0577 5.55385 16.0467 5.49179 16.0425 5.44806C16.0386 5.40811 16.0407 5.38508 16.0403 5.39095C16.0399 5.39695 16.0383 5.41547 16.0326 5.45701C16.0269 5.49841 16.0194 5.54745 16.0089 5.61598L17.9856 5.9201ZM16.3383 6C16.4076 6 16.4573 6.00003 16.499 6.00072C16.541 6.00141 16.5595 6.00259 16.5655 6.00311C16.5714 6.00361 16.5483 6.00216 16.5094 5.99229C16.4668 5.9815 16.4071 5.96116 16.3414 5.92375L17.33 4.18517C17.1013 4.05514 16.8789 4.02272 16.7374 4.01051C16.6055 3.99913 16.4545 4 16.3383 4V6ZM17.9534 4.91181C17.8362 4.60459 17.6158 4.3477 17.33 4.18518L16.3414 5.92375C16.2237 5.85683 16.1329 5.75105 16.0847 5.62454L17.9534 4.91181ZM7.28778 12.3333C6.86667 12.3333 6.60653 12.3327 6.40927 12.3176C6.22453 12.3036 6.17023 12.2809 6.15472 12.2739L5.32926 14.0956C5.64164 14.2372 5.95427 14.2888 6.25747 14.3119C6.54816 14.334 6.89697 14.3333 7.28778 14.3333V12.3333ZM3.66375 11.2242C3.72318 11.6105 3.77556 11.9553 3.84163 12.2393C3.91054 12.5354 4.00912 12.8366 4.19652 13.1238L5.87153 12.031C5.86222 12.0167 5.83158 11.9665 5.78959 11.786C5.74475 11.5933 5.70453 11.3363 5.6405 10.9201L3.66375 11.2242ZM6.15471 12.2739C6.03912 12.2215 5.94087 12.1372 5.87153 12.031L4.19652 13.1238C4.4739 13.549 4.86688 13.8861 5.32926 14.0956L6.15471 12.2739ZM13.5456 14.3333C13.9364 14.3333 14.2852 14.334 14.5759 14.3119C14.8791 14.2888 15.1917 14.2372 15.5041 14.0956L14.6786 12.2739C14.6631 12.2809 14.6088 12.3036 14.4241 12.3176C14.2268 12.3327 13.9667 12.3333 13.5456 12.3333V14.3333ZM15.1928 10.9201C15.1288 11.3363 15.0886 11.5933 15.0437 11.786C15.0018 11.9665 14.9711 12.0167 14.9618 12.031L16.6368 13.1238C16.8242 12.8366 16.9228 12.5354 16.9917 12.2393C17.0578 11.9553 17.1102 11.6105 17.1696 11.2242L15.1928 10.9201ZM15.5041 14.0956C15.9665 13.8861 16.3594 13.549 16.6368 13.1238L14.9618 12.031C14.8925 12.1372 14.7942 12.2215 14.6786 12.2739L15.5041 14.0956ZM7.33333 16.6667C7.33333 16.5746 7.40795 16.5 7.5 16.5V18.5C8.51252 18.5 9.33333 17.6792 9.33333 16.6667H7.33333ZM7.5 16.5C7.59205 16.5 7.66667 16.5746 7.66667 16.6667H5.66667C5.66667 17.6792 6.48748 18.5 7.5 18.5V16.5ZM7.66667 16.6667C7.66667 16.7587 7.59205 16.8333 7.5 16.8333V14.8333C6.48748 14.8333 5.66667 15.6541 5.66667 16.6667H7.66667ZM7.5 16.8333C7.40795 16.8333 7.33333 16.7587 7.33333 16.6667H9.33333C9.33333 15.6541 8.51252 14.8333 7.5 14.8333V16.8333ZM13.1667 16.6667C13.1667 16.5746 13.2413 16.5 13.3333 16.5V18.5C14.3459 18.5 15.1667 17.6792 15.1667 16.6667H13.1667ZM13.3333 16.5C13.4254 16.5 13.5 16.5746 13.5 16.6667H11.5C11.5 17.6792 12.3208 18.5 13.3333 18.5V16.5ZM13.5 16.6667C13.5 16.7587 13.4254 16.8333 13.3333 16.8333V14.8333C12.3208 14.8333 11.5 15.6541 11.5 16.6667H13.5ZM13.3333 16.8333C13.2413 16.8333 13.1667 16.7587 13.1667 16.6667H15.1667C15.1667 15.6541 14.3459 14.8333 13.3333 14.8333V16.8333Z" />
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="border-[#F7F8F8]" />

            <section className="container mx-auto px-4 mt-10 lg:my-20">
                <h3 className="text-[#161819] font-bold text-3xl">Podobne porady</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-10">
                    <div>
                        <div className="rounded-2xl h-[228px]">
                            <img className="object-cover w-full h-full rounded-2xl" src="./images/blog.png" alt="" />
                        </div>
                        <div className="mt-6">
                            <p className="text-[#6E797D] font-bold text-sm">25 stycznia 2024</p>
                            <a href="" title="" className="text-[#161819] hover:text-[#15526D] font-bold text-xl mt-1">Ekologiczne sprzątanie – jak wybrać bezpieczne środki czystości?</a>
                        </div>
                    </div>

                    <div>
                        <div className="rounded-2xl h-[228px]">
                            <img className="object-cover w-full h-full rounded-2xl" src="./images/blog.png" alt="" />
                        </div>
                        <div className="mt-6">
                            <p className="text-[#6E797D] font-bold text-sm">25 stycznia 2024</p>
                            <a href="" title="" className="text-[#161819] hover:text-[#15526D] font-bold text-xl mt-1">Ekologiczne sprzątanie – jak wybrać bezpieczne środki czystości?</a>
                        </div>
                    </div>

                    <div>
                        <div className="rounded-2xl h-[228px]">
                            <img className="object-cover w-full h-full rounded-2xl" src="./images/blog.png" alt="" />
                        </div>
                        <div className="mt-6">
                            <p className="text-[#6E797D] font-bold text-sm">25 stycznia 2024</p>
                            <a href="" title="" className="text-[#161819] hover:text-[#15526D] font-bold text-xl mt-1">Ekologiczne sprzątanie – jak wybrać bezpieczne środki czystości?</a>
                        </div>
                    </div>
                </div>
            </section>

            <PartnerComponent />
        </>
    )
}

export default Page;