import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import PropTypes from "prop-types";
import Spanish from "../../translations/en-es/index.json";
import English from "../../translations/en-us/index.json";

export const Context = React.createContext();

const LanguageWrapper = (props) => {
  //HOC with context to provide traslations over components
  const [locale, setLocale] = useState("en-es");
  const [messages, setMessages] = useState(Spanish);

  //function to translate
  const changeLanguage = (e) => {
    const newLocale = e.target.getAttribute("value");
    setLocale(newLocale);
    newLocale === "en-us" ? setMessages(English) : setMessages(Spanish);
  };
  return (
    <Context.Provider value={{ changeLanguage }}>
      <IntlProvider messages={messages} locale={locale}>
        {props.children}
      </IntlProvider>
    </Context.Provider>
  );
};

LanguageWrapper.propTypes = {
  children: PropTypes.object,
};

export default LanguageWrapper;
