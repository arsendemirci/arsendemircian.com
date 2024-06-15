// import { useContext } from 'react';
// import AppContext from '@/context/contextProvider';
// import { AppContextType, AppContextProviderType } from '@types';

// const initialContext: AppContextType = {
//   pageTitle: 'Home',
//   currentPath: '/home',
// };
// const useAppContext = (
//   initialValue = initialContext,
// ): {
//   appContext: AppContextType;
//   setContext: (value: AppContextType) => void;
// } => {
//   let contextObj = useContext(AppContext);
//   const setContext = (contextValue: AppContextType) => {
//     contextObj = { ...contextValue };
//   };
//   console.log('inside hook', contextObj);
//   return { appContext: { ...contextObj }, setContext };
// };

// export default useAppContext;
