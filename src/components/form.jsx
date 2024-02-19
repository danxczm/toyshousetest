import { useState } from 'react';

import check from '../public/check.png';

import Button from './button';
import Input from './input';

const Form = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <section
            id="registration"
            className="scroll-mt-20 flex flex-col sm:p-[45px] md:px-[75px] text-lg text-cyan-900 bg-white rounded-xl shadow-2xl shadow-[#1070B133]/10 sm:mb-[140px] md:mb-[155px] sm:w-[346px] md:w-[689px] mb-[140px] mx-auto"
        >
            <h2 className="text-2xl uppercase leading-[28.64px] tracking-widest mx-auto mb-10">
                Registration
            </h2>
            <div className="mx-auto">
                <div className="md:flex md:gap-x-[30px]">
                    {/* Name */}
                    <Input type="text" placeholder="Your name">
                        Name
                    </Input>

                    {/* Surname */}
                    <Input type="text" placeholder="Your surname">
                        Surname
                    </Input>
                </div>
                <div className="md:flex md:gap-x-[30px]">
                    {/* phonenumber */}
                    <Input type="tel" placeholder="+38 ___ ___ __ __" text="*Use only numbers">
                        Phone number
                    </Input>

                    {/* email */}
                    <Input
                        type="email"
                        placeholder="email@email.com"
                        text="*Use only latin letters and characters ._-@"
                    >
                        Email
                    </Input>
                </div>
            </div>
            <div className="flex items-start md:items-center mb-11">
                <div className="inline-flex items-center">
                    <label
                        className="relative flex items-center p-3 rounded-full cursor-pointer"
                        htmlFor="custom"
                    >
                        <input
                            type="checkbox"
                            className="peer relative appearance-none w-5 h-5 border rounded-md border-blue-gray-200 cursor-pointer transition-all before:content[''] before:block before:bg-blue-gray-500 before:w-12 before:h-12 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4 before:opacity-0 hover:before:opacity-10 before:transition-opacity checked:bg-gray-900 checked:border-gray-900 checked:before:bg-gray-900"
                            id="custom"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        />
                        <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                            <img src={check} alt="check" />
                        </span>
                    </label>
                </div>
                <p className="font-normal">
                    I agree with The Terms of Use and with The Privacy Policy
                </p>
            </div>
            <Button register>Register me!</Button>
        </section>
    );
};

export default Form;
