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
import { ResponsePeopleMapped } from "@/app/service/type";
import { MdModeEdit, MdDelete } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import clsx from "clsx";
import { useEffect, useState } from "react";

interface MainFormProps {
  item?: ResponsePeopleMapped;
}

export const MainForm = ({ item }: MainFormProps) => {
  const {
    handleSubmit,
    setValue,
    register,
    formState: { errors },
  } = useForm<People>();
  const [edit, setEdit] = useState(true);

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

  const backgroundClassName = clsx(
    style.mainForm__background,
    item && style.item__background
  );

  useEffect(() => {
    if (item) {
      setValue("name", item.name);
      setValue("email", item.email);
      setValue("cpf", item.cpf);
      setValue("phoneNumber", item.phone);
    }
  }, [item, setValue]);

  return (
    <div className={backgroundClassName}>
      <div className={style.mainForm__container}>
        <div className={style.mainForm__title} title={item && item.name}>
          {item ? item.name : "Cadastro de pessoas"}
        </div>
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
            defaultValue={item ? item.name : ""}
            disabled={item && edit}
          />
          <Input
            {...register("email", {
              required: "Este campo é obrigatório",
              validate: (value) => isValidEmail(value) || "Email inválido",
            })}
            errorMessage={errors.email && errors.email.message}
            label="E-mail"
            defaultValue={item ? item.email : ""}
            disabled={item && edit}
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
            defaultValue={item ? item.cpf : ""}
            disabled={item && edit}
          />
          <Input
            {...register("phoneNumber", {
              required: "Este campo é obrigatório",
              validate: (value) =>
                value.length < 14 ? "Número inválido" : true,
            })}
            errorMessage={errors.phoneNumber && errors.phoneNumber.message}
            label="Telefone"
            onChange={handlePhoneNumberChange}
            maxLength={15}
            defaultValue={item ? item.phone : ""}
            disabled={item && edit}
          />
          {item ? (
            <div className={style.update__footer}>
              <MdDelete className={clsx(style.icons, style.delete__icon)} />
              <div>
                <FaSave
                  className={clsx(
                    style.icons,
                    style.save__icon,
                    edit && style.disabled
                  )}
                  onClick={handleSubmit(onSubmit)}
                />
                <MdModeEdit
                  className={clsx(style.icons, style.edit__icon)}
                  onClick={() => setEdit(!edit)}
                />
              </div>
            </div>
          ) : (
            <div className={style.register__footer}>
              <Button fullWidth type="submit">
                Cadastrar
              </Button>
              <Button fullWidth color="dark">
                Lista de Pessoas
              </Button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
