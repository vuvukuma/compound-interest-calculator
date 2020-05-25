import React, { useState } from 'react';
import styled from 'styled-components';
import CalculatorHeader from './CalculatorHeader';

function Calculator() {
    const [principal, setPrincipal] = useState(1000000);
    const [annualInterestRate, setAnnualInterestRate] = useState(1.2);
    const [frequency, setFrequency] = useState(12);
    const [period, setPeriod] = useState(2);

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
        padding-bottom: 16px;
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
                <label className="calculator-row__label" htmlFor="principal">투자 원금</label>
                <input className="calculator-row__input" 
                    name="principal" 
                    type="number"
                    value={principal}
                    onChange={(e) => setPrincipal(e.target.value)}>
                </input>
            </CalculatorRow>
            <CalculatorRow>
                <label className="calculator-row__label" htmlFor="annualInterestRate">연 이자율(%)</label>
                <input className="calculator-row__input" 
                    name="annualInterestRate" 
                    type="number"
                    value={annualInterestRate}
                    onChange={(e) => setAnnualInterestRate(e.target.value)}>
                </input>
            </CalculatorRow>
            <CalculatorRow>
                <label className="calculator-row__label" htmlFor="frequency">복리계산빈도</label>
                <select className="calculator-row__input" 
                    name="frequency" 
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value)}>
                    <option value="12">연 복리</option>
                    <option value="6">6개월 반기복리</option>
                    <option value="3">3개월 분기복리</option>
                    <option value="1">월 복리</option>
                </select>
            </CalculatorRow>
            <CalculatorRow>
                <label className="calculator-row__label" htmlFor="period">기간(년)</label>
                <input className="calculator-row__input" 
                    name="period" 
                    type="number"
                    value={period}
                    onChange={(e) => setPeriod(e.target.value)}>    
                </input>
            </CalculatorRow>
            <CalculatorRow>
                <div className="calculator-result-row">
                    만기지급금액 : <strong>{ round(getCompoundTotal()).toLocaleString() }</strong> 원
                </div>
                <div className="calculator-result-row">
                    원금 : { principal.toLocaleString() } 원
                </div>
                <div className="calculator-result-row">
                    이자 : { round(getTotalInterest()).toLocaleString() } 원
                </div>
            </CalculatorRow>
        </CalculatorContainer>
    );
}

export default Calculator;