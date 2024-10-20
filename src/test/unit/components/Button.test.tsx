import { render, screen } from "@testing-library/react";
import Button from "../../../components/Button";
import { HashRouter } from "react-router-dom";
import MoviesContextProvider from "../../../context/MoviesContextProvider";

describe("Button component", () => {
  it("should render button with the correct string", () => {
    render(
      <MoviesContextProvider>
        <Button text="Swipe!" redirect="/movies" />
      </MoviesContextProvider>,
      {
        wrapper: HashRouter,
      }
    );
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/swipe/i);
  });
});
