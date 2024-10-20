import { render, screen } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import GenreSelect from "../../../components/GenreSelect";
import MoviesContextProvider from "../../../context/MoviesContextProvider";

describe("MoviesControls component", () => {
  it("should render GenreSelect", () => {
    render(
      <MoviesContextProvider>
        <GenreSelect />
      </MoviesContextProvider>,
      { wrapper: HashRouter }
    );
    expect(screen.getByTestId("select")).toBeInTheDocument();
  });
});
