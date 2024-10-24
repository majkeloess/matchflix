import { render, screen } from "@testing-library/react";
import MoviesPage from "../../../pages/MoviesPage";
import { HashRouter } from "react-router-dom";
import { TEXT } from "../../../constants/text";
import { act } from "react";
import { Provider } from "react-redux";
import store from "../../../redux/store";

describe("MoviesPage component", () => {
  it("should render your watch list text correctly", async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <MoviesPage />
        </Provider>,
        { wrapper: HashRouter }
      );
    });
    expect(
      screen.getByText((c) => c.includes(TEXT.listMain))
    ).toBeInTheDocument();
  });

  it("should render SwipeArea component", async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <MoviesPage />
        </Provider>,
        { wrapper: HashRouter }
      );
    });
    expect(screen.getByTestId("swipe-area")).toBeInTheDocument();
  });

  it("should render ListList component", async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <MoviesPage />
        </Provider>,
        { wrapper: HashRouter }
      );
    });
    //expect(screen.getByTestId("list")).toBeInTheDocument();
  });
});
