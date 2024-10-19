import { render, screen, fireEvent } from "@testing-library/react";
import MoviesImage from "../../../components/MoviesImage";
import { mockData } from "../../../constants/exampleData";

describe("MoviesImage component", () => {
  it("should open modal when the image is clicked", () => {
    render(<MoviesImage movie={mockData} />);

    const img = screen.getByTestId("movies-image");
    fireEvent.click(img);
  });
});
