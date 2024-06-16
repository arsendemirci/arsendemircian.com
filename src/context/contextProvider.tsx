'use client';
import { createContext, useState } from 'react';
import { AppContextProviderType } from '@types';

const AppContext = createContext({
  currentPath: '/home',
  setPath: (path: string) => {},
});

const AppContextProvider = ({
  currentPath,
  children,
}: AppContextProviderType) => {
  const [appPath, setPath] = useState<string>(currentPath);

  const context = {
    currentPath: appPath,
    setPath: (path: string) => setPath(path),
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export { AppContextProvider, AppContext };
