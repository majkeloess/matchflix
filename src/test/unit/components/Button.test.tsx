import { render, screen } from "@testing-library/react";
import Button from "../../../components/Button";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../redux/store";

describe("Button component", () => {
  it("should render button with the correct string", () => {
    render(
      <Provider store={store}>
        <Button text="Swipe!" redirect="/movies" />
      </Provider>,
      {
        wrapper: HashRouter,
      }
    );
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/swipe/i);
  });
});
