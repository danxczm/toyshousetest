import technology from '../public/technology.png';
import arrow from '../public/arrow.png';
import business from '../public/business.png';
import product from '../public/product.png';

const Mission = () => {
    return (
        <section id="services" className="relative scroll-mt-28">
            <div className="absolute m-auto left-0 right-0 bg-green-400 rounded-full top-[150px] lg:top-[0px] blur-xl opacity-50 -z-50 lg:w-96 lg:h-96 sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] mix-blend-screen"></div>
            <div className="absolute left-0 right-0 m-auto bg-blue-400 rounded-full top-[750px] lg:top-[200px] lg:-left-[400px] blur-xl opacity-40 -z-50 lg:w-96 lg:h-96 sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px]  mix-blend-screen "></div>
            <div className="absolute left-0 right-0 m-auto bg-rose-400 rounded-full top-[1350px] lg:top-[500px] blur-xl opacity-40 -z-50 sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] mix-blend-screen "></div>

            <div className="px-[15px] w-min md:w-[457px] mt-[77px] md:mt-[106px] mx-auto lg:hidden">
                <h1 className="text-4xl font-bold	leading-[50.4px] tracking-[5%] text-[#316099] mb-[76px]">
                    What we do to help our client grow in digital era?
                </h1>
                <ul className="md:flex-col md:justify-center ">
                    {/* technologgy */}
                    <li className="w-[330px] h-[525px] rounded-xl bg-white shadow-2xl shadow-[#1070B133]/10 p-[23px] mb-16">
                        <div className="relative flex items-center justify-center">
                            <img
                                src={technology}
                                alt="technology"
                                className="absolute z-10 -top-12"
                                loading="lazy"
                            />
                        </div>
                        <div className="w-[284px] h-[273px] mt-[228px]">
                            <h2 className="text-2xl font-bold text-[#1F3F68] leading-9 mb-4">
                                Bring Technology <br /> To Your
                            </h2>
                            <p className="leading-7 mb-6 text-[#1F3F68] opacity-60">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <div className="flex items-center gap-2 font-semibold text-blue-400 group">
                                <a href="#" className="italic">
                                    Learn more
                                </a>
                                <img
                                    src={arrow}
                                    alt="arrow"
                                    className="w-[14px] h-[14px] tracking-wide leading-7 group-hover:translate-x-2 transition"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </li>
                    {/* bussiness */}
                    <li className="w-[330px] h-[525px] rounded-xl bg-white shadow-2xl shadow-[#1070B133]/10 p-[23px] mb-16">
                        <div className="relative flex items-center justify-center my-12">
                            <img
                                src={business}
                                alt="business"
                                className="w-[182px]"
                                loading="lazy"
                            />
                        </div>
                        <div className="w-[284px] h-[273px]">
                            <h2 className="text-2xl font-bold text-[#1F3F68] leading-9 mb-4">
                                Make Your business To Be Better Famous
                            </h2>
                            <p className="leading-7 mb-6 text-[#1F3F68] opacity-60">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <div className="flex items-center gap-2 font-semibold text-blue-400 group">
                                <a href="#" className="italic">
                                    Learn more
                                </a>
                                <img
                                    src={arrow}
                                    alt="arrow"
                                    className="w-[14px] h-[14px] tracking-wide leading-7 group-hover:translate-x-2 transition"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </li>
                    {/* product */}
                    <li className="w-[330px] h-[525px] rounded-xl bg-white shadow-2xl shadow-[#1070B133]/10 p-[23px] mb-24 md:mb-40">
                        <div className="relative flex items-center justify-center my-12">
                            <img src={product} alt="product" className="w-[156px]" loading="lazy" />
                        </div>
                        <div className="w-[284px] h-[273px]">
                            <h2 className="text-2xl font-bold text-[#1F3F68] leading-9 mb-4">
                                Build Your Digital Product That Suitable
                            </h2>
                            <p className="leading-7 mb-6 text-[#1F3F68] opacity-60">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <div className="flex items-center gap-2 font-semibold text-blue-400 group">
                                <a href="#" className="italic">
                                    Learn more
                                </a>
                                <img
                                    src={arrow}
                                    alt="arrow"
                                    className="w-[14px] h-[14px] tracking-wide leading-7 group-hover:translate-x-2 transition"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="w-[920px] h-[1166px] mt-[176px] mb-[142px] mx-auto lg:flex hidden">
                <ul>
                    <li>
                        <h1 className="text-5xl font-bold	leading-[50.4px] tracking-[5%] text-[#316099] w-[457px] mb-[76px]">
                            What we do to help our client grow in digital era?
                        </h1>
                    </li>
                    {/* bussiness */}
                    <li className="w-[330px] h-[525px] rounded-xl bg-white shadow-2xl shadow-[#1070B133]/10 p-[23px] mb-16">
                        <div className="relative flex items-center justify-center my-12">
                            <img
                                src={business}
                                alt="business"
                                className="w-[182px]"
                                loading="lazy"
                            />
                        </div>
                        <div className="w-[284px] h-[273px]">
                            <h2 className="text-2xl font-bold text-[#1F3F68] leading-9 mb-4">
                                Make Your business To Be Better Famous
                            </h2>
                            <p className="leading-7 mb-6 text-[#1F3F68] opacity-60">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <div className="flex items-center gap-2 font-semibold text-blue-400 group">
                                <a href="#" className="italic">
                                    Learn more
                                </a>
                                <img
                                    src={arrow}
                                    alt="arrow"
                                    className="w-[14px] h-[14px] tracking-wide leading-7 group-hover:translate-x-2 transition"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </li>
                </ul>
                <ul>
                    {/* technologgy */}
                    <li className="w-[330px] h-[525px] rounded-xl bg-white shadow-2xl shadow-[#1070B133]/10 p-[23px] mb-16">
                        <div className="relative flex items-center justify-center">
                            <img
                                src={technology}
                                alt="technology"
                                className="absolute z-10 -top-12"
                                loading="lazy"
                            />
                        </div>
                        <div className="w-[284px] h-[273px] mt-[228px]">
                            <h2 className="text-2xl font-bold text-[#1F3F68] leading-9 mb-4">
                                Bring Technology <br /> To Your
                            </h2>
                            <p className="leading-7 mb-6 text-[#1F3F68] opacity-60">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <div className="flex items-center gap-2 font-semibold text-blue-400 group">
                                <a href="#" className="italic">
                                    Learn more
                                </a>
                                <img
                                    src={arrow}
                                    alt="arrow"
                                    className="w-[14px] h-[14px] tracking-wide leading-7 group-hover:translate-x-2 transition"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </li>

                    {/* product */}
                    <li className="w-[330px] h-[525px] rounded-xl bg-white shadow-2xl shadow-[#1070B133]/10 p-[23px] mb-24 md:mb-40">
                        <div className="relative flex items-center justify-center my-12">
                            <img src={product} alt="product" className="w-[156px]" loading="lazy" />
                        </div>
                        <div className="w-[284px] h-[273px]">
                            <h2 className="text-2xl font-bold text-[#1F3F68] leading-9 mb-4">
                                Build Your Digital Product That Suitable
                            </h2>
                            <p className="leading-7 mb-6 text-[#1F3F68] opacity-60">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <div className="flex items-center gap-2 font-semibold text-blue-400 group">
                                <a href="#" className="italic">
                                    Learn more
                                </a>
                                <img
                                    src={arrow}
                                    alt="arrow"
                                    className="w-[14px] h-[14px] tracking-wide leading-7 group-hover:translate-x-2 transition"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Mission;
