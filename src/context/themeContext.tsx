import React, { useContext, createContext, useState, ReactNode } from 'react';

interface ThemeContextType {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const CustomThemeContext = createContext<ThemeContextType | null>(null);
interface ThemeProviderProps {
  children: ReactNode;
}

export function CustomThemeProvider({ children }: ThemeProviderProps): ReactNode {
  const [theme, setTheme] = useState('blue');
  return (
    <CustomThemeContext.Provider value={{ theme, setTheme }}>
      {
        children
      }
    </CustomThemeContext.Provider>
  )
}


export const useTheme = (): ThemeContextType => {
  const context = useContext(CustomThemeContext);
  if (context === null) {
    throw new Error("useTheme must be used within a ThemeProvider.");
  }
  return context;
};
