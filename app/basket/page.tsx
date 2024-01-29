import PartnerComponent from "@/components/PartnerComponent";

const Basket = () => {
    return (
        <>
            <hr className="border-[#F7F8F8]" />

            <section className="container mx-auto px-4 py-10 md:py-20">
                <ul className="flex flex-col md:flex-row items-center justify-start gap-2">
                    <li>
                        <a className="font-bold text-[#6E797D] hover:text-[#30B7F3] text-sm" href="" title="">
                            Sklep
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
                            Koszyk
                        </a>
                    </li>
                </ul>

                <h3 className="font-bold text-[#161819] text-3xl mt-6">Koszyk</h3>

                <section className="lg:flex gap-10">
                    <section className="lg:w-3/4">
                        <div className="flex items-center justify-between gap-6 mt-12 mb-4 font-bold text-[#6E797D] text-sm">
                            
                            <div className="w-3/5">
                                <p>Produkt</p>
                            </div>
                            <div className="flex lg:flex-row flex-col items-center text-center justify-around gap-6 w-2/5">
                                <p className="w-1/5">Kwota</p>
                                <p className="w-1/5">Ilość</p>
                                <p className="w-1/5"></p>
                            </div>

                        </div>

                        <div className="flex items-center justify-between gap-6 border-b-[1px] border-[#F7F8F8] py-4">
                                
                            <div className="font-semibold text-[#485053] flex items-center gap-6 w-3/5">
                                <div className="rounded-xl bg-[#F7F8F8] px-5 py-2.5 shrink-0">
                                    <img className="w-16 h-16 border-[1px] border-neutral-100" src="/src/images/product.png" alt="" />
                                </div>
                                <a className="hover:text-[#258EBC]" href="" title="">VIZIR Alpejska Świeżość Proszek do prania 3,315 KG</a>
                            </div>
                            <div className="flex flex-col lg:flex-row items-center text-center justify-around gap-6 text-[#161819] font-bold w-2/5">
                                <p className="w-1/5">49.90 zł</p>
                                <p className="w-1/5">1</p>
                                <div className="flex justify-center items-center gap-2 w-1/5">
                                    <a className="w-10 h-10 rounded-lg stroke-[#6E797D] hover:stroke-[#5B6468] flex items-center justify-center" href="" title="">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g id="heart">
                                                <path id="icon" fillRule="evenodd" clipRule="evenodd" d="M3.60748 4.1941C5.05275 2.60197 7.39599 2.60197 8.84126 4.1941C8.92666 4.28818 9.07334 4.28818 9.15874 4.1941C10.604 2.60197 12.9473 2.60197 14.3925 4.1941C17.6412 7.77286 14.5194 12.2407 10.6967 14.4962C10.2925 14.7347 10.0903 14.854 9.61335 14.9548C9.32825 15.0151 8.67176 15.0151 8.38666 14.9548C7.90966 14.854 7.70752 14.7347 7.30326 14.4962C3.48062 12.2407 0.358849 7.77285 3.60748 4.1941Z" strokeWidth="2"/>
                                            </g>
                                        </svg>
                                    </a>

                                    <a className="w-10 h-10 rounded-lg stroke-[#6E797D] hover:stroke-[#5B6468] flex items-center justify-center" href="" title="">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g id="cross">
                                                <path id="icon" d="M14.25 3.75L3.75 14.25M3.75 3.75L14.25 14.25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </g>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                        </div>

                        <div className="flex items-center justify-between gap-6 border-b-[1px] border-[#F7F8F8] py-4">
                                
                            <div className="font-semibold text-[#485053] flex items-center gap-6 w-3/5">
                                <div className="rounded-xl bg-[#F7F8F8] px-5 py-2.5 shrink-0">
                                    <img className="w-16 h-16 border-[1px] border-neutral-100" src="/src/images/product.png" alt="" />
                                </div>
                                <a className="hover:text-[#258EBC]" href="" title="">VIZIR Alpejska Świeżość Proszek do prania 3,315 KG</a>
                            </div>
                            <div className="flex flex-col lg:flex-row items-center text-center justify-around gap-6 text-[#161819] font-bold w-2/5">
                                <p className="w-1/5">49.90 zł</p>
                                <p className="w-1/5">1</p>
                                <div className="flex justify-center items-center gap-2 w-1/5">
                                    <a className="w-10 h-10 rounded-lg stroke-[#6E797D] hover:stroke-[#5B6468] flex items-center justify-center" href="" title="">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g id="heart">
                                                <path id="icon" fillRule="evenodd" clipRule="evenodd" d="M3.60748 4.1941C5.05275 2.60197 7.39599 2.60197 8.84126 4.1941C8.92666 4.28818 9.07334 4.28818 9.15874 4.1941C10.604 2.60197 12.9473 2.60197 14.3925 4.1941C17.6412 7.77286 14.5194 12.2407 10.6967 14.4962C10.2925 14.7347 10.0903 14.854 9.61335 14.9548C9.32825 15.0151 8.67176 15.0151 8.38666 14.9548C7.90966 14.854 7.70752 14.7347 7.30326 14.4962C3.48062 12.2407 0.358849 7.77285 3.60748 4.1941Z" strokeWidth="2"/>
                                            </g>
                                        </svg>
                                    </a>

                                    <a className="w-10 h-10 rounded-lg stroke-[#6E797D] hover:stroke-[#5B6468] flex items-center justify-center" href="" title="">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g id="cross">
                                                <path id="icon" d="M14.25 3.75L3.75 14.25M3.75 3.75L14.25 14.25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </g>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                        </div>

                    </section>

                    <section className="lg:w-1/3 mt-10 lg:mt-0">
                        <div className="bg-[#F7F8F8] p-6 rounded-2xl">
                            <div className="text-[#6E797D] font-medium flex items-center justify-between">
                                <p>Łącznie:</p>
                                <p className="font-bold text-[#161819]">99,99 zł</p>
                            </div>

                            <div className="text-[#6E797D] font-medium flex items-center justify-between mb-6 mt-3">
                                <p>Rabaty:</p>
                                <p className="font-bold text-[#161819]">- 9,99 zł</p>
                            </div>

                            <hr className="border-[#E5E8E9]" />

                            <div className="text-[#6E797D] font-medium flex items-center justify-between my-6">
                                <p>Do zapłaty</p>
                                <p className="font-bold text-[#161819] text-xl">90,99 zł</p>
                            </div>

                            <a className="bg-[#30B7F3] hover:bg-[#2BA4DA] text-[#FFFFFF] rounded-xl flex items-center justify-center grow py-3 font-bold" href="" title="">Zamawiam</a>
                        </div>
                    </section>
                </section>

                <section>
                    <form className="flex flex-row items-center mt-6 gap-6">
                        <input className="border-[1px] outline-none focus:border-[#30B7F3] focus:text-[#30B7F3] hover:bg-[#E5E8E9] hover:text-[#6E797D] border-[#CBD0D3] font-semibold text-[#6E797D] rounded-lg px-4 py-2" type="text" placeholder="Kod promocyjny" />
                        <button className="bg-[#E5E8E9] hover:bg-[#CBD0D3] text-[#485053] hover:text-[#373C3F] font-semibold rounded-lg px-4 py-2.5">
                            Aktywuj kupon
                        </button>
                    </form>
                </section>
            </section>

            <PartnerComponent />
        </>
    )
}

export default Basket;