import React from 'react';
import { Colors } from '../../constants';
import styled from 'styled-components';

const BaseInput = styled.input`
    width: 100%;
    height: 34px;
    font-size: 14px;
    border: solid 1px ${Colors.grey};
    border-radius: 2px 0 0 2px;
    padding: 0 10px;
`;

interface TextInputProps {
    name: string,
    value: string,
    onChange?: (value: any) => void
    children?: React.ReactChildren,
    pattern?: string,
}

export const TextInput = (props: TextInputProps) => {
    return (
        <BaseInput type="text"
            name={props.name}
            pattern={props.pattern}
            value={props.value}
            onChange={props.onChange}>
                {props.children}
        </BaseInput>
    )
}