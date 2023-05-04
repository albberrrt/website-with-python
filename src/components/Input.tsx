import React, { FC, useRef } from "react"
import sty from "./input.module.scss"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    width: string;
    margin?: string;
    id: string;
    register: any;
    name: string;
    error: boolean;
}


const Input: FC<InputProps> = ({ placeholder, width, margin = '1rem 0 0 0', id, register, name, error, ...props }) => {
    return (
        <>
            <div className={sty.input} style={{width, margin}} >
                <input id={id} placeholder=" " className={error ? sty.error : ''} {...register && register(name)} {...props} />
                <label className={sty.placeholder}htmlFor={id}>{placeholder}</label>
            </div>
        </>
    )
}

export default Input;