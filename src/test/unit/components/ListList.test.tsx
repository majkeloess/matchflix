import { render } from "@testing-library/react";
import ListList from "../../../components/ListList";
import { Provider } from "react-redux";
import store from "../../../redux/store";

describe("ListList Component", () => {
  it("should render list correctly", () => {
    render(
      <Provider store={store}>
        <ListList />
      </Provider>
    );

    //expect(screen.getByTestId("list")).toBeInTheDocument();
  });
});
