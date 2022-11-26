import { createContext, Dispatch, SetStateAction } from 'react';

export type iThemeProps = {
  data: string;
  icon: string;
  content: string;
};

export const themeDefaultValue: iThemeProps = {
  data: '',
  icon: 'bi bi-cloud-sun-fill',
  content: 'padrão'
};

type iThemeContextType = {
  theme: iThemeProps | null,
  setTheme: Dispatch<SetStateAction<iThemeProps | null>>
};

const themeContextState: iThemeContextType = {
  theme: themeDefaultValue,
  setTheme: () => themeDefaultValue
};

export const ThemeContext = createContext<iThemeContextType>(themeContextState);
