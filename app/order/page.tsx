import PartnerComponent from "@/components/PartnerComponent"

const Order = () =>{
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
                            Zamówienie
                        </a>
                    </li>
                </ul>

                <h3 className="font-bold text-[#161819] text-3xl mt-6">Zamówienie</h3>

                <section className="lg:flex gap-10">
                    <section className="lg:w-2/3">

                        <form className="mt-12">
                            <h4 className="font-bold text-[#161819] text-2xl mb-10">Dane</h4>

                            <div className="mb-6">
                                <label className="text-[#6E797D] w-full text-sm block mb-1">Imię</label>
                                <input className="border-[1px] w-full outline-none focus:border-[#30B7F3] focus:text-[#30B7F3] hover:bg-[#E5E8E9] hover:text-[#6E797D] border-[#CBD0D3] font-semibold text-[#6E797D] rounded-lg px-4 py-2" type="text" placeholder="Imię" />
                            </div>

                            <div className="mb-6">
                                <label className="text-[#6E797D] w-full text-sm block mb-1">Nazwisko</label>
                                <input className="border-[1px] w-full outline-none focus:border-[#30B7F3] focus:text-[#30B7F3] hover:bg-[#E5E8E9] hover:text-[#6E797D] border-[#CBD0D3] font-semibold text-[#6E797D] rounded-lg px-4 py-2" type="text" placeholder="Nazwisko" />
                            </div>

                            <div className="mb-6">
                                <label className="text-[#6E797D] w-full text-sm block mb-1">Adres e-mail</label>
                                <input className="border-[1px] w-full outline-none focus:border-[#30B7F3] focus:text-[#30B7F3] hover:bg-[#E5E8E9] hover:text-[#6E797D] border-[#CBD0D3] font-semibold text-[#6E797D] rounded-lg px-4 py-2" type="text" placeholder="Adres e-mail" />
                            </div>
                        </form>

                    </section>

                    <section className="lg:w-1/3 mt-10 lg:mt-0">
                        <div className="bg-[#F7F8F8] p-6 rounded-2xl">
                            <div className="text-[#6E797D] font-medium flex items-center justify-between">
                                <p>Suma:</p>
                                <p className="font-bold text-[#161819]">99,99 zł</p>
                            </div>

                            <div className="text-[#6E797D] font-medium flex items-center justify-between mt-3">
                                <p>Dostawa:</p>
                                <p className="font-bold text-[#161819]">0,00 zł</p>
                            </div>

                            <div className="text-[#6E797D] font-medium flex items-center justify-between mb-6 mt-3">
                                <p>Rabaty:</p>
                                <p className="font-bold text-[#161819]">- 9,99 zł</p>
                            </div>

                            <hr className="border-[#E5E8E9]" />

                            <form className="flex flex-row items-center my-6 gap-6">
                                <input className="border-[1px] w-1/2 outline-none focus:border-[#30B7F3] focus:text-[#30B7F3] hover:bg-[#E5E8E9] hover:text-[#6E797D] border-[#CBD0D3] font-semibold text-[#6E797D] rounded-lg px-4 py-2" type="text" placeholder="Kod promocyjny" />
                                <button className="bg-[#E5E8E9] shrink-0 hover:bg-[#CBD0D3] text-[#485053] hover:text-[#373C3F] font-semibold rounded-lg px-4 py-2.5 grow">
                                    Aktywuj kupon
                                </button>
                            </form>

                            <hr className="border-[#E5E8E9]" />

                            <div className="text-[#6E797D] font-medium flex items-center justify-between my-6">
                                <p>Do zapłaty</p>
                                <p className="font-bold text-[#161819] text-xl">90,99 zł</p>
                            </div>

                            <a className="bg-[#30B7F3] hover:bg-[#2BA4DA] text-[#FFFFFF] rounded-xl flex items-center justify-center grow py-3 font-bold" href="" title="">Zamawiam i płacę</a>
                        </div>
                    </section>
                </section>
            </section>

            <PartnerComponent />
        </>
    )
}

export default Order;