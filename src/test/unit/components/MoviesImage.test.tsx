import { render, screen, fireEvent } from "@testing-library/react";
import MoviesImage from "../../../components/MoviesImage";
describe("MoviesImage component", () => {
  it("should open modal when the image is clicked", () => {
    render(<MoviesImage />);

    const img = screen.getByTestId("movies-image");
    fireEvent.click(img);
  });
});
