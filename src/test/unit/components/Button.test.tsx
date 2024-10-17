import { render, screen } from "@testing-library/react";
import Button from "../../../components/Button";
import { HashRouter } from "react-router-dom";

describe("Button component", () => {
  it("should render button with the correct string", () => {
    render(<Button text="Swipe!" redirect="/movies" />, {
      wrapper: HashRouter,
    });
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/swipe/i);
  });
});
