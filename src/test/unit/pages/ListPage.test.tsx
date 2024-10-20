import { render, screen } from "@testing-library/react";
import ListPage from "../../../pages/ListPage";
import { HashRouter } from "react-router-dom";
import { TEXT } from "../../../constants/text";
import MoviesContextProvider from "../../../context/MoviesContextProvider";

describe("ListPage component", () => {
  it("should render the text correctly", () => {
    render(
      <MoviesContextProvider>
        <ListPage />
      </MoviesContextProvider>,
      { wrapper: HashRouter }
    );

    expect(
      screen.getByText((content) => content.includes(TEXT.listMain))
    ).toBeInTheDocument();
  });
});
