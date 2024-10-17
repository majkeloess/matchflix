import { render, screen } from "@testing-library/react";
import PageWrapper from "../../../components/PageWrapper";

describe("PageWrapper component", () => {
  it("should render children correctly", () => {
    render(
      <PageWrapper>
        <div data-testid="child">Child</div>
      </PageWrapper>
    );

    expect(screen.getByTestId("child")).toBeInTheDocument();
    expect(screen.getByText(/child/i)).toBeInTheDocument();
  });
});
