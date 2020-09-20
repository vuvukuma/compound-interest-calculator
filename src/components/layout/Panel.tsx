import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Colors, Shadows } from '../../constants';

const StyledPannel = styled.div`
    width: 344px;
    padding: 16px;
    margin-bottom: 16px;
    border-radius: 4px;
    box-shadow: ${Shadows.panel};
    background-color: ${Colors.white};
    height: 100%;
`;

interface Props {
    children: ReactNode
}

const Panel = ({ children }: Props) => {
    return(
        <StyledPannel>
            { children }
        </StyledPannel>
    )
}

export default Panel;