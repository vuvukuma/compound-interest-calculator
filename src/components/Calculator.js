import React, {useState } from 'react';
import styled, { css } from 'styled-components';
import CalculatorHeader from './CalculatorHeader';

function Calculator() {
    const [principal, setPrincipal] = useState(1000000);
    const [annualInterestRate, setAnnualInterestRate] = useState(1.2);
    const [frequency, setFrequency] = useState(12);
    const [period, setPeriod] = useState(2);
    const inputMixin = css`
        height: 42px;
        width: 100%;
        border: 1px solid;
        border-radius: 4px;
        border-color: #2E3958;
        padding: 0 8px;
        font-size: 16px;
    `;
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
    const CalculatorRowInput = styled.input`
        ${inputMixin}
    `;
    const CalculatorRowSelect = styled.select`
        ${inputMixin}   
    `;
    const CalculatorRowLabel = styled.label`
        padding-bottom: 4px;
    `;
    const CalculatorResultRow = styled.div`
        padding-bottom : 8px;
        text-align: right;
    `;

    function getCompoundTotal() {
        const cycle = 12 / frequency;

        return principal * Math.pow((1 + (annualInterestRate / 100 / cycle)), (period * cycle));
    }
    
    function getTotalInterest() {
        return getCompoundTotal() - principal;
    }

    function round(num) {
        return Math.round((num + Number.EPSILON) * 100) / 100
    }

    return (
        <CalculatorContainer>
            <CalculatorHeader/>
            <CalculatorRow>
                <CalculatorRowLabel htmlFor="principal">투자 원금</CalculatorRowLabel>
                <CalculatorRowInput
                    name="principal" 
                    type="number"
                    value={principal}
                    onChange={(e) => setPrincipal(e.target.value)}>
                </CalculatorRowInput>
            </CalculatorRow>
            <CalculatorRow>
                <CalculatorRowLabel htmlFor="annualInterestRate">연 이자율(%)</CalculatorRowLabel>
                <CalculatorRowInput 
                    name="annualInterestRate" 
                    type="number"
                    value={annualInterestRate}
                    onChange={(e) => setAnnualInterestRate(e.target.value)}>
                </CalculatorRowInput>
            </CalculatorRow>
            <CalculatorRow>
                <CalculatorRowLabel htmlFor="frequency">복리계산빈도</CalculatorRowLabel>
                <CalculatorRowSelect
                    name="frequency" 
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value)}>
                    <option value="12">연 복리</option>
                    <option value="6">6개월 반기복리</option>
                    <option value="3">3개월 분기복리</option>
                    <option value="1">월 복리</option>
                </CalculatorRowSelect>
            </CalculatorRow>
            <CalculatorRow>
                <CalculatorRowLabel htmlFor="period">기간 (년)</CalculatorRowLabel>
                <CalculatorRowInput 
                    name="period" 
                    type="number"
                    value={period}
                    onChange={(e) => setPeriod(e.target.value)}>    
                </CalculatorRowInput>
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