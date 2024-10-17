import { render, screen } from "@testing-library/react";
import LandingGrid from "../../../components/LandingGrid";
describe("LandingGrid component", () => {
  it("should render all grids elements correctly", () => {
    render(<LandingGrid />);

    for (let i = 1; i < 5; i++) {
      expect(screen.getByTestId(`landing-grid-el-${i}`)).toBeInTheDocument();
    }
  });

  it("should render all images with correct src and alt", () => {
    render(<LandingGrid />);

    for (let i = 1; i < 5; i++) {
      const img = screen.getByAltText(`ps${i}`);

      expect(img).toHaveAttribute(
        "src",
        expect.stringContaining("test-file-stub")
      );
    }
  });
});
