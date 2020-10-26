import React, { InputHTMLAttributes, useState } from 'react';

import { InputFormContainer, Label, Input } from './styles';

interface InputFormProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
    type: string;
}

const InputForm: React.FunctionComponent<InputFormProps> = ({ label, name, type, children, ...rest }) => {
    return (
        <InputFormContainer >
            <Label htmlFor={name}>
                {label}
            </Label>
            
            <Input
                type={type}
                name={name}
                placeholder=" "
                {...rest}
            />
            {children}
        </InputFormContainer>
    );
}
export default InputForm;