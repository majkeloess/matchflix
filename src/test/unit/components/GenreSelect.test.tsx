import { render, screen } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import GenreSelect from "../../../components/GenreSelect";
import { genres, TEXT } from "../../../constants/text";
describe("GenreSelect component", () => {
  it("should render All text correctly", () => {
    render(<GenreSelect />, { wrapper: HashRouter });
    expect(
      screen.getByText((c) => c.includes(TEXT.movieAll))
    ).toBeInTheDocument();
  });

  it("should render all genres correctly", () => {
    render(<GenreSelect />, { wrapper: HashRouter });
    genres.forEach((genre) => {
      expect(screen.getByRole("option", { name: genre })).toBeInTheDocument();
    });
  });
});
