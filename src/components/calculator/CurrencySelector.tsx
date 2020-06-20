import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Colors } from '../../constants';
import Dropdown from 'icons/dropdown.svg';

const StyledCurrencySelectorContainer = styled.div`
    display: flex;
`;

const StyledSelector = styled.select`
    -moz-appearance:none;
    -webkit-appearance:none;
    width: 60px;
    font-size: 14px;
    padding-left: 16px;
    appearance:none;
    background: transparent;
    background-repeat: no-repeat;
    background-image: url(${Dropdown}), linear-gradient(to bottom, #ffffff, #f9fafb);;
    background-position-x: calc(100% - 8px), 0;
    background-position-y: 7px, 0;
    border: solid 1px ${Colors.grey};
    border-radius: 2px 0 0 2px;
`;

const StyledChildrenContainer = styled.div`
    flex: auto;
`;

const CurrencyOptions = [
    { label: '$', value: 'USD' },
    { label: '₩', value: 'KRW' },
    { label: '€', value: 'EUR' },
]

interface CurrencySelectorProps {
    currency: string | undefined;
    handleChangeCurrency: ((selected: any) => void) | undefined;
    children: ReactNode;
}

const CurrencySelector = (props: CurrencySelectorProps) => {
    return (
        <StyledCurrencySelectorContainer>
            <StyledSelector
                name="currency"
                value={props.currency}
                onChange={props.handleChangeCurrency}>
                {
                    CurrencyOptions.map((option, idx) => {
                        return <option key={idx} value={option.value}>{option.label}</option>
                    })
                }
            </StyledSelector>
            <StyledChildrenContainer>
                { props.children }
            </StyledChildrenContainer>
        </StyledCurrencySelectorContainer>
    )
}

export default CurrencySelector;