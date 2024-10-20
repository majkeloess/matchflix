import { render } from "@testing-library/react";
import ListList from "../../../components/ListList";
import MoviesContextProvider from "../../../context/MoviesContextProvider";

describe("ListList Component", () => {
  it("should render list correctly", () => {
    render(
      <MoviesContextProvider>
        <ListList />
      </MoviesContextProvider>
    );

    //expect(screen.getByTestId("list")).toBeInTheDocument();
  });
});
