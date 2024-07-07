import { createContext, useContext, useState } from "react";
import { ResponsePeopleMapped } from "../service/type";

type PeopleContext = {
  peopleList: ResponsePeopleMapped[];
  setPeopleList: (value: ResponsePeopleMapped[]) => void;
};

export const PeopleContext = createContext({} as PeopleContext);

type PeopleContextProviderProps = {
  children: React.ReactNode;
};

export const PeopleContextProvider = ({
  children,
}: PeopleContextProviderProps) => {
  const [peopleList, setPeopleList] = useState<ResponsePeopleMapped[]>([]);

  return (
    <PeopleContext.Provider
      value={{
        peopleList,
        setPeopleList,
      }}
    >
      {children}
    </PeopleContext.Provider>
  );
};

export const usePeopleContext = () => {
  return useContext(PeopleContext);
};
