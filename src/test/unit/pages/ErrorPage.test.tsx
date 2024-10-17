import { render, screen } from "@testing-library/react";
import ErrorPage from "../../../pages/ErrorPage";
import { TEXT } from "../../../constants/text";

describe("ErrorPage component", () => {
  it("should render button correctly", () => {
    render(<ErrorPage />);
    expect(screen.getByTestId("button")).toBeInTheDocument();
  });

  it("should render 'Not found!' text correctly", () => {
    render(<ErrorPage />);
    expect(
      screen.getByText((content) => content.includes(TEXT.errorMain))
    ).toBeInTheDocument();
  });
  it("should render '404' text correctly", () => {
    render(<ErrorPage />);
    expect(
      screen.getByText((content) => content.includes(TEXT.errorCode))
    ).toBeInTheDocument();
  });
});
