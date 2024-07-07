import axios from "axios";
import { ResponsePeople, ResponsePeopleMapped } from "./type";

export const getPeople = (): Promise<ResponsePeople[]> => {
  return axios
    .get<ResponsePeople[]>(
      `https://private-9d65b3-tinnova.apiary-mock.com/users`
    )
    .then((result) => result.data)
    .catch();
};
