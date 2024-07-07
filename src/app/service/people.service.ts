import axios from "axios";
import { ResponsePeople, ResponsePeopleMapped } from "./type";
import { responsePeopleMapper } from "./people.mapper";

export const getPeople = (): Promise<ResponsePeopleMapped[]> => {
  return axios
    .get<ResponsePeople[]>(
      `https://private-9d65b3-tinnova.apiary-mock.com/users`
    )
    .then((result) => responsePeopleMapper(result.data))
    .catch();
};
