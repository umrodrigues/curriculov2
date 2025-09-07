import { createContext, useContext, ReactNode } from 'react';

interface AppContextType {
  MsDeboasVindas?: string;
  time?: string;
  hora?: number;
}

const AppContext = createContext<AppContextType>({});

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const value: AppContextType = {
    MsDeboasVindas: "Bem vindo"
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export default AppContext;
