import React from 'react';
import styled from 'styled-components';
import { IntlProvider } from 'react-intl';
import Calculator from './components/Calculator';
import LanguageSelector from './components/LanguageSelector';
import Messages from './locales';

const Container = styled.div`
  margin: 0 auto;
  padding: 12px;
  max-width: 400px;
  text-align: center;
`;

function App() {
  const [lang, setLang] = React.useState(navigator.language.slice(0, 2));
  const handleChangeLanguage = (lang: string) => {
    setLang(lang);
  }

  return (
    <IntlProvider
      locale={lang}
      messages={Messages[lang]}>
      <Container>
        <Calculator />
        <LanguageSelector
          lang={lang}
          handleChangeLanguage={handleChangeLanguage} />
      
      </Container>
    </IntlProvider>
  )
}

export default App;
