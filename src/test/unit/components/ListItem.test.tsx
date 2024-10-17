import { render, screen } from "@testing-library/react";
import ListItem from "../../../components/ListItem";
import { MovieType } from "../../../constants/types";

const mockData: MovieType = {
  id: "2ddd999",
  title: "Inception",
  genre: "Science Fiction",
  imageURL: "test-file-stub",
  summary: "Lorem",
  rating: 1.2,
};

describe("ListItem Component", () => {
  it("should render list item", () => {
    render(<ListItem data={mockData} />);

    expect(screen.getByTestId("list-item")).toBeInTheDocument();
  });

  it("should render movie data correctly", () => {
    render(<ListItem data={mockData} />);

    const titleElement = screen.getByText(/Inception/i);
    expect(titleElement).toBeInTheDocument();

    const genreElement = screen.getByText(/Science Fiction/i);
    expect(genreElement).toBeInTheDocument();

    const img = screen.getByAltText("poster");
    expect(img).toHaveAttribute(
      "src",
      expect.stringContaining("test-file-stub")
    );
  });
});
