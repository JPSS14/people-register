import { responsePeopleMapper } from "@/app/service/people.mapper";
import { MainForm } from "../MainForm";
import { usePeopleContext } from "@/app/contexts/people-context";
import style from "./PeopleList.module.scss";

export const PeopleList = () => {
  const { peopleList } = usePeopleContext();
  return (
    <section className={style.peopleList}>
      <header className={style.peopleList__header}>
        <h1>Pessoas cadastradas</h1>
      </header>
      {responsePeopleMapper(peopleList).map((item, index) => (
        <MainForm item={item} key={index} />
      ))}
    </section>
  );
};
