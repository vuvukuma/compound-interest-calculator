import React from 'react';
import styled from 'styled-components';
import { Select } from '@shopify/polaris';
import { useIntl, defineMessages } from 'react-intl';

const languageMessages = defineMessages({
    ko: {
        id: 'language.ko',
        defaultMessage: '한국어',
    },
    en: {
        id: 'language.en',
        defaultMessage: '영어',
    },
});

const SelectContainer = styled.div`
    margin: auto 0 auto 16px;
`

interface LanguageSelectorProps {
    lang: string | undefined;
    handleChangeLanguage: ((selected: string) => void) | undefined;
}

const LanguageSelector = (props: LanguageSelectorProps) => {
    const intl = useIntl();
    const LanguageOptions = [
        { label: intl.formatMessage(languageMessages.en), value: 'en' },
        { label: intl.formatMessage(languageMessages.ko), value: 'ko' },
    ]

    return (
        <SelectContainer>
            <Select
                label=''
                name="language"
                options={LanguageOptions}
                value={props.lang}
                onChange={props.handleChangeLanguage} />
        </SelectContainer>
    )
}

export default LanguageSelector;