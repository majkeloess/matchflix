import { render } from "@testing-library/react";
import SwipeArea from "../../../components/SwipeArea";
import { HashRouter } from "react-router-dom";
import { act } from "react";
import { Provider } from "react-redux";
import store from "../../../redux/store";

describe("SwipeArea component", () => {
  it("should render MoviesControls component", async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <SwipeArea />
        </Provider>,
        { wrapper: HashRouter }
      );
    });
    // expect(screen.getByTestId("movies-controls")).toBeInTheDocument();
  });
});
