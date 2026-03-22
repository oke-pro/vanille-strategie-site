"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

interface ConversionContextType {
  exitPopupOpen: boolean;
  setExitPopupOpen: (open: boolean) => void;
  formSubmitted: boolean;
  markFormSubmitted: () => void;
}

const ConversionContext = createContext<ConversionContextType>({
  exitPopupOpen: false,
  setExitPopupOpen: () => {},
  formSubmitted: false,
  markFormSubmitted: () => {},
});

export function ConversionProvider({ children }: { children: ReactNode }) {
  const [exitPopupOpen, setExitPopupOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const markFormSubmitted = useCallback(() => {
    setFormSubmitted(true);
    if (typeof window !== "undefined") {
      localStorage.setItem("vs_form_submitted", "1");
    }
  }, []);

  return (
    <ConversionContext.Provider
      value={{ exitPopupOpen, setExitPopupOpen, formSubmitted, markFormSubmitted }}
    >
      {children}
    </ConversionContext.Provider>
  );
}

export function useConversion() {
  return useContext(ConversionContext);
}
