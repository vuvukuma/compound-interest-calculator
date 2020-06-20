import React from 'react';
import styled from 'styled-components';
import { IntlProvider } from 'react-intl';
import Header from 'components/layout/Header';
import Calculator from 'components/calculator/Calculator';
import Messages from 'locales';

const Container = styled.div`
  margin: 0 auto;
  padding: 12px;
  max-width: 728px;
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
      <Header 
          lang={lang}
          handleChangeLanguage={handleChangeLanguage} />
      <Container>
        <Calculator />
      </Container>
    </IntlProvider>
  )
}

export default App;
