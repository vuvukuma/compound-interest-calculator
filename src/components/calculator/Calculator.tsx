import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import CalculatorHeader from './CalculatorHeader';
import CurrencySelector from './CurrencySelector';
import Panel from 'components/layout/Panel';
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
const CalculatorResult = styled(CalculatorContainer)`
    margin: 8px 40px;
`;
const CalculatorResultTotal = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 600;
    padding-bottom : 8px;
    text-align: left;
    font-size: 16px;
`;
const CalculatorResultTotalLabel = styled.div`
    font-size: 16px;
    margin-bottom: 12px;
`;
const CalculatorResultTotalValue = styled.div`
    font-size: 28px;
    line-height: 1.14;
    margin-bottom: 19px;
`;
const CalculatorResultRow = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom : 8px;
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

    const handleChangeCurrency = (event: React.FormEvent<HTMLSelectElement>) => {
        const safeSearchTypeValue: string = event.currentTarget.value;

        setCurrency(safeSearchTypeValue);
    }

    return (
        <CalculatorContainer>
            <CalculatorHeader />
            <Panel>
                <CalculatorRow>
                    <CalculatorRowLabel htmlFor="principal">
                        <FormattedMessage defaultMessage="투자 원금" id="calculator.input.label.principal"></FormattedMessage>
                    </CalculatorRowLabel>
                    <CurrencySelector
                        currency={currency}
                        handleChangeCurrency={handleChangeCurrency}>
                        <TextField
                            label=''
                            name="principal"
                            pattern="[0-9]*"
                            type="number"
                            value={principal}
                            onChange={handlePrincipalChange} />
                    </CurrencySelector>
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
            </Panel>
            <Panel>
                <CalculatorResult>
                    <CalculatorResultTotal>
                        <CalculatorResultTotalLabel>
                            <FormattedMessage defaultMessage="총 금액" 
                                id="calculator.result.label.compoundTotal"></FormattedMessage>
                        </CalculatorResultTotalLabel>
                        <CalculatorResultTotalValue>
                            <FormattedNumber value={round(getCompoundTotal())} 
                                style="currency" currency={currency}></FormattedNumber>
                        </CalculatorResultTotalValue>
                    </CalculatorResultTotal>
                    <CalculatorResultRow>
                        <div>
                            <FormattedMessage defaultMessage="원금" 
                                id="calculator.result.label.principal"></FormattedMessage>
                        </div>
                        <div>
                            <FormattedNumber value={parse(principal)} 
                                style="currency" currency={currency}></FormattedNumber>
                        </div>                    
                    </CalculatorResultRow>
                    <CalculatorResultRow>
                        <div>
                            <FormattedMessage defaultMessage="이자" 
                                id="calculator.result.label.totalInterest"></FormattedMessage>
                        </div>
                        <div>
                            <FormattedNumber value={round(getTotalInterest())} 
                                style="currency" currency={currency}></FormattedNumber>
                        </div>
                    </CalculatorResultRow>
                </CalculatorResult>
            </Panel>
        </CalculatorContainer>
    );
}

export default Calculator;