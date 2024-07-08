import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Input } from "./Input";

describe("Input component", () => {
  it("a correct input render", () => {
    render(<Input label="Teste" />);

    const inputTest = screen.getByText("Teste");
    expect(inputTest).toBeInTheDocument();
  });

  it("a correct input render with error message", () => {
    render(<Input label="Teste" errorMessage="teste de erro" />);

    const inputTest = screen.getByText("teste de erro");
    expect(inputTest).toBeInTheDocument();
  });
});
