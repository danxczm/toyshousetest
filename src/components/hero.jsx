import burger from '../public/ic_menu_48px.png';
import logo from '../public/Group.png';
import hero from '../public/heropic.png';

import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdClose } from 'react-icons/io';

import Button from './button';
import { useState } from 'react';

let links = [
    { name: 'home', link: '/home' },
    { name: 'services', link: '/services' },
    { name: 'contacts', link: '/contacts' },
];

const Hero = () => {
    const [open, setOpen] = useState(false);

    return (
        <section className="pt-10 min-h-[768px] bg-gradient-to-t from-[#98C3E8]/20 via-[#98C3E800] to-[#98C3E800] overflow-hidden">
            <header className="fixed top-0 left-0 z-50 w-full">
                <nav className="flex items-center py-[20px] md:px-10  justify-between bg-white px-[15px]">
                    <a href="/" className="flex items-center w-12 h-12 cursor-pointer">
                        <img src={logo} alt="logo" loading="lazy" />
                    </a>

                    <div
                        onClick={() => setOpen(!open)}
                        className="w-8 h-8 cursor-pointer md:hidden"
                    >
                        {open ? (
                            <IoMdClose size={35} color="#1F3F68" />
                        ) : (
                            <RxHamburgerMenu size={35} color="#1F3F68" />
                        )}
                    </div>
                    <ul
                        className={`absolute pb-12 capitalize bg-white md:flex md:items-center md:pb-0 md:static md:z-auto z-[-1] left-0 w-full md:w-auto pl-[15px] transition-all duration-500 ease-in ${
                            open
                                ? 'top-[88px] opacity-100'
                                : 'top-[-490px] md:opacity-100 opacity-0'
                        }`}
                    >
                        {links.map(({ name, link }) => (
                            <li key={link} className="text-xl md:ml-8 md:my-0 my-7">
                                <a
                                    href={link}
                                    className="text-[#1F3F68] duration-500 hover:text-blue-400"
                                >
                                    {name}
                                </a>
                            </li>
                        ))}
                        <button>
                            <a
                                href="/registration"
                                className="capitalize bg-[#1F3F68] text-white py-2 px-4 rounded md:ml-8 hover:bg-blue-400 duration-500"
                            >
                                registration
                            </a>
                        </button>
                    </ul>
                </nav>
            </header>
            <div className="max-w-[1110px] sm:mt-[140px] md:sm:mt-[152px] mx-auto px-[15px] md:px-10">
                <div className="relative flex">
                    <div>
                        <h1 className="font-extrabold text-[#1F3F68] tracking-[2%] md:tracking-[4%] uppercase text-5xl md:text-[64px] w-[238px] md:w-[525px] leading-[62.4px] md:leading-[83.2px] mb-[55px]">
                            HELLO WORLD ! My name is Ira
                        </h1>
                        <p className="text-lg leading-7 tracking-[4%] md:w-[425px] opacity-60 text-[#1F3F68] mb-[70px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
                            tristique vulputate ultrices ut mauris tellus at. Posuere sollicitudin
                            odio tellus elit
                        </p>
                        <Button>See Our Project</Button>
                    </div>
                    <div className="absolute hidden lg:block -z-10 w-[687px] right-0">
                        <img src={hero} alt="hero" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
