import styled from 'styled-components';
import { Media } from '../../constants';

export const StyledCalculatorContainer = styled.div`
    margin: 0 auto;
    padding: 12px;
    max-width: 728px;
    display: flex;
    flex-direction: column;
    text-align: center;
`;
export const StyledCalculator = styled.div`
    margin: 0 auto;

    ${Media.tablet`
        margin: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    `}
`;
export const StyledCalculatorRow = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    padding-bottom: 24px;
`;
export const StyledCalculatorRowLabel = styled.label`
    padding-bottom: 4px;
`;
export const StyledCalculatorResult = styled(StyledCalculatorContainer)`
    margin: 8px 20px;
`;
export const StyledCalculatorResultTotal = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 600;
    padding-bottom : 8px;
    text-align: left;
    font-size: 16px;
`;
export const StyledCalculatorResultTotalLabel = styled.div`
    font-size: 16px;
    margin-bottom: 12px;
`;
export const StyledCalculatorResultTotalValue = styled.div`
    font-size: 28px;
    line-height: 1.14;
    margin-bottom: 19px;
`;
export const StyledCalculatorResultRow = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom : 8px;
`;