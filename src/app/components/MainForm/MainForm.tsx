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
  setLocalStorage,
  unmask,
} from "@/app/utils/utils";
import { ResponsePeopleMapped } from "@/app/service/type";
import { MdModeEdit, MdDelete } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import clsx from "clsx";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePeopleContext } from "@/app/contexts/people-context";
import ReactLoading from "react-loading";
import { DeleteModal } from "../DeleteModal";

interface MainFormProps {
  item?: ResponsePeopleMapped;
}

export const MainForm = ({ item }: MainFormProps) => {
  const { setPeopleList, peopleList } = usePeopleContext();
  const {
    handleSubmit,
    setValue,
    register,
    reset,
    formState: { errors },
  } = useForm<People>();
  const [edit, setEdit] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const onSubmit: SubmitHandler<People> = (data) => {
    setIsLoading(true);

    const unmaskData = {
      name: data.name,
      cpf: unmask(data.cpf),
      email: data.email,
      phone: unmask(data.phone),
    };

    if (item) {
      const updatedPeopleList = peopleList.map((people) =>
        unmask(people.cpf) === unmask(item.cpf) ? unmaskData : people
      );
      setPeopleList(updatedPeopleList);
      setLocalStorage("peopleList", updatedPeopleList);
    } else {
      setPeopleList([...peopleList, unmaskData]);
      setLocalStorage("peopleList", [...peopleList, unmaskData]);
      reset();
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const handleRemovePerson = (item: ResponsePeopleMapped) => {
    const removedPersonList = peopleList.filter(
      (people) => unmask(item.cpf) !== people.cpf
    );
    setPeopleList(removedPersonList);
    setLocalStorage("peopleList", removedPersonList);
    setDeleteModal(false);
  };

  const handleCPFChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const formattedCPF = maskCPF(value);
    setValue("cpf", formattedCPF, { shouldValidate: true });
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const formattedPhone = maskPhoneNumber(value);
    setValue("phone", formattedPhone, { shouldValidate: true });
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
      setValue("phone", item.phone);
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
            {...register("phone", {
              required: "Este campo é obrigatório",
              validate: (value) =>
                value.length < 14 ? "Número inválido" : true,
            })}
            errorMessage={errors.phone && errors.phone.message}
            label="Telefone"
            onChange={handlePhoneChange}
            maxLength={15}
            defaultValue={item ? item.phone : ""}
            disabled={item && edit}
          />
          {item ? (
            <div className={style.update__footer}>
              <MdDelete
                className={clsx(style.icons, style.delete__icon)}
                onClick={() => setDeleteModal(true)}
              />
              <div className={style.ctaIcon__container}>
                {isLoading && (
                  <ReactLoading
                    type="spin"
                    color="#00c8b3"
                    height={16}
                    width={16}
                    className={style.spin}
                  />
                )}
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
                {isLoading ? (
                  <ReactLoading
                    type="spin"
                    color="#fff"
                    height={16}
                    width={16}
                  />
                ) : (
                  "Cadastrar"
                )}
              </Button>
              <Link href="/people">
                <Button fullWidth color="dark">
                  Lista de Pessoas
                </Button>
              </Link>
            </div>
          )}
        </form>
      </div>
      {item && (
        <DeleteModal
          isOpen={deleteModal}
          onClick={() => handleRemovePerson(item)}
          onCancel={() => setDeleteModal(false)}
        />
      )}
    </div>
  );
};
