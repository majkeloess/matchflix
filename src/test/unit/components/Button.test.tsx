import { render, screen } from "@testing-library/react";
import Button from "../../../components/Button";

describe("Button component", () => {
  it("should render button with the correct string", () => {
    render(<Button text="Swipe!" />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/swipe/i);
  });
});
