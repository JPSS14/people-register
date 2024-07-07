"use client";
import { Header } from "./components";
import { PeopleContextProvider } from "./contexts/people-context";

export default function HomeTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <PeopleContextProvider>
        <Header />
        <div>{children}</div>
      </PeopleContextProvider>
    </div>
  );
}
