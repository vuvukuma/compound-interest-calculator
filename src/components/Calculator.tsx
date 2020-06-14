import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import CalculatorHeader from './CalculatorHeader';
import { TextField, Select } from '@shopify/polaris';

const CalculatorContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 12px;
    max-width: 400px;
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

function Calculator() {
    const [principal, setPrincipal] = useState('1000000');
    const [annualInterestRate, setAnnualInterestRate] = useState('2');
    const [frequency, setFrequency] = useState('12');
    const [period, setPeriod] = useState('12');

    const handlePrincipalChange = useCallback((value) => setPrincipal(value), []);
    const handleAnnualInterestRateChange = useCallback((value) => setAnnualInterestRate(value), []);
    const handleFrequencyChange = useCallback((value) => setFrequency(value), []);
    const handlePeriodChange = useCallback((value) => setPeriod(value), []);

    const FrequencyOptions = [
        {label: '연 복리', value: '12'},
        {label: '6개월 반기복리', value: '6'},
        {label: '3개월 분기복리', value: '3'},
        {label: '월 복리', value: '1'},
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

    return (
        <CalculatorContainer>
            <CalculatorHeader/>
            <CalculatorRow>
                <CalculatorRowLabel htmlFor="principal">투자 원금</CalculatorRowLabel>
                <TextField
                    label=''
                    name="principal"
                    pattern="[0-9]*" 
                    type="number"
                    value={principal}
                    onChange={handlePrincipalChange}/>
            </CalculatorRow>
            <CalculatorRow>
                <CalculatorRowLabel htmlFor="annualInterestRate">연 이자율(%)</CalculatorRowLabel>
                <TextField
                    label=''
                    name="annualInterestRate"
                    type="number"
                    value={annualInterestRate}
                    onChange={handleAnnualInterestRateChange}/>
            </CalculatorRow>
            <CalculatorRow>
                <CalculatorRowLabel htmlFor="frequency">복리계산빈도</CalculatorRowLabel>
                <Select
                    label=''
                    name="frequency"
                    options={FrequencyOptions}
                    value={frequency}
                    onChange={handleFrequencyChange}/>
            </CalculatorRow>
            <CalculatorRow>
                <CalculatorRowLabel htmlFor="period">기간 (년)</CalculatorRowLabel>
                <TextField
                    label=''
                    name="period" 
                    type="number"
                    pattern="[0-9]*"
                    value={period}
                    onChange={handlePeriodChange}/>
            </CalculatorRow>
            <CalculatorRow>
                <CalculatorResultRow>
                    만기지급금액 : <strong>{ round(getCompoundTotal()).toLocaleString() }</strong> 원
                </CalculatorResultRow>
                <CalculatorResultRow>
                    원금 : { principal.toLocaleString() } 원
                </CalculatorResultRow>
                <CalculatorResultRow>
                    이자 : { round(getTotalInterest()).toLocaleString() } 원
                </CalculatorResultRow>
            </CalculatorRow>
        </CalculatorContainer>
    );
}

export default Calculator;