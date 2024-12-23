import { render, screen } from "@testing-library/react";
import LandingPage from "../../../pages/LandingPage";
import { TEXT } from "../../../constants/text";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../redux/store";

describe("LandingPage component", () => {
  it("should render Logo component correctly", () => {
    render(
      <Provider store={store}>
        <LandingPage />
      </Provider>,
      { wrapper: HashRouter }
    );
    expect(screen.getByTestId("logo")).toBeInTheDocument();
  });

  it("should render Button component correctly", () => {
    render(
      <Provider store={store}>
        <LandingPage />
      </Provider>,
      { wrapper: HashRouter }
    );
    expect(screen.getByTestId("button")).toBeInTheDocument();
  });

  it("should render LandingGrid component correctly", () => {
    render(
      <Provider store={store}>
        <LandingPage />
      </Provider>,
      { wrapper: HashRouter }
    );
    expect(screen.getByTestId("landing-grid")).toBeInTheDocument();
  });

  it("should render gradient part of text correctly", () => {
    render(
      <Provider store={store}>
        <LandingPage />
      </Provider>,
      { wrapper: HashRouter }
    );
    expect(
      screen.getByText((content) => content.includes(TEXT.landingBigGradient))
    ).toBeInTheDocument();
  });

  it("should render biggest part of text correctly", () => {
    render(<LandingPage />, { wrapper: HashRouter });
    expect(
      screen.getByText((content) => content.includes(TEXT.landingBigPart1))
    ).toBeInTheDocument();
  });

  it("should render smaller part of text correctly", () => {
    render(<LandingPage />, { wrapper: HashRouter });
    expect(
      screen.getByText((content) => content.includes(TEXT.landingSmaller))
    ).toBeInTheDocument();
  });
});
