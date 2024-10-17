import { render, screen } from "@testing-library/react";
import PageWrapper from "../../../components/PageWrapper";
import { HashRouter } from "react-router-dom";

describe("PageWrapper component", () => {
  it("should render children correctly", () => {
    render(
      <PageWrapper>
        <div data-testid="child">Child</div>
      </PageWrapper>,
      { wrapper: HashRouter }
    );

    expect(screen.getByTestId("child")).toBeInTheDocument();
    expect(screen.getByText(/child/i)).toBeInTheDocument();
  });
});
