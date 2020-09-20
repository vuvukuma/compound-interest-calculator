import React from 'react';
import { FormattedMessage, FormattedNumber } from 'react-intl';
import Panel from '../../components/layout/Panel';
import {
    StyledCalculatorResult,
    StyledCalculatorResultRow,
    StyledCalculatorResultTotal,
    StyledCalculatorResultTotalLabel,
    StyledCalculatorResultTotalValue,
} from './Calculator.styled';

interface CalculatorResultProps {
    currency: string;
    compoundTotal: number;
    principal: number;
    totalInterest: number;
}

export const CalculatorResult = (props: CalculatorResultProps) => {
    return (
        <Panel>
            <StyledCalculatorResult>
                <StyledCalculatorResultTotal>
                    <StyledCalculatorResultTotalLabel>
                        <FormattedMessage defaultMessage="총 금액" 
                            id="calculator.result.label.compoundTotal"></FormattedMessage>
                    </StyledCalculatorResultTotalLabel>
                    <StyledCalculatorResultTotalValue>
                        <FormattedNumber value={props.compoundTotal}
                            // eslint-disable-next-line 
                            style="currency" currency={props.currency}></FormattedNumber>
                    </StyledCalculatorResultTotalValue>
                </StyledCalculatorResultTotal>
                <StyledCalculatorResultRow>
                    <div>
                        <FormattedMessage defaultMessage="원금" 
                            id="calculator.result.label.principal"></FormattedMessage>
                    </div>
                    <div>
                        <FormattedNumber value={props.principal}
                            // eslint-disable-next-line
                            style="currency" currency={props.currency}></FormattedNumber>
                    </div>                    
                </StyledCalculatorResultRow>
                <StyledCalculatorResultRow>
                    <div>
                        <FormattedMessage defaultMessage="이자" 
                            id="calculator.result.label.totalInterest"></FormattedMessage>
                    </div>
                    <div>
                        <FormattedNumber value={props.totalInterest}
                            // eslint-disable-next-line
                            style="currency" currency={props.currency}></FormattedNumber>
                    </div>
                </StyledCalculatorResultRow>
            </StyledCalculatorResult>
        </Panel>
    )
}

export default CalculatorResult;