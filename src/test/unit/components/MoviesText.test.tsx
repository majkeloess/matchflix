import { render, screen } from "@testing-library/react";
import { mockData } from "../../../constants/exampleData";
import MoviesContextProvider from "../../../context/MoviesContextProvider";
import MoviesText from "../../../components/MoviesText";

describe("MoviesText component", () => {
  it("should render movie title correctly", () => {
    render(
      <MoviesContextProvider>
        <MoviesText movie={mockData} />
      </MoviesContextProvider>
    );

    expect(
      screen.getByText((c) => c.includes(mockData.title))
    ).toBeInTheDocument();
  });
  it("should render genre title correctly", () => {
    render(
      <MoviesContextProvider>
        <MoviesText movie={mockData} />
      </MoviesContextProvider>
    );
    expect(
      screen.getByText((c) => c.includes(mockData.genre))
    ).toBeInTheDocument();
  });
  it("should render movie rating correctly", () => {
    render(
      <MoviesContextProvider>
        <MoviesText movie={mockData} />
      </MoviesContextProvider>
    );
    expect(
      screen.getByText((c) => c.includes(mockData.rating + "/10"))
    ).toBeInTheDocument();
  });
});
