import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import CalculatorHeader from './CalculatorHeader';
import CurrencySelector from './CurrencySelector';
import { TextField, Select } from '@shopify/polaris';
import { useIntl, defineMessages, FormattedMessage, FormattedNumber } from 'react-intl';

const CalculatorContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`;
const CalculatorRow = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    padding-bottom: 24px;
`;
const CalculatorRowLabel = styled.label`
    padding-bottom: 4px;
`;
const CalculatorResultRow = styled.div`
    padding-bottom : 8px;
    text-align: right;
`;

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

    const FrequencyOptions = [
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

    const handleChangeCurrency = (currency: string) => {
        setCurrency(currency);
    }

    return (
        <CalculatorContainer>
            <CalculatorHeader />
            <CalculatorRow>
                <CalculatorRowLabel htmlFor="principal">
                    <FormattedMessage defaultMessage="투자 원금" id="calculator.input.label.principal"></FormattedMessage>
                </CalculatorRowLabel>
                <TextField
                    label=''
                    name="principal"
                    pattern="[0-9]*"
                    type="number"
                    value={principal}
                    onChange={handlePrincipalChange} />
                <CurrencySelector 
                    currency={currency}
                    handleChangeCurrency={handleChangeCurrency} />
            </CalculatorRow>
            <CalculatorRow>
                <CalculatorRowLabel htmlFor="annualInterestRate">
                    <FormattedMessage defaultMessage="연 이자율(%)" id="calculator.input.label.annualInterestRate"></FormattedMessage>
                </CalculatorRowLabel>
                <TextField
                    label=''
                    name="annualInterestRate"
                    type="number"
                    value={annualInterestRate}
                    onChange={handleAnnualInterestRateChange} />
            </CalculatorRow>
            <CalculatorRow>
                <CalculatorRowLabel htmlFor="frequency">
                    <FormattedMessage defaultMessage="복리계산빈도" id="calculator.input.label.frequency"></FormattedMessage>
                </CalculatorRowLabel>
                <Select
                    label=''
                    name="frequency"
                    options={FrequencyOptions}
                    value={frequency}
                    onChange={handleFrequencyChange} />
            </CalculatorRow>
            <CalculatorRow>
                <CalculatorRowLabel htmlFor="period">
                    <FormattedMessage defaultMessage="기간 (년)" id="calculator.input.label.period"></FormattedMessage>
                </CalculatorRowLabel>
                <TextField
                    label=''
                    name="period"
                    type="number"
                    pattern="[0-9]*"
                    value={period}
                    onChange={handlePeriodChange} />
            </CalculatorRow>
            <CalculatorRow>
                <CalculatorResultRow>
                    <FormattedMessage defaultMessage="만기지급금액 : " id="calculator.result.label.compoundTotal"></FormattedMessage>
                    <FormattedNumber value={round(getCompoundTotal())} style="currency" currency={currency}></FormattedNumber>
                </CalculatorResultRow>
                <CalculatorResultRow>
                    <FormattedMessage defaultMessage="원금 : " id="calculator.result.label.principal"></FormattedMessage>
                    <FormattedNumber value={parse(principal)} style="currency" currency={currency}></FormattedNumber>
                </CalculatorResultRow>
                <CalculatorResultRow>
                    <FormattedMessage defaultMessage="이자 : " id="calculator.result.label.totalInterest"></FormattedMessage>
                    <FormattedNumber value={round(getTotalInterest())} style="currency" currency={currency}></FormattedNumber>
                </CalculatorResultRow>
            </CalculatorRow>
        </CalculatorContainer>
    );
}

export default Calculator;