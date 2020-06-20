import React from 'react';
import { FormattedMessage } from 'react-intl';
import { TextField, Select } from '@shopify/polaris';
import Panel from 'components/layout/Panel';
import CurrencySelector from './CurrencySelector';
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
                    <TextField
                        label=''
                        name="principal"
                        pattern="[0-9]*"
                        type="number"
                        value={props.principal}
                        onChange={props.handlePrincipalChange} />
                </CurrencySelector>
            </StyledCalculatorRow>
            <StyledCalculatorRow>
                <StyledCalculatorRowLabel htmlFor="annualInterestRate">
                    <FormattedMessage defaultMessage="연 이자율(%)" id="calculator.input.label.annualInterestRate"></FormattedMessage>
                </StyledCalculatorRowLabel>
                <TextField
                    label=''
                    name="annualInterestRate"
                    type="number"
                    value={props.annualInterestRate}
                    onChange={props.handleAnnualInterestRateChange} />
            </StyledCalculatorRow>
            <StyledCalculatorRow>
                <StyledCalculatorRowLabel htmlFor="frequency">
                    <FormattedMessage defaultMessage="복리계산빈도" id="calculator.input.label.frequency"></FormattedMessage>
                </StyledCalculatorRowLabel>
                <Select
                    label=''
                    name="frequency"
                    options={props.frequencyOptions}
                    value={props.frequency}
                    onChange={props.handleFrequencyChange} />
            </StyledCalculatorRow>
            <StyledCalculatorRow>
                <StyledCalculatorRowLabel htmlFor="period">
                    <FormattedMessage defaultMessage="기간 (년)" id="calculator.input.label.period"></FormattedMessage>
                </StyledCalculatorRowLabel>
                <TextField
                    label=''
                    name="period"
                    type="number"
                    pattern="[0-9]*"
                    value={props.period}
                    onChange={props.handlePeriodChange} />
            </StyledCalculatorRow>
        </Panel>
    )
}

export default CalculatorForm;