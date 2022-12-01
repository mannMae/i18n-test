import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "../lang/i18n";

import {
  initialize,
  t,
  currentLanguage,
  setTranslationLanguage,
} from "csv-translations";

export const Translation = () => {
  const { t } = useTranslation();
  const handleButtonClick = (lang) => {
    i18next.changeLanguage(lang);
  };
  return (
    <div>
      <button onClick={() => handleButtonClick("ko")}>KO</button>
      <button onClick={() => handleButtonClick("en")}>EN</button>
      <p>{t("hello")}</p>
      <p>{t("name")}</p>
    </div>
  );
};
