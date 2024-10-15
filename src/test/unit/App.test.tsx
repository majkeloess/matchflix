import { render, screen } from "@testing-library/react";
import App from "../../App";

test("renders matchflix test", () => {
  render(<App />);
  const textElement = screen.getByText(/matchflix/i);
  expect(textElement).toBeInTheDocument();
});
