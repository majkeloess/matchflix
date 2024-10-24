import { render, screen } from "@testing-library/react";
import { mockData } from "../../../constants/exampleData";
import MoviesText from "../../../components/MoviesText";
import { Provider } from "react-redux";
import store from "../../../redux/store";
describe("MoviesText component", () => {
  it("should render movie title correctly", () => {
    render(
      <Provider store={store}>
        <MoviesText movie={mockData} />
      </Provider>
    );

    expect(
      screen.getByText((c) => c.includes(mockData.title))
    ).toBeInTheDocument();
  });
  it("should render genre title correctly", () => {
    render(
      <Provider store={store}>
        <MoviesText movie={mockData} />
      </Provider>
    );
    expect(
      screen.getByText((c) => c.includes(mockData.genre))
    ).toBeInTheDocument();
  });
  it("should render movie rating correctly", () => {
    render(
      <Provider store={store}>
        <MoviesText movie={mockData} />
      </Provider>
    );
    expect(
      screen.getByText((c) => c.includes(mockData.rating + "/10"))
    ).toBeInTheDocument();
  });
});
