import { render, screen } from "@testing-library/react";
import PageWrapper from "../../../components/PageWrapper";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../redux/store";

describe("PageWrapper component", () => {
  it("should render children correctly", () => {
    render(
      <Provider store={store}>
        <PageWrapper>
          <div data-testid="child">Child</div>
        </PageWrapper>
      </Provider>,
      { wrapper: HashRouter }
    );

    expect(screen.getByTestId("child")).toBeInTheDocument();
    expect(screen.getByText(/child/i)).toBeInTheDocument();
  });
});
