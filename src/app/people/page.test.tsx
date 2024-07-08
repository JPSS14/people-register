import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import People from "./page";
import { PeopleContextProvider } from "../contexts/people-context";

describe("People page", () => {
  it("a correct people page render", () => {
    render(
      <PeopleContextProvider>
        <People />
      </PeopleContextProvider>
    );

    const pagePeopleTest = screen.getByText(/Resetar/);
    expect(pagePeopleTest).toBeInTheDocument();
  });
});
