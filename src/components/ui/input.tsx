"use client"

import React from 'react';
import { IconDefinition } from "@fortawesome/free-regular-svg-icons"
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

type Props = {
    placeholder: string;
    value?: string;
    password?: boolean;
    filled?: boolean;
    icon?: IconDefinition;
    onChange?: (newValue:string) => void;
    onEnter?: () => void;

}

export const Input = ({ placeholder, password, icon, value, filled, onChange, onEnter}: Props) => {

    const [showPassword, setShowPassword] = useState(false);

    const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {

        if (event.code.toLowerCase() === 'enter' && onEnter) {
            onEnter();
        }
    }
    
    

    return(

        <div className={`has-[:focus]:border-white flex items-center h-12 rounded-3xl border-2 border-gray-700 ${filled && 'bg-gray-700'}`}>
            
            {icon &&
                <FontAwesomeIcon 
                    icon={icon}
                    className="ml-6 size-4 text-gray-500"
                />
            }
            <input 

                type={password && !showPassword ? 'password' : 'text'}
                className="flex-1 outline-none bg-transparent h-full px-5"
                placeholder={placeholder}
                value={value}
                onChange={e => onChange && onChange(e.target.value)}
                onKeyUp={handleKeyUp}
            />

            {password &&
                <FontAwesomeIcon
                    onClick={() => setShowPassword(!showPassword)}
                    icon={showPassword ? faEye : faEyeSlash}
                    className="cursor-pointer mr-4 size-4 text-gray-500"
                />
            }
        </div>
    )
}