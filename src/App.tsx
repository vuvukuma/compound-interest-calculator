import React from 'react';
import styled from 'styled-components';
import { IntlProvider } from 'react-intl';
import Header from './components/layout/Header';
import Calculator from './components/calculator/Calculator';
import Messages from './locales';
import { Colors } from './constants';

const Container = styled.div`
  height: 100%;
  background-color: ${Colors.background};
`;

function App() {
  const [lang, setLang] = React.useState(navigator.language.slice(0, 2));
  const handleChangeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLang(event.target.value);
  }

  return (
    <Container>
      <IntlProvider 
        locale={lang}
        messages={Messages[lang]}>
        <Header
            lang={lang}
            handleChangeLanguage={handleChangeLanguage} />
        
          <Calculator />
      </IntlProvider>
    </Container>
  )
}

export default App;
