import React, { useState, useCallback } from 'react';
import { useIntl, defineMessages } from 'react-intl';
import { StyledCalculator, StyledCalculatorContainer } from './Calculator.styled';
import CalculatorHeader from './CalculatorHeader';
import CalculatorForm from './CalculatorForm';
import CalculatorResult from './CalculatorResult';

const frequencyOptionsLabelMessages = defineMessages({
    annual: {
        id: 'calculator.input.frequency.annual',
        defaultMessage: '연 복리',
    },
    semiannual: {
        id: 'calculator.input.frequency.semiannual',
        defaultMessage: '6개월 반기복리',
    },
    quarterly: {
        id: 'calculator.input.frequency.quarterly',
        defaultMessage: '3개월 분기복리',
    },
    monthly: {
        id: 'calculator.input.frequency.monthly',
        defaultMessage: '월 복리',
    },
});

const Calculator = () => {
    const [principal, setPrincipal] = useState('1000000');
    const [annualInterestRate, setAnnualInterestRate] = useState('2');
    const [frequency, setFrequency] = useState('12');
    const [period, setPeriod] = useState('12');
    const [currency, setCurrency] = useState('USD');
    const intl = useIntl();

    const handlePrincipalChange = useCallback((value) => setPrincipal(value), []);
    const handleAnnualInterestRateChange = useCallback((value) => setAnnualInterestRate(value), []);
    const handleFrequencyChange = useCallback((value) => setFrequency(value), []);
    const handlePeriodChange = useCallback((value) => setPeriod(value), []);

    const frequencyOptions = [
        { label: intl.formatMessage(frequencyOptionsLabelMessages.annual), value: '12' },
        { label: intl.formatMessage(frequencyOptionsLabelMessages.semiannual), value: '6' },
        { label: intl.formatMessage(frequencyOptionsLabelMessages.quarterly), value: '3' },
        { label: intl.formatMessage(frequencyOptionsLabelMessages.monthly), value: '1' },
    ]

    function parse(inputValue: string): number {
        return Number.parseInt(inputValue, 10);
    }

    function getCompoundTotal() {
        const cycle: number = 12 / parse(frequency);

        return parse(principal) * Math.pow((1 + parse(annualInterestRate) / 100 / cycle), (parse(period) * cycle));
    }

    function getTotalInterest() {
        return getCompoundTotal() - parse(principal);
    }

    function round(num: number) {
        return Math.round((num + Number.EPSILON) * 100) / 100
    }

    const handleChangeCurrency = (event: React.FormEvent<HTMLSelectElement>) => {
        const safeSearchTypeValue: string = event.currentTarget.value;

        setCurrency(safeSearchTypeValue);
    }

    return (
        <StyledCalculatorContainer>
            <CalculatorHeader />
            <StyledCalculator>
                <CalculatorForm 
                    currency={currency}
                    principal={principal}
                    annualInterestRate={annualInterestRate}
                    frequency={frequency}
                    frequencyOptions={frequencyOptions}
                    period={period}
                    handleChangeCurrency={handleChangeCurrency}
                    handlePrincipalChange={handlePrincipalChange}
                    handleAnnualInterestRateChange={handleAnnualInterestRateChange}
                    handleFrequencyChange={handleFrequencyChange}
                    handlePeriodChange={handlePeriodChange}/>
                <CalculatorResult 
                    currency={currency}
                    compoundTotal={round(getCompoundTotal())}
                    principal={parse(principal)}
                    totalInterest={round(getTotalInterest())}/>
            </StyledCalculator>
        </StyledCalculatorContainer>
    );
}

export default Calculator;