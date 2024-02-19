import React from 'react';

import GroupDark from '../public/GroupDark.png';

function Footer() {
    return (
        <section
            id="contacts"
            className="py-12 md:py-[17px] sm:px-[15px] md:px-10 lg:px-[165px] text-white bg-[#316099]"
        >
            <div className="md:flex md:gap-10 lg:justify-start lg:gap-24">
                <div className="mb-[53px] w-[300px]">
                    <img
                        loading="lazy"
                        src={GroupDark}
                        className="w-12 h-12 mb-8"
                        alt="GroupDark"
                    />
                    <ul>
                        <li className="flex gap-5 mb-6">
                            <p className="text-base italic font-extrabold leading-7 tracking-wider">
                                A.
                            </p>
                            <p className="text-lg font-light leading-7 tracking-widest">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </li>

                        <li className="flex gap-5 mb-6">
                            <p className="text-base italic font-extrabold leading-7 tracking-wider">
                                T.
                            </p>
                            <a
                                href="tel:+380912345678"
                                className="text-lg font-light leading-7 tracking-widest"
                            >
                                +38 091 234 56 78
                            </a>
                        </li>

                        <li className="flex gap-5">
                            <p className="text-base italic font-extrabold leading-7 tracking-wider">
                                E.
                            </p>
                            <a
                                href="mailto:hello.ira@gmail.com"
                                className="text-lg font-light leading-7 tracking-widest"
                            >
                                hello.ira@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="mb-[52px]">
                    <p className="mb-8 text-2xl italic font-semibold tracking-wider">About US</p>
                    <ul>
                        <li className="mb-[15px]">
                            <a
                                className="text-lg font-light leading-7 tracking-widest mt-7"
                                href="#about"
                            >
                                About
                            </a>
                        </li>
                        <li className="mb-[15px]">
                            <a
                                className="text-lg font-light leading-7 tracking-widest mt-7"
                                href="#work"
                            >
                                What We Do
                            </a>
                        </li>
                        <li className="mb-[15px]">
                            <a
                                className="text-lg font-light leading-7 tracking-widest mt-7"
                                href="#project"
                            >
                                Project
                            </a>
                        </li>
                        <li>
                            <a
                                className="text-lg font-light leading-7 tracking-widest mt-7"
                                href="#results"
                            >
                                How It Work With Us
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="mb-11">
                    <p className="mb-8 text-2xl italic font-semibold tracking-wider">Follow</p>
                    <ul>
                        <li className="mb-[15px]">
                            <a
                                className="text-lg font-light leading-7 tracking-widest mt-7"
                                href=""
                            >
                                Instagram
                            </a>
                        </li>
                        <li className="mb-[15px]">
                            <a
                                className="text-lg font-light leading-7 tracking-widest mt-7"
                                href=""
                            >
                                Facebook
                            </a>
                        </li>
                        <li className="mb-[15px]">
                            <a
                                className="text-lg font-light leading-7 tracking-widest mt-7"
                                href=""
                            >
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a
                                className="text-lg font-light leading-7 tracking-widest mt-7"
                                href=""
                            >
                                Youtube
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <footer className="text-base leading-7 tracking-wider opacity-40">
                2019 © All rights reserved.
            </footer>
        </section>
    );
}

export default Footer;
