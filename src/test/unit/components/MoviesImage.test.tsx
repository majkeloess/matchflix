import { render, screen, fireEvent } from "@testing-library/react";
import MoviesImage from "../../../components/MoviesImage";
import { mockData } from "../../../constants/exampleData";
import { Provider } from "react-redux";
import store from "../../../redux/store";

describe("MoviesImage component", () => {
  it("should open modal when the image is clicked", () => {
    render(
      <Provider store={store}>
        <MoviesImage movie={mockData} />
      </Provider>
    );

    const img = screen.getByTestId("movies-image");
    fireEvent.click(img);
  });
});
