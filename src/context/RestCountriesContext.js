import { createContext, useState } from "react";

const RestCountriesContext = createContext();

export const RestCountriesProvider = ({ children }) => {
  const [mode, setMode] = useState(false);
  return (
    <RestCountriesContext.Provider value={{ mode, setMode }}>
      {children}
    </RestCountriesContext.Provider>
  );
};

export default RestCountriesContext;
