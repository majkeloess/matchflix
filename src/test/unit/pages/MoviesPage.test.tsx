import { render, screen } from "@testing-library/react";
import MoviesPage from "../../../pages/MoviesPage";
import { HashRouter } from "react-router-dom";
import { TEXT } from "../../../constants/text";

describe("MoviesPage component", () => {
  it("should render your watch list text correctly", () => {
    render(<MoviesPage />, { wrapper: HashRouter });
    expect(
      screen.getByText((c) => c.includes(TEXT.listMain))
    ).toBeInTheDocument();
  });

  it("should render SwipeArea component", () => {
    render(<MoviesPage />, { wrapper: HashRouter });
    expect(screen.getByTestId("swipe-area")).toBeInTheDocument();
  });

  it("should render ListList component", () => {
    render(<MoviesPage />, { wrapper: HashRouter });
    expect(screen.getByTestId("list")).toBeInTheDocument();
  });
});
