const BlogComponent = () => {
    return (
        <section className="container mx-auto px-4 mt-10 lg:mt-20">
            <h3 className="text-[#161819] font-bold text-3xl">Blog</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
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
    );
}

export default BlogComponent;