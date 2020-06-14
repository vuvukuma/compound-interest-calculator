import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

const CalculatorHeaderContainer = styled.div`
    text-align: left;
    padding-bottom: 12px;
`;
const CalculatorHeaderTitle = styled.h1`
    display: block;
    text-align: left;
    height: 28px;
    font-size: 21px;
    font-weight: 400;
    line-height: 28px;
`;
const CalculatorHeaderDescription = styled.p`
    padding-top: 16px;
    color: #75839F;
`;

const CalculatorHeader = () => (
    <CalculatorHeaderContainer>
        <CalculatorHeaderTitle>
            <FormattedMessage defaultMessage="복리 계산기 📈" id="calculator.header.title"></FormattedMessage>
        </CalculatorHeaderTitle>
        <CalculatorHeaderDescription>
            <FormattedMessage defaultMessage="이 계산기를 사용해서, 복리의 마법을 확인해 보세요! 🔮" id="calculator.header.desc"></FormattedMessage>
        </CalculatorHeaderDescription>
    </CalculatorHeaderContainer>
)

export default CalculatorHeader
