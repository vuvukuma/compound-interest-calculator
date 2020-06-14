import React, { useState, useCallback } from 'react';
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
        <Select
            label=''
            name="language"
            options={LanguageOptions}
            value={props.lang}
            onChange={props.handleChangeLanguage} />
    )
}

export default LanguageSelector;