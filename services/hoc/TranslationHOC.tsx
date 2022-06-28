import React from "react";
import { useTranslation } from "react-i18next";

const withTranslationHOC = (Component: any, translationKey: string) => {
    return (props: any) => {
        const { t } = useTranslation(translationKey);
        return <Component t={t} {...props} />;
  };
}

export default withTranslationHOC