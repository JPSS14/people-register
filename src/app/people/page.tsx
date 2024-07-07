"use client";
import { PeopleList } from "../components";
import { usePeopleContext } from "../contexts/people-context";

export default function People() {
  const { peopleList } = usePeopleContext();
  return <div>{peopleList.length && <PeopleList />}</div>;
}
