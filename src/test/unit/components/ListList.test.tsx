import { render, screen } from "@testing-library/react";
import ListList from "../../../components/ListList";

describe("ListList Component", () => {
  it("should render list correctly", () => {
    render(<ListList />);

    expect(screen.getByTestId("list")).toBeInTheDocument();
  });
});
