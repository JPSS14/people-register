import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("Header component", () => {
  it("renders the header with the correct logo", () => {
    render(<Header />);

    const logo = screen.getByAltText("People Register logo");
    expect(logo).toBeInTheDocument();

    // need use expect.stringContaining() because the Image Next optimization change the src
    expect(logo).toHaveAttribute(
      "src",
      expect.stringContaining("people-register-logo.svg")
    );
  });
});
