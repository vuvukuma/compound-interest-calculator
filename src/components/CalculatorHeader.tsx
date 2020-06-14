import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

const CalculatorHeaderContainer = styled.div`
    padding-bottom: 12px;
`;
const CalculatorHeaderTitle = styled.h1`
    font-size: 32px;    
`;
const CalculatorHeaderDescription = styled.p`
    color: #75839F;
`;

const CalculatorHeader = () => (
    <CalculatorHeaderContainer>
        <CalculatorHeaderTitle>
            <FormattedMessage defaultMessage="복리계산기" id="calculator.header.title"></FormattedMessage>
        </CalculatorHeaderTitle>
        <CalculatorHeaderDescription></CalculatorHeaderDescription>
    </CalculatorHeaderContainer>
)

export default CalculatorHeader
