import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Colors } from '../../constants';

const CalculatorHeaderContainer = styled.div`
    margin: 0 10px;
    text-align: left;
`;
const CalculatorHeaderTitle = styled.div`
    height: 28px;
    margin-top: 4px;
    display: block;
    font-size: 21px;
    font-weight: 600;
    line-height: initial;
`;
const CalculatorHeaderDescription = styled.p`
    margin-top: 8px;
    padding-bottom: 16px;
    color: ${Colors.secondary};
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
