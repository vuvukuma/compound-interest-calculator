import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Select } from '../inputs';

const StyledCurrencySelectorContainer = styled.div`
    display: flex;
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
            <Select
                name="currency"
                value={props.currency}
                onChange={props.handleChangeCurrency}>
                {
                    CurrencyOptions.map((option, idx) => {
                        return <option key={idx} value={option.value}>{option.label}</option>
                    })
                }
            </Select>
            <StyledChildrenContainer>
                { props.children }
            </StyledChildrenContainer>
        </StyledCurrencySelectorContainer>
    )
}

export default CurrencySelector;