import Todo from "./Todo";
import toJson from "enzyme-to-json";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import store from "../store";

it("renders correctly Todo component", () => {
  const wrapper = shallow(
    <Provider store={store}>
      <Todo />
    </Provider>
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
