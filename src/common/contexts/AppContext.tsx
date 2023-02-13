import React, { createContext, useState } from "react";

interface IProps {
  children: React.ReactNode;
}
interface IAppContext {
  url: string;
  videoProvider: string;
  showPlayer: boolean;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  setVideoProvider: React.Dispatch<React.SetStateAction<string>>;
  setShowPlayer: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppContextProvider = ({ children }: IProps) => {
  const [url, setUrl] = useState("");
  const [videoProvider, setVideoProvider] = useState("");
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <AppContext.Provider
      value={{
        url,
        showPlayer,
        videoProvider,
        setUrl,
        setShowPlayer,
        setVideoProvider,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
