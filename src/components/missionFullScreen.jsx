import technology from '../public/technology.png';
import arrow from '../public/arrow.png';
import business from '../public/business.png';
import product from '../public/product.png';

const MissionFullScreen = () => {
    return (
        <section
            id="services"
            className="w-[920px] h-[1166px] mt-[176px] mb-[142px] mx-auto lg:flex hidden"
        >
            <ul>
                <li>
                    <h1 className="text-5xl font-bold	leading-[50.4px] tracking-[5%] text-[#316099] w-[457px] mb-[76px]">
                        What we do to help our client grow in digital era?
                    </h1>
                </li>
                {/* bussiness */}
                <li className="w-[330px] h-[525px] rounded-xl bg-white shadow-2xl shadow-[#1070B133]/10 p-[23px] mb-16">
                    <div className="relative flex items-center justify-center my-12">
                        <img src={business} alt="business" className="w-[182px]" loading="lazy" />
                    </div>
                    <div className="w-[284px] h-[273px]">
                        <h2 className="text-2xl font-bold text-[#1F3F68] leading-9 mb-4">
                            Make Your business To Be Better Famous
                        </h2>
                        <p className="leading-7 mb-6 text-[#1F3F68] opacity-60">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
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
        </section>
    );
};

export default MissionFullScreen;
