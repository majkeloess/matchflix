import { render, screen } from "@testing-library/react";
import LandingPage from "../../../pages/LandingPage";
import { TEXT } from "../../../constants/text";

describe("LandingPage component", () => {
  it("should render gradient part of text correctly", () => {
    render(<LandingPage />);
    expect(
      screen.getByText((content) => content.includes(TEXT.landingBigGradient))
    ).toBeInTheDocument();
  });

  it("should render biggest part of text correctly", () => {
    render(<LandingPage />);
    expect(
      screen.getByText((content) => content.includes(TEXT.landingBigPart1))
    ).toBeInTheDocument();
  });

  it("should render smaller part of text correctly", () => {
    render(<LandingPage />);
    expect(
      screen.getByText((content) => content.includes(TEXT.landingSmaller))
    ).toBeInTheDocument();
  });
});
