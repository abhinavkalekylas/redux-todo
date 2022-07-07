import TodoForm from "./TodoForm";
import toJson from "enzyme-to-json";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import store from "../store";

it("renders correctly TodoForm component", () => {
  const wrapper = shallow(
    <Provider store={store}>
      <TodoForm />
    </Provider>
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});

// test todo input
it("test todoform input", () => {
  const wrapper = mount(
    <Provider store={store}>
      <TodoForm />
    </Provider>
  );
  const event = { target: { name: "todo", value: "maths hw" } };
  console.log(wrapper.find(".inputtodo").debug());
  wrapper.find(".inputtodo").at(0).simulate("change", event);
  wrapper.update();
  expect(wrapper.find(".inputtodo").at(0).props().value).toEqual("maths hw");
});

fit("test todoform btn", () => {
  const wrapper = mount(
    <Provider store={store}>
      <TodoForm />
    </Provider>
  );
  wrapper.find(".btn").at(0).simulate("click");
  console.log(wrapper.debug());
  //   expect(
  //     wrapper.props().children.props.closeModal.mock.invocationCallOrder[0]
  //   ).toEqual(1);
});
