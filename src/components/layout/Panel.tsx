import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Colors from 'constants/Colors';
import Shadows from 'constants/Shadows';

const StyledPannel = styled.div`
    width: 100%;
    padding: 16px;
    margin-bottom: 16px;
    border-radius: 4px;
    box-shadow: ${Shadows.panel};
    background-color: ${Colors.white};
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