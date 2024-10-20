import { render, screen } from "@testing-library/react";
import ListItem from "../../../components/ListItem";
import { mockData } from "../../../constants/exampleData";
import MoviesContextProvider from "../../../context/MoviesContextProvider";

describe("ListItem Component", () => {
  it("should render list item", () => {
    render(
      <MoviesContextProvider>
        <ListItem movie={mockData} />
      </MoviesContextProvider>
    );

    expect(screen.getByTestId("list-item")).toBeInTheDocument();
  });

  it("should render movie data correctly", () => {
    render(
      <MoviesContextProvider>
        <ListItem movie={mockData} />
      </MoviesContextProvider>
    );

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
