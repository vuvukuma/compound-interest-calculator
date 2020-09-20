import React from 'react';
import { FormattedMessage } from 'react-intl';
import Panel from 'components/layout/Panel';
import CurrencySelector from './CurrencySelector';
import { Select, TextInput } from '../inputs';
import {
    StyledCalculatorRow,
    StyledCalculatorRowLabel,
} from './Calculator.styled';

interface CalculatorFormProps {
    currency: string;
    principal: string;
    annualInterestRate: string;
    frequency: string;
    frequencyOptions: Array<{label: any, value: string}>;
    period: string;
    handleChangeCurrency: (value: any) => void;
    handlePrincipalChange: (value: any) => void;
    handleAnnualInterestRateChange: (value: any) => void;
    handleFrequencyChange: (value: any) => void;
    handlePeriodChange: (value: any) => void;
}

export const CalculatorForm = (props: CalculatorFormProps) => {
    return (
        <Panel>
            <StyledCalculatorRow>
                <StyledCalculatorRowLabel htmlFor="principal">
                    <FormattedMessage defaultMessage="투자 원금" id="calculator.input.label.principal"></FormattedMessage>
                </StyledCalculatorRowLabel>
                <CurrencySelector
                    currency={props.currency}
                    handleChangeCurrency={props.handleChangeCurrency}>
                    <TextInput
                        name="principal"
                        pattern="[0-9]*"
                        value={props.principal}
                        onChange={props.handlePrincipalChange} />
                </CurrencySelector>
            </StyledCalculatorRow>
            <StyledCalculatorRow>
                <StyledCalculatorRowLabel htmlFor="annualInterestRate">
                    <FormattedMessage defaultMessage="연 이자율(%)" id="calculator.input.label.annualInterestRate"></FormattedMessage>
                </StyledCalculatorRowLabel>
                <TextInput 
                    name="annualInterestRate"
                    value={props.annualInterestRate}
                    onChange={props.handleAnnualInterestRateChange} />
            </StyledCalculatorRow>
            <StyledCalculatorRow>
                <StyledCalculatorRowLabel htmlFor="frequency">
                    <FormattedMessage defaultMessage="복리계산빈도" id="calculator.input.label.frequency"></FormattedMessage>
                </StyledCalculatorRowLabel>
                <Select
                    name="frequency"
                    value={props.frequency}
                    onChange={props.handleFrequencyChange}>
                    {props.frequencyOptions.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
                </Select>
            </StyledCalculatorRow>
            <StyledCalculatorRow>
                <StyledCalculatorRowLabel htmlFor="period">
                    <FormattedMessage defaultMessage="기간 (년)" id="calculator.input.label.period"></FormattedMessage>
                </StyledCalculatorRowLabel>
                <TextInput
                    name="period"
                    pattern="[0-9]*"
                    value={props.period}
                    onChange={props.handlePeriodChange} />
            </StyledCalculatorRow>
        </Panel>
    )
}

export default CalculatorForm;