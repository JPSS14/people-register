import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { PeopleList } from "./PeopleList";
import { PeopleContextProvider } from "@/app/contexts/people-context";

describe("PeopleList component", () => {
  it("a correct render", () => {
    render(
      <PeopleContextProvider>
        <PeopleList />
      </PeopleContextProvider>
    );

    const title = screen.getByText(/Pessoas Cadastradas/i);
    expect(title).toBeInTheDocument();
  });
});
