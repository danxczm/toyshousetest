import React from 'react';
import Button from './button';

const Interest = () => {
    return (
        <section className="relative bg-[#316099] rounded-tr-[200px]">
            <div className="mx-auto lg:w-[790px] pt-[91px] sm:pb-[52px] w-full sm:px-[15px] md:px-[39px] text-white">
                <div className="md:w-[306px]">
                    <h2 className="ml-6 text-4xl font-bold leading-10 tracking-widest md:ml-0 mb-14 ">
                        Interested to work with our team?
                    </h2>
                </div>
                <div className="lg:items-start lg:flex lg:gap-28">
                    <p className="text-2xl leading-10 tracking-widest md:w-[460px] opacity-60 sm:mb-[50px] md:mb-[71px]">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <div className="sm:mb-[50px] md:mb-[63px]">
                        <Button>Let’s Talk</Button>
                    </div>
                </div>
            </div>
            <div className="w-full absolute bottom-0 border-white border-[1px] opacity-40"></div>
        </section>
    );
};

export default Interest;
