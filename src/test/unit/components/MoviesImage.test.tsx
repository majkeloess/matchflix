import { render, screen, fireEvent } from "@testing-library/react";
import MoviesImage from "../../../components/MoviesImage";
import { mockData } from "../../../constants/exampleData";
import MoviesContextProvider from "../../../context/MoviesContextProvider";

describe("MoviesImage component", () => {
  it("should open modal when the image is clicked", () => {
    render(
      <MoviesContextProvider>
        <MoviesImage movie={mockData} />
      </MoviesContextProvider>
    );

    const img = screen.getByTestId("movies-image");
    fireEvent.click(img);
  });
});
