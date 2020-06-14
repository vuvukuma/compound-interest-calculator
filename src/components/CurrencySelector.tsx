import React from 'react';
import { Select } from '@shopify/polaris';

interface CurrencySelectorProps {
    currency: string | undefined;
    handleChangeCurrency: ((selected: string) => void) | undefined;
}

const CurrencySelector = (props: CurrencySelectorProps) => {
    const CurrencyOptions = [
        { label: '$', value: 'USD' },
        { label: '₩', value: 'KRW' },
        { label: '€', value: 'EUR' },
    ]

    return (
        <Select
            label=''
            name="currency"
            options={CurrencyOptions}
            value={props.currency}
            onChange={props.handleChangeCurrency} />
    )
}

export default CurrencySelector;