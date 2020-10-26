import React, { SelectHTMLAttributes, forwardRef } from 'react';

import { SelectContainer } from './styles'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    padrao: string;
    options: Array<{
        label: string;
        value: string | number;
    }>
}

const Select: React.RefForwardingComponent<HTMLSelectElement, SelectProps> = ({ name, padrao, options, ...rest }, ref) => {
    return (
        <SelectContainer className="select-block">
            <select name={name} id={name} ref={ref}{...rest}>
                <option value="" disabled >{padrao}</option>

                {options.map(options => {
                    return <option key={options.value} value={options.value}>{options.label}</option>
                })}
            </select>
        </SelectContainer>
    );
}

export default forwardRef(Select);