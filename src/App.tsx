import React, { useState } from "react";
import { type Locale, translate, initTranslation } from "./utils/translate";

const App: React.FC<{ language: string }> = ({ language }) => {
  const [locale, setLocale] = useState(language);

  initTranslation(locale);

  return (
    <div className="App">
      <div className="layout-content">
        <div className="i18n-toggle">
          <select
            value={locale}
            onChange={(e) => {
              const nLocale = e.currentTarget.value as Locale;
              setLocale(nLocale);
            }}
          >
            <option value="zh">zh</option>
            <option value="en">en</option>
          </select>
        </div>
        <div className="content-block">
          <h2>{translate("wiki.i18n_name")}</h2>
          <p>{translate("wiki.i18n_definition1")}</p>
          <p>{translate("wiki.i18n_definition2")}</p>
          <p>{translate("wiki.i18n_definition3")}</p>
        </div>

        <div className="content-block">
          <h2>{translate("wiki.i18n_frontend_library")}</h2>
          <p>Node-Polyglot</p>
          <p>React-i18n</p>
        </div>
      </div>
    </div>
  );
};

export default App;
