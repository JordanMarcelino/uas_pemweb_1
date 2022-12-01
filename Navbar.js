import React, { useRef } from "react";
import logo from "../../assets/img/logo.png";

const Navbar = () => {
    const navRef = useRef();

    const onClickHamburger = (event) => {
        event.target.classList.toggle("[&>span:nth-child(1)]:rotate-45");
        event.target.classList.toggle("[&>span:nth-child(2)]:scale-0");
        event.target.classList.toggle("[&>span:nth-child(3)]:-rotate-45");

        navRef.current.classList.toggle("translate-x-40");
        navRef.current.classList.toggle("sm:translate-x-[50vw]");
    };

    return (
        <div className="relative flex w-full justify-between py-2 px-4 md:py-4 md:px-8 lg:px-12 lg:py-6">
            <div className="flex gap-4 font-serif text-xl font-bold md:text-2xl lg:text-4xl">
                <img src={logo} alt="Logo" className="h-8 w-8 self-center object-cover md:h-12 md:w-12 lg:h-16 lg:w-16" />
                <a href="#home" className=" cursor-pointer self-center rounded-sm p-2  text-[#21242e] transition duration-500 ease-in-out hover:bg-[#21242e] hover:text-white">
                    Michael
                </a>
            </div>
            <nav
                className=" absolute right-0 top-12 z-40 h-max w-max translate-x-40 rounded-tl-sm rounded-bl-sm bg-[#21242e] p-8 font-bold text-white transition-all duration-500 ease-in-out sm:w-[40vw] sm:translate-x-[50vw] md:top-16 lg:static lg:translate-x-0 lg:bg-[#F3F1EF] lg:p-2 lg:text-xl lg:text-[#21242e] [&>ul>li]:cursor-pointer"
                ref={navRef}
            >
                <ul className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row">
                    <li className="w-full rounded-sm p-2 transition-all duration-500 ease-in-out hover:bg-white hover:text-[#21242e] lg:hover:bg-[#21242e] lg:hover:text-white">Home</li>
                    <li className="w-full rounded-sm p-2 transition-all duration-500 ease-in-out hover:bg-white hover:text-[#21242e] lg:hover:bg-[#21242e] lg:hover:text-white">About</li>
                    <li className="w-full rounded-sm p-2 transition-all duration-500 ease-in-out hover:bg-white hover:text-[#21242e] lg:hover:bg-[#21242e] lg:hover:text-white">Project</li>
                    <li className="w-full rounded-sm p-2 transition-all duration-500 ease-in-out hover:bg-white hover:text-[#21242e] lg:hover:bg-[#21242e] lg:hover:text-white">Contact</li>
                </ul>
            </nav>
            <div className="flex items-center self-center px-4 lg:hidden">
                <button id="hamburger" name="hamburger" className="absolute right-4 flex flex-col gap-[0.35rem]" onClick={onClickHamburger}>
                    <span className="h-[3px] w-[30px] origin-top-left rounded-sm bg-[#0F172A] transition duration-300 ease-in-out"></span>
                    <span className="h-[3px] w-[30px] rounded-sm bg-[#0F172A] transition duration-300 ease-in-out"></span>
                    <span className="h-[3px] w-[30px] origin-bottom-left rounded-sm bg-[#0F172A] transition duration-300 ease-in-out"></span>
                </button>
            </div>
        </div>
    );
};

export default Navbar;
