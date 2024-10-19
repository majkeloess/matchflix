import { render, screen } from "@testing-library/react";
import SwipeArea from "../../../components/SwipeArea";
import { HashRouter } from "react-router-dom";

describe("SwipeArea component", () => {
  it("should render MoviesImage component", () => {
    render(<SwipeArea />, { wrapper: HashRouter });
    expect(screen.getByTestId("movies-image")).toBeInTheDocument();
  });

  it("should render MoviesText component", () => {
    render(<SwipeArea />, { wrapper: HashRouter });
    expect(screen.getByTestId("movies-text")).toBeInTheDocument();
  });

  it("should render MoviesControls component", () => {
    render(<SwipeArea />, { wrapper: HashRouter });
    expect(screen.getByTestId("movies-controls")).toBeInTheDocument();
  });
});
