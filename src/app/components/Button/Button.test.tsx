import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button component", () => {
  it("a correct render", () => {
    render(<Button>Teste</Button>);

    const buttonTest = screen.getByText("Teste");
    expect(buttonTest).toBeInTheDocument();
  });

  it("a correct disabled render", () => {
    render(<Button disabled>Teste</Button>);

    const buttonTest = screen.getByText("Teste");
    expect(buttonTest).toBeInTheDocument();
  });

  it("a correct fullwidth render", () => {
    render(<Button fullWidth>Teste</Button>);

    const buttonTest = screen.getByText("Teste");
    expect(buttonTest).toBeInTheDocument();
  });
});
