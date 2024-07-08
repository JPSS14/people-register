import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Modal } from "./Modal";

describe("Modal component", () => {
  it("a correct Modal render", () => {
    render(<Modal isOpen={true}>teste</Modal>);

    const modalTest = screen.getByText(/teste/i);
    expect(modalTest).toBeInTheDocument();
  });
});
