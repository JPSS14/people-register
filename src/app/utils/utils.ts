export const isValidCPF = (cpf: string) => {
  if (typeof cpf !== "string") return false;
  cpf = cpf.replace(/[\s.-]*/gim, "");
  if (
    !cpf ||
    cpf.length != 11 ||
    cpf == "00000000000" ||
    cpf == "11111111111" ||
    cpf == "22222222222" ||
    cpf == "33333333333" ||
    cpf == "44444444444" ||
    cpf == "55555555555" ||
    cpf == "66666666666" ||
    cpf == "77777777777" ||
    cpf == "88888888888" ||
    cpf == "99999999999"
  ) {
    return false;
  }
  let sum = 0;
  let rest;
  for (let i = 1; i <= 9; i++)
    sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
  rest = (sum * 10) % 11;
  if (rest == 10 || rest == 11) rest = 0;
  if (rest != parseInt(cpf.substring(9, 10))) return false;
  sum = 0;
  for (let i = 1; i <= 10; i++)
    sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
  rest = (sum * 10) % 11;
  if (rest == 10 || rest == 11) rest = 0;
  if (rest != parseInt(cpf.substring(10, 11))) return false;
  return true;
};

export const maskCPF = (cpf: string) => {
  cpf = cpf.replace(/\D/g, "");
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  return cpf;
};

export const maskPhoneNumber = (phoneNumber: string) => {
  phoneNumber = phoneNumber.replace(/\D/g, "");
  phoneNumber = phoneNumber.replace(/(\d{2})(\d)/, "($1) $2");
  phoneNumber = phoneNumber.replace(/(\d{5})(\d)/, "$1-$2");
  return phoneNumber;
};

export const isValidEmail = (email: string) => {
  const emailRegex =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;
  return emailRegex.test(email);
};

export const unmask = (value: string) => {
  return value.replace(/[^\d]/g, "");
};

export const getLocalStorage = (key: string) => {
  const data = window.localStorage.getItem(key);

  return JSON.parse(data!);
};

export const setLocalStorage = (key: string, value: unknown) => {
  const data = JSON.stringify(value);

  return window.localStorage.setItem(key, data);
};

export const removeLocalStore = (key: string) => {
  return window.localStorage.removeItem(key);
};
