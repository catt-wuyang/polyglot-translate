import React, { useEffect, useState } from "react";
import {
  type Locale,
  translate,
  initTranslation,
  POLYGLOT_STORAGE_NAME,
} from "./utils/translate";

const App: React.FC<{ language: string }> = ({ language }) => {
  const [locale, setLocale] = useState(language);

  initTranslation(locale);

  useEffect(() => {
    localStorage.setItem(POLYGLOT_STORAGE_NAME, locale);
  }, [locale]);

  const onSelectLocale = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const targetLocale = e.currentTarget.value as Locale;
    setLocale(targetLocale);
  };

  return (
    <div className="App">
      <div className="layout-content">
        <div className="i18n-toggle">
          <select value={locale} onChange={(e) => onSelectLocale(e)}>
            <option value="zh">中文</option>
            <option value="en">英文</option>
            <option value="ja">日文</option>
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
