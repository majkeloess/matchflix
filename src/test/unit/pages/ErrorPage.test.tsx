import { render, screen } from "@testing-library/react";
import ErrorPage from "../../../pages/ErrorPage";
import { TEXT } from "../../../constants/text";
import { HashRouter } from "react-router-dom";

describe("ErrorPage component", () => {
  it("should render button correctly", () => {
    render(<ErrorPage />, { wrapper: HashRouter });
    expect(screen.getByTestId("button")).toBeInTheDocument();
  });

  it("should render 'Not found!' text correctly", () => {
    render(<ErrorPage />, { wrapper: HashRouter });
    expect(
      screen.getByText((content) => content.includes(TEXT.errorMain))
    ).toBeInTheDocument();
  });
  it("should render '404' text correctly", () => {
    render(<ErrorPage />, { wrapper: HashRouter });
    expect(
      screen.getByText((content) => content.includes(TEXT.errorCode))
    ).toBeInTheDocument();
  });
});
