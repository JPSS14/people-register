import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { DeleteModal } from "./DeleteModal";

describe("DeleteModal component", () => {
  it("a correct DeleteModal render", () => {
    render(
      <DeleteModal isOpen={true} onClick={() => ""} onCancel={() => ""} />
    );

    const deleteModalTest = screen.getByText(/Tem certeza/i);
    expect(deleteModalTest).toBeInTheDocument();
  });
});
