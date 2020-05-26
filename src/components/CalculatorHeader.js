import React from 'react';
import styled from 'styled-components';

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
        <CalculatorHeaderTitle>복리계산기</CalculatorHeaderTitle>
        <CalculatorHeaderDescription></CalculatorHeaderDescription>
    </CalculatorHeaderContainer>
)

export default CalculatorHeader
