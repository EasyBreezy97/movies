import React, { createContext, useState } from "react";

interface IProps {
  children: React.ReactNode;
}
interface IAppContext {
  url: string;
  showPlayer: boolean;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  setShowPlayer: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = createContext<IAppContext | null>(null);

export const AppContextProvider = ({ children }: IProps) => {
  const [url, setUrl] = useState("");
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <AppContext.Provider value={{ url, showPlayer, setUrl, setShowPlayer }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
