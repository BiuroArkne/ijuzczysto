const NewsletterComponent = () => {
    return (
        <div className="col-span-5 xl:col-span-2">
            <div className="p-6 rounded-3xl bg-[#FFFFFF]">
                <h5 className="text-[#15526D] font-bold">Chcesz być na bieżąco?</h5>
                <p className="text-sm text-[#6E797D] mt-1">Zapisz się do newslettera i zgarnij rabat 10% na pierwsze zakupy.</p>

                <form className="flex flex-row items-center mt-6">
                    <input className="border-[1px] outline-none focus:border-[#30B7F3] focus:text-[#30B7F3] hover:bg-[#E5E8E9] hover:text-[#6E797D] border-r-0 border-[#CBD0D3] font-semibold text-[#6E797D] rounded-tl-lg rounded-bl-lg w-fit px-4 py-2 grow" type="text" placeholder="Wpisz adres e-mail" />
                    <button className="bg-[#30B7F3] hover:bg-[#2BA4DA] text-[#FFFFFF] font-semibold rounded-lg px-4 py-2.5 -ml-2">
                        Zapisz się
                    </button>
                </form>
            </div>
        </div>
    )
}

export default NewsletterComponent;