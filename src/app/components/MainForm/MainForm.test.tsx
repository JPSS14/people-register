import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MainForm } from "./MainForm";

describe("MainForm component", () => {
  it("a correct MainForm render", () => {
    render(<MainForm />);

    const mainFormTest = screen.getByText(/Cadastrar/);
    expect(mainFormTest).toBeInTheDocument();
  });

  it("a correct MainForm render with item", () => {
    const item = {
      name: "João",
      email: "joao@joao.com",
      cpf: "11759907014",
      phone: "21154489569",
    };

    render(<MainForm item={item} />);

    const mainFormTest = screen.getByText(/João/);
    expect(mainFormTest).toBeInTheDocument();
  });
});
