import { maskCPF, maskPhoneNumber } from "../utils/utils";
import { ResponsePeople, ResponsePeopleMapped } from "./type";

export const responsePeopleMapper = (
  people: ResponsePeople[]
): ResponsePeopleMapped[] => {
  return people.map((item) => ({
    name: item.name,
    cpf: maskCPF(item.cpf),
    email: item.email,
    phone: maskPhoneNumber(item.phone),
  }));
};
