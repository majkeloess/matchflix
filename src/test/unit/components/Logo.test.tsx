import { render, screen } from "@testing-library/react";
import Logo from "../../../components/Logo";
import { TEXT } from "../../../constants/text";

describe("Logo component", () => {
  it("should render MatchflixLogoSvg component correctly", () => {
    render(<Logo />);
    expect(screen.getByTestId("matchflix-logo-svg")).toBeInTheDocument();
  });

  it("should render Logo text correctly", () => {
    render(<Logo />);
    expect(
      screen.getByText((content) => content.includes(TEXT.appName))
    ).toBeInTheDocument();
  });
});
