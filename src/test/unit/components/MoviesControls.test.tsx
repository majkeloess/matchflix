import { render, screen } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import GenreSelect from "../../../components/GenreSelect";

describe("MoviesControls component", () => {
  it("should render GenreSelect", () => {
    render(<GenreSelect />, { wrapper: HashRouter });
    expect(screen.getByTestId("select")).toBeInTheDocument();
  });
});
