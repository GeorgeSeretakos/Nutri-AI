"use client";
import {createContext, useContext} from "react";
const LocaleCtx = createContext("el");
export function LocaleProvider({locale, children}) {
  return <LocaleCtx.Provider value={locale}>{children}</LocaleCtx.Provider>;
}
export function useLocale() { return useContext(LocaleCtx); }
