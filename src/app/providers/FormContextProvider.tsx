import { createContext } from "react";
import { IContext } from "../../shared/types";

interface AppContextProviderProps {
    children: React.ReactNode;
    values: IContext;
}

export const FormContext = createContext<IContext | null>(null);

export const FormContextProvider = ({children, values}: AppContextProviderProps) => {
  return (
    <FormContext.Provider value={values}>
      {children}
    </FormContext.Provider>
  );
};
