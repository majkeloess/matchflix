import { render, screen } from "@testing-library/react";
import SwipeArea from "../../../components/SwipeArea";
import { HashRouter } from "react-router-dom";
import MoviesContextProvider from "../../../context/MoviesContextProvider";
import { act } from "react";

describe("SwipeArea component", () => {
  it("should render MoviesControls component", async () => {
    await act(async () => {
      render(
        <MoviesContextProvider>
          <SwipeArea />
        </MoviesContextProvider>,
        { wrapper: HashRouter }
      );
    });
    expect(screen.getByTestId("movies-controls")).toBeInTheDocument();
  });
});
