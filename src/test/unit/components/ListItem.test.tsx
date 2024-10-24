import { render, screen } from "@testing-library/react";
import ListItem from "../../../components/ListItem";
import { mockData } from "../../../constants/exampleData";
import { Provider } from "react-redux";
import store from "../../../redux/store";
describe("ListItem Component", () => {
  it("should render list item", () => {
    render(
      <Provider store={store}>
        <ListItem movie={mockData} />
      </Provider>
    );

    expect(screen.getByTestId("list-item")).toBeInTheDocument();
  });

  it("should render movie data correctly", () => {
    render(
      <Provider store={store}>
        <ListItem movie={mockData} />
      </Provider>
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
