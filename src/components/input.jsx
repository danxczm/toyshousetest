import React, { useState } from 'react';
import { phoneNumberAutoFormat } from '../utils/phoneNumberAutoFormat';

const Input = ({ type, placeholder, text = false, pattern = null, last = false, children }) => {
    const [inputValue, setInputValue] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [redBorder, setRedBorder] = useState(false);

    const handleInputChange = e => {
        setInputValue(e.target.value);

        if (type === 'tel') {
            const value = phoneNumberAutoFormat(`+${e.target.value}`);

            if (!value) {
                setIsValid(false);
            } else {
                setInputValue(value);
                setIsValid(true);
            }

            const unformatedNumberLength = value.replace(/\s/g, '').length;

            if (unformatedNumberLength < 13) {
                setRedBorder(true);
            } else {
                setRedBorder(false);
            }
        }

        if (type === 'email') {
            const value = e.target.value;
            const pattern = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;

            if (!pattern.test(value)) {
                setRedBorder(true);
                setIsValid(false);
            }
            if (pattern.test(value)) {
                setRedBorder(false);
                setIsValid(true);
            }
        }
    };

    const handleInputFocus = () => {
        if (type === 'tel' && inputValue === '') {
            setInputValue('+38');
        }
    };

    return (
        <div className="mb-[33px]">
            <div className="mb-2">
                <label className="text-lg italic font-semibold leading-[21.48px] tracking-widest">
                    {children}
                </label>
            </div>
            <input
                type={type}
                className={`w-[255px] h-[40px] py-[7px] pl-4 font-light bg-[#EAF3FA] rounded-md placeholder:text-[#5A768C] placeholder:tracking-widest hover:shadow-[0_2px_16px_0_rgba(163,201,245,1)] focus:bg-[#FBFDFE] focus:shadow-[0_2px_16px_0_rgba(163,201,245,1)] focus:text-[#333333] ${
                    redBorder ? 'shadow-[0_2px_16px_0_rgba(245,138,138,1)]' : ''
                }`}
                placeholder={placeholder}
                pattern={pattern}
                aria-label={children}
                value={inputValue}
                onChange={e => {
                    if (type === 'tel') {
                        setIsValid(/^[a-zA-Z]+$/.test(e.target.value));
                    }
                    handleInputChange(e);
                }}
                onFocus={handleInputFocus}
            />
            {text && (
                <p
                    className={`mt-2.5 text-xs font-normal tracking-wider ${
                        !isValid ? 'text-[#F58A8A]' : 'text-zinc-500'
                    }`}
                >
                    {text}
                </p>
            )}
        </div>
    );
};

export default Input;
