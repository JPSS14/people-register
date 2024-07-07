import { createContext, useContext, useEffect, useState } from "react";
import { ResponsePeopleMapped } from "../service/type";
import { getLocalStorage, setLocalStorage } from "../utils/utils";
import { getPeople } from "../service/people.service";

type PeopleContext = {
  peopleList: ResponsePeopleMapped[];
  setPeopleList: (value: ResponsePeopleMapped[]) => void;
  handleResetList: () => void;
};

export const PeopleContext = createContext({} as PeopleContext);

type PeopleContextProviderProps = {
  children: React.ReactNode;
};

export const PeopleContextProvider = ({
  children,
}: PeopleContextProviderProps) => {
  const [peopleList, setPeopleList] = useState<ResponsePeopleMapped[]>([]);

  useEffect(() => {
    const list = getLocalStorage("peopleList");

    if (list) {
      setPeopleList(list);
    } else {
      getPeople()
        .then((item) => {
          setPeopleList(item);
          setLocalStorage("peopleList", item);
        })
        .catch();
    }
  }, [setPeopleList]);

  const handleResetList = () => {
    getPeople()
      .then((item) => {
        setPeopleList(item);
        setLocalStorage("peopleList", item);
      })
      .catch();
  };

  return (
    <PeopleContext.Provider
      value={{
        peopleList,
        setPeopleList,
        handleResetList,
      }}
    >
      {children}
    </PeopleContext.Provider>
  );
};

export const usePeopleContext = () => {
  return useContext(PeopleContext);
};
