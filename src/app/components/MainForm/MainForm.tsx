"use client";
import { Button } from "../Button";
import { Input } from "../Input";
import { useForm, SubmitHandler } from "react-hook-form";
import style from "./MainForm.module.scss";
import { People } from "@/app/types";
import {
  isValidCPF,
  isValidEmail,
  maskCPF,
  maskPhoneNumber,
} from "@/app/utils/utils";

export const MainForm = () => {
  const {
    handleSubmit,
    setValue,
    register,
    formState: { errors },
  } = useForm<People>();

  const onSubmit: SubmitHandler<People> = (data) => {
    console.log("data: ", data);
  };

  const handleCPFChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const formattedCPF = maskCPF(value);
    setValue("cpf", formattedCPF, { shouldValidate: true });
  };

  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    const formattedPhoneNumber = maskPhoneNumber(value);
    setValue("phoneNumber", formattedPhoneNumber, { shouldValidate: true });
  };

  return (
    <div className={style.mainForm__background}>
      <div className={style.mainForm__container}>
        <span className={style.mainForm__title}>Cadastro de pessoas</span>
        <form className={style.mainForm} onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register("name", {
              required: "Este campo é obrigatório",
              validate: (value) =>
                value.length > 3
                  ? true
                  : "Campo deve conter 3 caracteres ou mais",
            })}
            errorMessage={errors.name && `${errors.name.message}`}
            label="Nome completo (sem abreviações)"
          />
          <Input
            {...register("email", {
              required: "Este campo é obrigatório",
              validate: (value) => isValidEmail(value) || "Email inválido",
            })}
            errorMessage={errors.email && errors.email.message}
            label="E-mail"
          />
          <Input
            {...register("cpf", {
              required: "Este campo é obrigatório",
              validate: (value) => isValidCPF(value) || "CPF inválido",
            })}
            maxLength={14}
            errorMessage={errors.cpf && `${errors.cpf.message}`}
            label="CPF"
            onChange={handleCPFChange}
          />
          <Input
            {...register("phoneNumber", {
              required: "Este campo é obrigatório",
              validate: (value) =>
                value.length < 15 ? "Número inválido" : true,
            })}
            errorMessage={errors.phoneNumber && errors.phoneNumber.message}
            label="Telefone"
            onChange={handlePhoneNumberChange}
            maxLength={15}
          />
          <Button fullWidth type="submit">
            Cadastrar
          </Button>
        </form>
        <Button fullWidth color="dark">
          Lista de Pessoas
        </Button>
      </div>
    </div>
  );
};
