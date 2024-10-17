import { render, screen } from "@testing-library/react";
import ListPage from "../../../pages/ListPage";
import { HashRouter } from "react-router-dom";
import { TEXT } from "../../../constants/text";

describe("ListPage component", () => {
  it("should", () => {
    render(<ListPage />, { wrapper: HashRouter });

    expect(
      screen.getByText((content) => content.includes(TEXT.listMain))
    ).toBeInTheDocument();
  });
});
