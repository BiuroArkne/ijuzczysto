'use client';

import { useState } from "react";

const MenuClientComponent = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <section className="container mx-auto px-4 py-10 text-[#161819] font-semibold hidden lg:block relative">
            <nav className="flex flex-row items-center justify-between">
                <div>
                    <ul className="flex flex-row gap-12">
                        <li>
                            <button onClick={toggleMenu} className="hover:text-[#5AC6FF]">
                                Pranie
                            </button>
                        </li>
                        <li>
                            <button onClick={toggleMenu} className="hover:text-[#5AC6FF]">
                                Zmywanie
                            </button>
                        </li>
                        <li>
                            <button onClick={toggleMenu} className="hover:text-[#5AC6FF]">
                                Sprzątanie
                            </button>
                        </li>
                        <li>
                            <button onClick={toggleMenu} className="hover:text-[#5AC6FF]">
                                Odkamieniacze
                            </button>
                        </li>
                        <li>
                            <button onClick={toggleMenu} className="hover:text-[#5AC6FF]">
                                Odświeżacze
                            </button>
                        </li>
                    </ul>
                </div>

                <a className="hover:text-[#5AC6FF] flex flex-row gap-2 items-center mr-0" href="" title="">
                    <span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="wavy">
                                <path id="icon" opacity="0.24" d="M10.2763 4.24623C10.8248 2.58459 13.1753 2.58459 13.7237 4.24623C14.0712 5.29928 15.2735 5.79728 16.2639 5.29843C17.8267 4.51127 19.4887 6.17333 18.7016 7.73609C18.2027 8.72647 18.7007 9.92875 19.7538 10.2763C21.4154 10.8248 21.4154 13.1753 19.7538 13.7237C18.7007 14.0712 18.2027 15.2735 18.7016 16.2639C19.4887 17.8267 17.8267 19.4887 16.2639 18.7016C15.2735 18.2027 14.0712 18.7007 13.7237 19.7538C13.1753 21.4154 10.8248 21.4154 10.2763 19.7538C9.92875 18.7007 8.72647 18.2027 7.73609 18.7016C6.17333 19.4887 4.51127 17.8267 5.29843 16.2639C5.79728 15.2735 5.29928 14.0712 4.24623 13.7237C2.58459 13.1753 2.58459 10.8248 4.24623 10.2763C5.29928 9.92875 5.79728 8.72647 5.29843 7.73609C4.51127 6.17333 6.17333 4.51127 7.73609 5.29843C8.72647 5.79728 9.92875 5.29928 10.2763 4.24623Z" fill="#5AC6FF"/>
                                <path id="icon_2" d="M10.2763 4.24623C10.8248 2.58459 13.1753 2.58459 13.7237 4.24623C14.0712 5.29928 15.2735 5.79728 16.2639 5.29843C17.8267 4.51127 19.4887 6.17333 18.7016 7.73609C18.2027 8.72647 18.7007 9.92875 19.7538 10.2763C21.4154 10.8248 21.4154 13.1753 19.7538 13.7237C18.7007 14.0712 18.2027 15.2735 18.7016 16.2639C19.4887 17.8267 17.8267 19.4887 16.2639 18.7016C15.2735 18.2027 14.0712 18.7007 13.7237 19.7538C13.1753 21.4154 10.8248 21.4154 10.2763 19.7538C9.92875 18.7007 8.72647 18.2027 7.73609 18.7016C6.17333 19.4887 4.51127 17.8267 5.29843 16.2639C5.79728 15.2735 5.29928 14.0712 4.24623 13.7237C2.58459 13.1753 2.58459 10.8248 4.24623 10.2763C5.29928 9.92875 5.79728 8.72647 5.29843 7.73609C4.51127 6.17333 6.17333 4.51127 7.73609 5.29843C8.72647 5.79728 9.92875 5.29928 10.2763 4.24623Z" stroke="#5AC6FF" strokeWidth="2"/>
                            </g>
                        </svg>
                    </span>

                    Promocje i nowości
                </a>
            </nav>

            { showMenu && (
                <div className="w-full p-10 bg-[#FFFFFF] absolute top-20 left-0 rounded-xl shadow-2xl z-40">
                    <div className="grid grid-cols-4 gap-10">
                        <ul className="flex flex-col gap-6">
                            <li>
                                <a className="text-[#161819] hover:text-[#30B7F3] font-bold" href="" title="">
                                    Proszki
                                </a>
                            </li>

                            <li>
                                <a className="text-[#161819] hover:text-[#30B7F3] font-bold" href="" title="">
                                    Zele do płukania
                                </a>
                            </li>

                            <li>
                                <a className="text-[#161819] hover:text-[#30B7F3] font-bold" href="" title="">
                                    Płyny do prania
                                </a>
                            </li>

                            <li>
                                <a className="text-[#161819] hover:text-[#30B7F3] font-bold" href="" title="">
                                    Kapsułki do prania
                                </a>
                            </li>
                        </ul>

                        <ul className="flex flex-col gap-6">
                            <li>
                                <a className="text-[#161819] hover:text-[#30B7F3] font-bold" href="" title="">
                                    Proszki
                                </a>
                            </li>

                            <li>
                                <a className="text-[#161819] hover:text-[#30B7F3] font-bold" href="" title="">
                                    Zele do płukania
                                </a>
                            </li>

                            <li>
                                <a className="text-[#161819] hover:text-[#30B7F3] font-bold" href="" title="">
                                    Płyny do prania
                                </a>
                            </li>

                            <li>
                                <a className="text-[#161819] hover:text-[#30B7F3] font-bold" href="" title="">
                                    Kapsułki do prania
                                </a>
                            </li>
                        </ul>

                        <ul className="flex flex-col gap-6">
                            <li>
                                <a className="text-[#161819] hover:text-[#30B7F3] font-bold" href="" title="">
                                    Proszki
                                </a>
                            </li>

                            <li>
                                <a className="text-[#161819] hover:text-[#30B7F3] font-bold" href="" title="">
                                    Zele do płukania
                                </a>
                            </li>

                            <li>
                                <a className="text-[#161819] hover:text-[#30B7F3] font-bold" href="" title="">
                                    Płyny do prania
                                </a>
                            </li>

                            <li>
                                <a className="text-[#161819] hover:text-[#30B7F3] font-bold" href="" title="">
                                    Kapsułki do prania
                                </a>
                            </li>
                        </ul>

                        <ul className="flex flex-col gap-6">
                            <li>
                                <a className="text-[#161819] hover:text-[#30B7F3] font-bold" href="" title="">
                                    Proszki
                                </a>
                            </li>

                            <li>
                                <a className="text-[#161819] hover:text-[#30B7F3] font-bold" href="" title="">
                                    Zele do płukania
                                </a>
                            </li>

                            <li>
                                <a className="text-[#161819] hover:text-[#30B7F3] font-bold" href="" title="">
                                    Płyny do prania
                                </a>
                            </li>

                            <li>
                                <a className="text-[#161819] hover:text-[#30B7F3] font-bold" href="" title="">
                                    Kapsułki do prania
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </section>
    )
}

export default MenuClientComponent;