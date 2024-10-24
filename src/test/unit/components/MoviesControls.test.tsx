import { render, screen } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import GenreSelect from "../../../components/GenreSelect";
import store from "../../../redux/store";
import { Provider } from "react-redux";
describe("MoviesControls component", () => {
  it("should render GenreSelect", () => {
    render(
      <Provider store={store}>
        <GenreSelect />
      </Provider>,
      { wrapper: HashRouter }
    );
    expect(screen.getByTestId("select")).toBeInTheDocument();
  });
});
