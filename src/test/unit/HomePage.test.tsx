import { render, screen } from "@testing-library/react";
import HomePage from "../../pages/HomePage";

test("renders HomePage test", () => {
  render(<HomePage />);
  const textElement = screen.getByText(/matchflix/i);
  expect(textElement).toBeInTheDocument();
});
