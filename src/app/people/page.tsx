"use client";
import { PeopleList } from "../components";
import { Button } from "../components/Button";
import { usePeopleContext } from "../contexts/people-context";

export default function People() {
  const { peopleList, handleResetList } = usePeopleContext();
  return (
    <div>
      {peopleList.length && <PeopleList />}
      <div
        style={{ display: "flex", justifyContent: "center", margin: "24px 0" }}
      >
        <Button color="error" onClick={handleResetList}>
          Resetar Lista
        </Button>
      </div>
    </div>
  );
}
