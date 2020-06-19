import React from 'react';
import styled from 'styled-components';
import LanguageSelector from '../LanguageSelector';
import Colors from '../../constants/Colors';
import { ReactComponent as HambergerIcon } from 'icons/mobile-hamburger.svg';

const HeaderContainer = styled.div`
    height: 56px;
    padding: 0 10px;
    background-color: ${Colors.primary};
    display: flex;
    justify-content: space-between;
`;

const HambergerButton = styled.button`
    margin: auto 0;
    width: 36px;
    height: 36px;
    color: ${Colors.white};
    border: none;
    background-color: transparent;
`;

interface HeaderProps {
    lang: string | undefined;
    handleChangeLanguage: ((selected: string) => void) | undefined;
}

const Header = (props: HeaderProps) => {
    return (
        <HeaderContainer>
            <HambergerButton>
                <HambergerIcon/>
            </HambergerButton>
            <LanguageSelector
                lang={props.lang}
                handleChangeLanguage={props.handleChangeLanguage} />
        </HeaderContainer>
    );
}

export default Header;