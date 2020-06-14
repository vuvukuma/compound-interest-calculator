import React from 'react';
import { IntlProvider } from 'react-intl';
import Calculator from './components/Calculator';
import Messages from './locales';

function App() {
  const [lang, setLang] = React.useState(navigator.language.slice(0, 2));

  return (
    <IntlProvider 
      locale={lang}
      messages={Messages[lang]}>
      <Calculator/>
    </IntlProvider>
  )
}

export default App;
